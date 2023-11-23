import { StyleSheet, StatusBar, View, ScrollView } from 'react-native';
import Home from "./components/Home"
import Navbar from './components/Navbar';
export default function App() {
  return (
    <View style={styles.container} className="bg-black text-white">
      <ScrollView className="w-full">
        <Home/>
      </ScrollView>
      <StatusBar style="auto" translucent/>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
