import { Feather, Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../constants/theme";
import styles from "../styles/welcome.style";


export default function WelcomeView() {
  return (
    <View>
      <View>
        <Text style={styles.welcomeTxt(theme.colors.black, 70)}>Find The Most</Text>
        <Text style={styles.welcomeTxt(theme.colors.primary,0)}>Luxurious Furniture</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("tap swap");
          }}
        >
          <Feather name="search" size={25} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="what are you looking for? "
          />
        </View>
        <View style={styles.searchBtn}>
          <Ionicons color={theme.colors.offWhite} size={36} name="camera-outline" />
        </View>
      </View>
    </View>
  );
}


