import { StyleSheet } from "react-native";

const styles = {
	container:{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
	},
	map:{
		...StyleSheet.absoluteFillObject
	},
	continue:{
        width:80,
        height:80,
        borderRadius:80/2,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        left:150,
        top:-40
    },
	buttonText:{
        color:"black",
    },
}

export default styles;