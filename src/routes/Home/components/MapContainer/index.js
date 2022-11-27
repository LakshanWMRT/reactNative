import React,{useState, useEffect}  from "react";
import { View, TouchableOpacity, Text,Image } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SearchBox from "../searchBox";
import SearchResults from "../SearchResults";
import styles from "./MapContainerStyles";
 import AsyncStorage from "@react-native-async-storage/async-storage";

const carMarker = require("../../../../assets/images/Marker2.png");
const user2 = require("../../../../assets/images/Marker.png");

export const MapContainer = ({region, getInputData, toggleSearchResultModal, getAddressPrediction, resultTypes, predictions})=>{
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);



    
    const user = getNearByDrivers()
    AsyncStorage.getItem("latitude")
        .then((result) => {

            setLatitude(result)

        })

    AsyncStorage.getItem("longitude")
        .then((result) => {

            setLongitude(result)

        })
    console.log(latitude,longitude)

    return(
        <View style={styles.container}>
            <MapView 
            provider={MapView.PROVIDER_GOOGLE} 
            style={styles.map} 
            region={region}
            >
                <MapView.Marker
                    coordinate={region}
                    pinColor={'green'}
                    
                >
                    <Image
                        source={carMarker}
                        style={{ width: 169, height:300 }}
                        resizeMode="contain"
                    />
                </MapView.Marker>

                {/* {

                    <MapView.Marker
                        coordinate={{ latitude: 7.29054, longitude: 80.633725 }}

                    >
                        <Image
                            source={user2}
                            style={{ width: 169, height: 300 }}
                            resizeMode="contain"
                        />
                    </MapView.Marker>

                } */}



                </MapView>

                <TouchableOpacity style={styles.continue} onPress={()=>sendNearByDrivers(region)}><Text style={styles.buttonText}>Shere My Location</Text></TouchableOpacity>


                {/* <SearchBox 
                    getInputData={getInputData} 
                    toggleSearchResultModal={toggleSearchResultModal}
                    getAddressPrediction={getAddressPrediction}
                /> */}
                {/* {(resultTypes.pickUp || resultTypes.dropOff) &&
            <SearchResults predictions={predictions}/>
                } */}
        </View>
    )
}


export default MapContainer;

const sendNearByDrivers=(region)=> {
    console.log(region)
		fetch('http://10.0.2.2:4000/shareLocation/locationShare', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                
				latitude: region.latitude,
				longitude: region.longitude
			})
		})
			.then(res => {
				console.log(res.status)
			}).catch(err => {
				console.log("error happened:", err)
			})
}

const getNearByDrivers=()=>{
    fetch('http://localhost:4000/shareLocation/locationShare/630e3c67c7e2f0373d80cf26', {

        }).then(res=>res.json())
            .then(res => {

                AsyncStorage.setItem("longitude", res.anno.longitude)
                AsyncStorage.setItem("latitude", res.anno.latitude)
                console.log(res)
            
            }).catch(err => {
                console.log("error happened:", err)
            })
}



