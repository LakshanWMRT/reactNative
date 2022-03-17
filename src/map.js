import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

export default function Map(){
    return(
        <View style={style.content}><Image  source={require("./assets/images/thumbnail.jpeg")}/></View>
        
    );
}
const style = StyleSheet.create({
    content: {
        flex:1,
        justifyContent:"center",
        resizeMode:"cover",
        backgroundColor:"yellow"
    },
    
});