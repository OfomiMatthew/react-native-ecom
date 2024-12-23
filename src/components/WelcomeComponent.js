import { Feather, Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../constants/theme";

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

const styles = StyleSheet.create({
  welcomeTxt: (color, top) => ({
    fontSize: theme.sizes.xxLarge-6,
    color: color,
    marginTop: top,
    marginHorizontal: theme.sizes.small,
  }),
  searchIcon: {
    marginTop: theme.sizes.small,
    color: theme.colors.gray,
    marginHorizontal: theme.sizes.xSmall,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginHorizontal: theme.sizes.small,
    backgroundColor:theme.colors.secondary,
    borderRadius:theme.sizes.medium,
    marginVertical:theme.sizes.medium
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal:theme.sizes.small
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius:theme.sizes.small,
    marginRight:theme.sizes.small,
  },
  searchBtn: {
  backgroundColor:theme.colors.primary,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:theme.sizes.medium,
  width:50
  },
});
