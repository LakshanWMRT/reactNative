import React,{useState} from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View,Image,TextInput,TouchableOpacity,Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";
import jwtDecode from 'jwt-decode'

export default function LoginPage({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [staff, setStaff] = useState(false);
    const [passenger, setPassenger] = useState(false);
    const [driver, setDriver] = useState(false);
    const[roll,setRoll] = useState("");
    


    return(
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Image style={styles.image} source={require("./assets/images/Taxi.png")} />

            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="User Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.checkboxContainer}>
            <CheckBox title={"staff"}
                checked={staff}
                onPress={() => setStaff(!staff)& setDriver(false)& setPassenger(false) & setRoll("staff")}
                checkedIcon={'dot-circle-o'}
                uncheckedIcon={'dot-circle-o'}
                checkedColor='#f5c71a'
                
            />
            <CheckBox title={"passenger"}
                checked={passenger}
                onPress={() => setPassenger(!passenger) & setStaff(false) & setDriver(false) & setRoll("passenger")}
                checkedIcon={'dot-circle-o'}
                uncheckedIcon={'dot-circle-o'}
                checkedColor='#f5c71a'
            />
            <CheckBox title={"driver"}
                checked={driver}
                onPress={() => setDriver(!driver) & setPassenger(false) & setStaff(false) & setRoll("driver")}
                checkedIcon={'dot-circle-o'}
                uncheckedIcon={'dot-circle-o'}
                checkedColor='#f5c71a'
                
            />
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={()=>combined({navigation,email:email,password:password,roll:roll})}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
        

        
    );
    
}

const combined=({navigation,email,password,roll})=>{
    


    console.log(roll)
    if(email=='' || password==''){
        alert("please fill with the correct credentials")
    }else if(roll==''){
        alert("please select roll")
    }
    else{
        login({email,password,roll})
        AsyncStorage.getItem("usertoken").then(res=>{
            jwtDecode(res);
            navigation.navigate("HomePage")

        }).catch(err=>{
            alert("Please check again Email, Password & Connectivity")
        })
        
        
    }
    
    
}



const login = ({email,password,roll})=>{
    fetch('http://10.0.2.2:4000/app/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    }).then(res => res.text())
    .then(res =>{
        AsyncStorage.setItem("usertoken", res)
    }).catch(err =>{
        console.log("error happened:",err)
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width:100,
        height:100,
        borderRadius:100/8
    },

    inputView: {
        backgroundColor: "#F4F5F7",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        borderColor:'#BAB7C3',
        borderWidth:StyleSheet.hairlineWidth,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'black'
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
    },
    loginText:{
        color:"white",
        // fontFamily:"roboto"
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500,
        backgroundColor:'#FFF',
        position:"absolute",
        left:-120,
        top:-20
    },
    checkboxContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    checkbox:{
        color:"red"
    }
});