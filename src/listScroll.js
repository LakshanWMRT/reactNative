import React,{useState} from "react";
import { View,Text, ScrollView, StyleSheet } from "react-native";

export default function ScrollList({navigation}){
    const [SetPeople]=useState([
        {name:'Chat Room 1',key:'1'},
        {name:'Chat Room 2',key:'2'},
        {name:'Chat Room 3',key:'3'},
        {name:'Chat Room 4',key:'4'},
    ]);

    return(
        <View style={style.container}>
            <Text style={style.topic}>See Locations</Text>
            <ScrollView>
                {SetPeople.map((item)=>{
                    return(
                        <View key={item.key}  >
                            <Text style={style.item} onLongPress={()=>navigation.navigate("Map")}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        paddingHorizontal:20,
        backgroundColor:"white"
    },
    item:{
        marginTop:24,
        padding:50,
        fontSize:24,
        backgroundColor:'yellow',
        borderRadius:40
        
    },
    topic:{
        alignContent:"center",
        textAlign:"center",
        margin:2,
        backgroundColor:"black",
        color:"yellow",
        fontSize:15,
        borderRadius:12
    }
})