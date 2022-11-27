import React,{useState, useEffect}  from "react";
import { View,StyleSheet,Text, Button,Image, TouchableOpacity, ScrollView,RefreshControl } from "react-native";
import jwtDecode from 'jwt-decode'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Fire from "./Fire";
import PushNotification from "react-native-push-notification";

PushNotification.createChannel(
    {
      channelId: "channel-id", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    //(created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );


function HomePage({ route, navigation }) {
    
    const [messageN, setMessage] = useState([]);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [VehicleModel, setVehicleModel] = useState("");
    const [Date, setDate] = useState("");

    

    
    const Notification = () => {
        Fire.get(msg => {
            
            setMessage(msg)
        })
        
        //console.log(messageN)
        if(messageN.user){
            PushNotification.localNotification({
                channelId: "channel-id",
                message: messageN.text,
                title:messageN.user.name,
            })
        }
        
        
        onRefresh()
        
    }
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh =React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    AsyncStorage.getItem("usertoken")
        .then((result) => {
            const decode = jwtDecode(result);
            if(decode.tag=="staff")
            setEmail(decode.email)
            setName(decode.firstName)
            setVehicleModel(decode.VehicleModel)
            setDate(decode.Date)
        })


    
    
    
    return (
        <View style={styles.view}>

            <View style={styles.circle} />
            <Text style={styles.body1}>WELCOME!</Text>
            <Text style={styles.body2}>{name}</Text>

            <View><Image style={styles.image} source={require("./assets/images/myDp.jpg")} /></View>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={Notification}
                />
            } style={styles.scroll}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}><Text style={styles.buttonText}>Profile</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScrollList")}><Text style={styles.buttonText}>View Their Locations</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AboutUs")}><Text style={styles.buttonText}>Help</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>

            </ScrollView>
            <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate("ChatPage", name)}><Text style={styles.continueText}>Chat</Text></TouchableOpacity>
        </View>
    );
}
const styles =StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#F4F5F7',
        alignItems:"center",
        justifyContent:"center",
        paddingTop:20,
        
    },
    body1:{
        textAlign:"center",
        color:"black",
        fontSize:20,
        marginBottom:20,
    },
    body2:{
        textAlign:"center",
        color:"black",
        fontSize:30,
        marginBottom:20,
        
    },
    
    button:{
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
        
        
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:"yellow",
        borderWidth:10
    },
    buttonText:{
        color:"white"
    },
    scroll:{
        paddingHorizontal:70,
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:120,
        top:320
    },
    continue:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        left:150,
        top:-20
    },
    continueText:{
        color:"black"
    }
    
})

export default HomePage;