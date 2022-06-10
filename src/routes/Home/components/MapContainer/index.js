import React from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SearchBox from "../searchBox";
import styles from "./MapContainerStyles";

export const MapContainer = ({region})=>{
    return(
        <View style={styles.container}>
            <MapView 
            provider={MapView.PROVIDER_GOOGLE} 
            style={styles.map} 
            region={region}
            >
                <MapView.Marker
                        coordinate={region}
                        pinColor="green"
                    />
                </MapView>

                <SearchBox/>
        </View>
    )
}

export default MapContainer;