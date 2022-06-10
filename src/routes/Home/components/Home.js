import React from "react";
import { View, Text } from "react-native";
import { MapContainer } from "./MapContainer";
import { enableLatestRenderer } from 'react-native-maps';
import { Container }  from "react-bootstrap";

class Home extends React.Component{
    componentDidMount(){
        this.props.setName();
    }
    render(){
        const region = {
            latitude:6.968610,
            longitude:80.783943,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }

        

// enableLatestRenderer();

        return(
            
                <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <MapContainer region={region}/>
                <Text>Hello {this.props.name}</Text>
                </View>
            
            
        );
    }      
}

export default Home;