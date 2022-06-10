import React from "react";
import { View, Text, SafeAreaView, TextInput} from "react-native";

import styles from "./SearchBoxStyles";



export const SearchBox = ()=>{





        return(
            
            <SafeAreaView style={styles.searchBox}>

                <Text style={styles.label}>PICK UP</Text>
                <View style={styles.inputWrapper}>
                    {/* <Icon name="search" size={5} color="#FF5E3A" /> */}
                    <TextInput style={styles.inputSearch} placeholder="Choose pick-up location" />
                </View>

                <Text style={styles.label}>DROP OFF</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.inputSearch} placeholder="Choose drop-off location" />
                </View>
            </SafeAreaView>
            
            
        );     
}

export default SearchBox;