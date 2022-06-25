import React,{useState}  from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import images from "./config/images";
import { Icon } from "@rneui/themed";

import jwtDecode from 'jwt-decode'
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    Button,
    Container,
    ScreenContainer,
    Touchable,
    withTheme,
} from '@draftbit/ui';




function Profile({ route, navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [VehicleModel, setVehicleModel] = useState("");
    const [Date, setDate] = useState("");

    AsyncStorage.getItem("usertoken")
        .then((result) => {
            const decode = jwtDecode(result);

            if(decode.tag=="driver"){}
            setEmail(decode.email)
            setName(decode.VehicleOwner)
            setVehicleModel(decode.VehicleModel)
            setDate(decode.Date)
        })
    
        return (<ScreenContainer style={styles.screenContainerJb}
            scrollable={true}
            hasSafeArea={false}>
            <ImageBackground
                style={styles.imageBackgroundNb}
                source={require("./assets/images/Taxi.png")}
                resizeMode="cover"
            />
            <Container
                style={styles.containerEA}
                elevation={0}
                useThemeGutterPadding={true}
            >
                <Image
                    style={StyleSheet.flatten([
                        styles.imageA3,
                        { borderRadius: 10 },
                    ])}
                    resizeMode="cover"
                    source={require("./assets/images/profile-girl.png")}
                /> 

                <Text
                    style={StyleSheet.flatten([
                        styles.textPr
                    ])}
                >
                    {name}
                </Text>
                {/* <Button style={styles.buttonP2} type="outline">
                    Edit Profile
                </Button> */}
            </Container>

            <Container useThemeGutterPadding={true} elevation={0}>
                <Touchable
                    style={StyleSheet.flatten([
                        styles.touchableOk,
                    ])}
                >
                    <View style={styles.viewKs}>
                        <Text >Privacy Settings</Text>
                        <Icon
                            style={styles.iconFE}
                            size={24}
                            name="account-circle"
                        />
                    </View>
                </Touchable>

                <Touchable
                    style={StyleSheet.flatten([
                        styles.touchableOk,
                    ])}
                >
                    <View style={styles.viewKs}>
                        <Text >Privacy Settings</Text>
                        <Icon
                            style={styles.iconFE}
                            size={24}
                            name="account-circle"
                        />
                    </View>
                </Touchable>

                <Touchable
                    style={StyleSheet.flatten([
                        styles.touchableOk,
                    ])}
                >
                    <View style={styles.viewKs}>
                        <Text >Privacy Settings</Text>
                        <Icon
                            style={styles.iconFE}
                            size={24}
                            name="account-circle"
                        />
                    </View>
                </Touchable>

                <Touchable
                    style={StyleSheet.flatten([
                        styles.touchableOk,
                    ])}
                >
                    <View style={styles.viewKs}>
                        <Text >Privacy Settings</Text>
                        <Icon
                            style={styles.iconFE}
                            size={24}
                            name="account-circle"
                        />
                    </View>
                </Touchable>
            </Container>

        </ScreenContainer>
            )
}



const styles = StyleSheet.create({
    screenContainerJb: {
        justifyContent: 'flex-start',
    },
    viewKs: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    viewYR: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    viewS1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewAl: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    imageBackgroundNb: {
        width: '115%',
        height: 250,
        
        opacity:0.2
    },
    imageA3: {
        height: 120,
        width: 120,
    },
    containerEA: {
        alignItems: 'center',
        marginTop: -65,
    },
    textPr: {
        width: '100%',
        textAlign: 'center',
        marginTop: 16,
    },
    touchableOk: {
        borderTopWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 32,
    },
    iconFE: {
        height: 24,
        width: 24,
    },
    iconCl: {
        width: 24,
        height: 24,
    },
    iconZz: {
        width: 24,
        height: 24,
    },
    iconZb: {
        height: 24,
        width: 24,
    },
    buttonP2: {
        marginTop: 5,
        alignSelf: 'center',
        width: '100%',
        borderRadius:30
    },
    touchableOm: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
    },
    touchableBp: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
    },
    touchableJg: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
    },
});

export default Profile;
