import { Image, Pressable, Text, View } from "react-native";
import FIcon from "react-native-vector-icons/Foundation";
import MIcon from "react-native-vector-icons/MaterialIcons";
export default function Navbar() {
    return (
        <View className="w-full">
            <View className="px-4 py-2 bg-blue-400 flex flex-row justify-between items-center">
                <View className="flex flex-row space-x-3">
                <View>
                    <Image source={require("../assets/icon.png")} className="w-10 h-10"/>
                </View>
                <View>
                    <Text className="font-bold text-white">Song Title</Text>
                    <Text className="font-semibold text-sm text-white">Artist</Text>
                </View>
                </View>
                <View className="flex flex-row space-x-3">
                    <Pressable>
                        <MIcon
                            name="speaker-group"
                            size={25}
                            color="gray"
                        />
                    </Pressable>
                    <Pressable>
                        <MIcon
                            name="favorite"
                            size={25}
                            color="gray"
                        />
                    </Pressable>
                    <Pressable>
                        <MIcon
                            name="play-arrow"
                            size={25}
                            color="gray"
                        />
                    </Pressable>
                </View>
            </View>
            <View className="flex flex-row justify-around w-full py-[1px] border-t border-gray-400">
                <Pressable className="flex flex-col items-center">
                    <FIcon
                        name="home"
                        size={35}
                        color="lightgray"
                    />
                    <Text className="text-white font-semibold">Home</Text>
                </Pressable>
                <Pressable className="flex flex-col items-center">
                    <MIcon
                        name="search"
                        size={35}
                        color="lightgray"
                    />
                    <Text className="text-white font-semibold">Search</Text>
                </Pressable>
                <Pressable className="flex flex-col items-center">
                    <MIcon
                        name="library-music"
                        size={35}
                        color="lightgray"
                    />
                    <Text className="text-white font-semibold">Library</Text>
                </Pressable>
            </View>
        </View>
    )
}