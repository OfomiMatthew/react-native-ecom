import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeView from "./src/components/WelcomeComponent";
import HomeCaraousel from "./src/components/HomeCaraouselComponent";



export default function App() {
  return (
   <SafeAreaView>
    <WelcomeView/>
    <HomeCaraousel />
   </SafeAreaView>
  );
}


