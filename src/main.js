

import React,{Component} from "react";
import { View,StyleSheet,Text, Button, TouchableOpacity,} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomePage from "./HomePage";
import ProfilePicture from "./profilePicture";
import ScrollList from "./listScroll";
import LoginPage from "./login";
import ChatPage from "./chat";
import Map from "./map";


function WelcomeScreen({navigation}) {
        return (
            <View style={styles.view}>
                {/* <View style={styles.circle}/> */}
                <Text style={styles.body1}>Welcome</Text>
                <Text style={styles.body2}>To</Text>
                <Text style={styles.body3}>Driver Booking</Text>
                <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('LoginPage')}><Text style={styles.getStartFont}>Get Started</Text></TouchableOpacity>
            </View>  
        );

}




const Stack = createNativeStackNavigator(

);



class App extends Component{
    render() {
        return(
            
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTitleStyle:{
                        color:"yellow",
                        fontWeight:"bold",
                        fontFamily:"roboto",
                        fontSize:20
                    },
                    headerTintColor:'yellow',

                    headerStyle:{
                        backgroundColor:'black',
                        
                    }
                }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Getting Started' }} />
                    <Stack.Screen name="HomePage" component={HomePage}/>
                    <Stack.Screen name="ProfilePicture" component={ProfilePicture}/>
                    <Stack.Screen name="ScrollList" component={ScrollList} options={{ title: 'Shedules' }}/>
                    <Stack.Screen name="LoginPage" component={LoginPage}/>
                    <Stack.Screen name="ChatPage" component={ChatPage} options={{ title: 'Chat' }}/>
                    <Stack.Screen name="Map" component={Map}/>
                </Stack.Navigator>
            </NavigationContainer>
            

        );
    }
}



const styles =StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"yellow",
        alignItems:"center",
        justifyContent:"center",

    },
    body1:{
        textAlign:"center",
        color:"black",
        fontSize:20
    },
    body2:{
        textAlign:"center",
        color:"black"
    },
    body3:{
        textAlign:"center",
        color:"black",
        fontSize:40,
        paddingBottom:50
    },
    body4:{
        padding:1,
        textAlign:"center",
        color:"black",
        fontSize:10,
        position:20
    },
    button:{
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
        
    },
    background:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
    getStartFont:{
        color:"white",
        fontSize:15
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:-120,
        top:-20,
        opacity:0.3
    }

})


export default App;

// export default createNativeStackNavigator(Stack);