import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import WelcomeView from "../components/WelcomeComponent";
import HomeCaraousel from "../components/HomeCaraouselComponent";
import HomeHeadingComponent from "../components/HomeHeadingComponent";

import fetchHomeProduct from "../hooks/fetchHomeProduct";

import ProductCardComponent from "../components/ProductCardComponent";
import LoadingErrorComponent from "../components/LoadingErrorComponent";
const HomeScreen = () => {
  const { isLoading, error, data } = fetchHomeProduct();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadingErrorComponent isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <WelcomeView />
              <HomeCaraousel />
              <HomeHeadingComponent />
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
