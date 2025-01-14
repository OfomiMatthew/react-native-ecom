import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import ProductCardComponent from "../components/ProductCardComponent";
import { useEffect, useState } from "react";

import LottieView from "lottie-react-native";

const productList = [
  {
    id: 1,
    title: "Product 1",
    price: "$100",
    path: require("../../assets/images/f2.jpg"),
  },
  {
    id: 2,
    title: "Product 2",
    price: "$100",
    path: require("../../assets/images/f5.jpg"),
  },
  {
    id: 3,
    title: "Product 3",
    price: "$100",
    path: require("../../assets/images/f3.jpg"),
  },
  {
    id: 4,
    title: "Product 4",
    price: "$100",
    path: require("../../assets/images/f4.jpg"),
  },
  {
    id: 5,
    title: "Product 5",
    price: "$100",
    path: require("../../assets/images/f6.jpg"),
  },
];

const ProductScreen = () => {
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation.json")}
          autoPlay
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
  }
  const renderItem = ({ item }) => {
    return (<ProductCardComponent item={item} />);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={productList}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
       
      />
    </SafeAreaView>
  );
};

export default ProductScreen;
