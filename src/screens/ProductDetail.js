import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/product-detail.style";
import { RatingInput } from "react-native-stock-star-rating";
import { theme } from "../constants/theme";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import { decrement, increment,handlePress,handleCart } from "../utils/product_helper";
import { LoginContext } from "../contexts/UserLoginContext";
import { FetchContext } from "../contexts/RefetchFavContext";
import {CartContext} from '../contexts/UserCartContext'

const ProductDetail = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);
  const {userLogin,setUserLogin} = useContext(LoginContext)
  const {refetch, setRefetch} = useContext(FetchContext)
  const {userCart,setUserCart} = useContext(CartContext)
  const route = useRoute();

  const item = route.params.item;
  console.log("product id", item.id)
  console.log("fav id",refetch)

  return (
    <ScrollView style={styles.container}>
      <Image source={item.path} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <RatingInput
              rating={rating}
              setRating={setRating}
              size={25}
              maxStars={5}
              bordered={false}
              color={theme.colors.primary}
            />
            <Text style={{ fontSize: 19 }}> [{rating}]</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment(setCount, count)}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.textSpace}>{count}</Text>
            <TouchableOpacity onPress={() => decrement(setCount, count)}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        <View style={{ marginHorizontal: theme.sizes.xSmall }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text>Lagos, Nigeria</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text>Free Delivery</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.addCart} onPress={()=>handlePress(userLogin,navigation,item,setRefetch)}>
            <AntDesign  name="heart" color={theme.colors.white} size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyButton} onPress={() => console.log("Buy now")}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addCart}
            onPress={() => handleCart(navigation,item,count,userLogin,setUserCart)}
          >
            <Fontisto
              name="shopping-bag"
              size={20}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
