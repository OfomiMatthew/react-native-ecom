import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./src/screens/ProductScreen";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./src/screens/BottomTabs";
import ProductDetail from "./src/screens/ProductDetail";
import { LoginContext } from "./src/contexts/UserLoginContext";
import { FetchContext } from "./src/contexts/RefetchFavContext";
import { CartContext } from "./src/contexts/UserCartContext";


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [userLogin,setUserLogin] = useState(true)
  const [refetch,setRefetch] = useState('')
  const [userCart,setUserCart] = useState(0)
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    
   

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded.

      // Code that runs once the app has loaded and the splash screen has been hidden goes here.
      // This is where you would typically perform any background tasks, API calls, etc. to ensure the app is ready to use.
      // For example, you might want to fetch data from a remote API or start a background task to process data in the background.
      // Be sure to handle any errors that may occur during this process.
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Loading state while fonts are loading.
  }

  return (
    <LoginContext.Provider value={{userLogin,setUserLogin}}>
      <FetchContext.Provider value={{refetch,setRefetch}}>
        <CartContext.Provider value={{userCart, setUserCart}}>
  
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartContext.Provider>
    </FetchContext.Provider>
    </LoginContext.Provider>
  );
}
