import { View, Text } from "react-native"

export default function Home() {
    return (
        <View className="w-full px-4">
            <View className="flex flex-row items-center space-x-2">
                <View>
                <Text className="text-white bg-green-800 text-center p-5" style={{borderRadius: "50%"}}>S</Text>
                </View>
                <View>
                <Text className="text-white text-center bg-green-600 px-2 py-2 h-fit rounded-xl">All</Text>
                </View>
                <View>
                <Text className="text-white text-center bg-gray-700 px-2 py-2 rounded-xl">Music</Text>
                </View>
            </View>
        </View>
    )
}