import { View, Text, FlatList } from "react-native";
import React from "react";
import fetchHomeProduct from "../hooks/fetchHomeProduct";
import LottieView from "lottie-react-native";
import ProductCardComponent from "../components/ProductCardComponent";

const HomeProductListScreen = () => {
  const { isLoading, error, data } = fetchHomeProduct();
  return (
    <View>
      {isLoading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LottieView
            source={require("../../assets/jsons/animation.json")}
            autoPlay
            style={{ width: 50, height: 50, marginTop: 50 }}
          />
        </View>
      ) : error ? (
        <Text>Issue fetching data</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default HomeProductListScreen;
