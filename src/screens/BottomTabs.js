import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/theme";
import ProfileScreen from "./ProfileScreen";
import CartScreen from "./CartScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
};

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={24}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={24}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
