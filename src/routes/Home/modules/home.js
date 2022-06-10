import update from "react-addons-update";
import constants from "./actionConstants";
import Geolocation from '@react-native-community/geolocation';
import { Dimensions } from "react-native";

const {GET_CURRENT_LOCATION} = constants;

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.922;
const LONGITUDE_DELTA= ASPECT_RATIO*LATITUDE_DELTA;

const ASPECT_RATION = width / height;

export function getCurrentLocation(){
	return(dispatch)=>{
		Geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: false, timeout: 10000, maximumAge: 10000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
		);
	}
}

function handleGetCurrentLocation(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

// const {SET_NAME} = constants;
// export function setName(){
//     return{
//         type:SET_NAME,
//         payload:"Randika"
//     }
// }

// function handleSetName(state, action){
//     return update(state, {
//         name:{
//             $set:action.payload
//         }
//     })
// }

const ACTION_HANDLERS = {
    GET_CURRENT_LOCATION:handleGetCurrentLocation
};
const initialState = {
    region:{}
};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}