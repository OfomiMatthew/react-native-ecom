import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/product.style";

// const productList = [
//   {
//     id: 1,
//     title: "Product 1",
//     price: "$100",
//     path: require("../../assets/images/f2.jpg"),
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     price: "$100",
//     path: require("../../assets/images/f5.jpg"),
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     price: "$100",
//     path: require("../../assets/images/f3.jpg"),
//   },
//   {
//     id: 4,
//     title: "Product 4",
//     price: "$100",
//     path: require("../../assets/images/f4.jpg"),
//   },
//   {
//     id: 5,
//     title: "Product 5",
//     price: "$100",
//     path: require("../../assets/images/f6.jpg"),
//   },
// ];

const ProductCardComponent = ({ item }) => {
  const navigation = useNavigation()
  return (
   <TouchableOpacity style={{flex:1}} onPress={()=>navigation.navigate('ProductDetail',{item})}>
    <View style={styles.imageContainer}>
      <Image source={item.path} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default ProductCardComponent;
