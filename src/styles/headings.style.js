import { StyleSheet } from "react-native"
import { theme } from "../constants/theme"

const styles = StyleSheet.create({
    headerTitle:{
    fontSize:theme.sizes.large,
    fontFamily:'Roboto_700Bold'
    },
    header:{
        flexDirection:'row',
        marginTop:theme.sizes.medium,
        justifyContent:'space-between',
        // backgroundColor:'black',
        paddingHorizontal:theme.sizes.medium,
        // paddingVertical:theme.sizes.small,
        alignItems:'center',
        position:'relative'
    
    },
    container:{
        // marginHorizontal:theme.sizes.small,
    }
    })

export default styles