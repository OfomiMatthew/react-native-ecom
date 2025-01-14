import { Text, Image, View, FlatList, Dimensions } from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

const images = [
  {
    id: 1,
    path: require('../../assets/images/f2.jpg')
  },
  {
    id: 2,
    path: require('../../assets/images/f5.jpg')
  },
  {
    id: 3,
    path: require('../../assets/images/f3.jpg')
  },
  {
    id: 4,
    path: require('../../assets/images/f4.jpg')
  },
  {
    id: 5,
    path: require('../../assets/images/f6.jpg')
  },
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
          backgroundColor:theme.colors.offWhite
        }}
      >

        <FlatList
        data={images}
        renderItem={({item})=>(
          <Image source={item.path}  style={{ resizeMode: "cover", width: width - 2 * theme.sizes.medium, height: 200,marginRight:5,borderRadius:5 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator ={false}
        keyExtractor={(item) => item.id.toString()}
        snapToAlignment="center"
        
        
        />

        {/* <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.exnlWPDtW3gd4fOAprj4qgHaE7?rs=1&pid=ImgDetMain",
          }}
          style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        /> */}


      </View>
   
    </View>
  );
};

export default HomeCaraousel;
