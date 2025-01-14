import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:theme.colors.primary
  },
  image: {
    width: "95%",
    height: 250,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: theme.sizes.small,

    marginTop: theme.sizes.small,
    alignSelf: "center",
  },
  details: {
    // backgroundColor:theme.colors.white,
    // width:theme.sizes.width
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.sizes.small,
    marginBottom: theme.sizes.small,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginRight:20
  },
  rating: {
    flexDirection: "row",
    //    justifyContent:'flex-start',
    alignItems: "center",
    marginHorizontal: theme.sizes.small,
  },
  title: {
    fontSize: theme.sizes.large,
    fontFamily: "Roboto_700Bold",
  },
  price: {
    fontSize: theme.sizes.medium,
    fontFamily: "Roboto_700Bold",
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 5,
    borderRadius: 10,
  },
  textSpace: {
    marginHorizontal: theme.sizes.xSmall,
    color: theme.colors.gray,
  },
  descriptionWrapper: {
    marginTop: theme.sizes.large,
    marginHorizontal: theme.sizes.small,
    marginBottom:theme.sizes.large
  },
  descriptionTitle: {
    fontFamily:"Roboto_700Bold",
    fontSize: theme.sizes.large-3,
    // marginBottom: theme.sizes.xSmall,
  },
  descriptionText: {
    fontFamily:"Roboto_500Regular",
  
    lineHeight: 20,
    textAlign:"justify"
  },

  location:{
    flexDirection:"row",
    padding:5,
    justifyContent:"space-between",
    borderRadius:theme.sizes.large,
    backgroundColor:theme.colors.secondary
  },
  cartRow:{
    marginHorizontal:theme.sizes.small,
    flexDirection:"row",
    marginTop:theme.sizes.small,
    justifyContent:"space-between",
    alignItems:"center"
  },
  cartTitle:{
    marginLeft:theme.sizes.small,
    fontSize:theme.sizes.medium,
    backgroundColor:theme.colors.black,
    color:theme.colors.white,
    padding:10,
    borderRadius:theme.sizes.small,
   
  },
  addCart:{
    width:40,
    height:40,
    backgroundColor:theme.colors.black,
    borderRadius:theme.sizes.medium,
    justifyContent:"center",
    alignItems:"center"
   
  },

  
});

export default styles;
