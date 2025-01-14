import { View, Text } from 'react-native'
import LottieView from "lottie-react-native";

const LoadingErrorComponent = ({isLoading,error}) => {
    if (isLoading) {
        return (
          <View style={{ justifyContent: "center", alignItems: "center",flex:1 }}>
            <LottieView
              source={require("../../assets/jsons/animation.json")}
              autoPlay
              style={{ width: 50, height: 50, marginTop: 50 }}
            />
          </View>
        );
      }
    
      if (error) {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Error fetching data</Text>
          </View>
        );
      }
      return null
}

export default LoadingErrorComponent