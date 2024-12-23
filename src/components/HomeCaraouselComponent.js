import { Text, Image, View, FlatList, Dimensions } from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

const images = [
  {
    id: 1,
    url: "https://th.bing.com/th/id/OIP.exnlWPDtW3gd4fOAprj4qgHaE7?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    url: "https://th.bing.com/th/id/OIP.exnlWPDtW3gd4fOAprj4qgHaE7?rs=1&pid=ImgDetMain",
  },
];

const data = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
];
const HomeCaraousel = () => {
  return (
    <View>
      <View
        style={{
          height: 200,
          marginHorizontal: theme.sizes.medium,
          borderRadius: theme.sizes.medium,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.exnlWPDtW3gd4fOAprj4qgHaE7?rs=1&pid=ImgDetMain",
          }}
          style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        />
      </View>
      <View>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image
              style={{ resizeMode: "cover", width: "100%", height: "100%" }}
            source={item.url}
            horizontal={true}
            paddingEnabled={true}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeCaraousel;
