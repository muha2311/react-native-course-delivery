import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:5,
        padding:5,
        borderRadius:8,
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,

    },
    contentContainer:{
        flexDirection:"row",
        alignItems:"center",

    },
    title:{
        fontSize:16,
        lineHeight:32,
    },
    desc:{
        fontSize:10,
        lineHeight:24,
    },
    text:{
        marginStart:5,
    },
    image:{
        width:80,
        height:80,
        borderRadius:8,
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:"center",
        paddingTop:14,

    }
})