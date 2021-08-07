import { StyleSheet } from "react-native";
export default StyleSheet.create({
    header:{
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:"#E7E7E7",
    },
    headerText:{
        color:"black",
        fontSize:24,
    },
    contentContainer:{
        paddingTop:12,
        paddingHorizontal:16
    },

    description:{
        fontSize:18,
        color:"#656565"
    },
    button:{
        backgroundColor:"teal",
        marginTop:16,
        alignSelf:"center",
        paddingVertical:10,
        paddingHorizontal:16,
        borderRadius:8
    },
    buttonText:{
        color:"white"
    },
    flx:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
})