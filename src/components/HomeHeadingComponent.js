import { View, Text,TouchableOpacity } from "react-native";

import { theme } from "../constants/theme";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/headings.style";
import { useNavigation } from "@react-navigation/native";

const HomeHeadingComponent = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => nav.navigate("ProductScreen")}>
          <Entypo name="grid" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeadingComponent;
