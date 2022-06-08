import {
    SafeAreaView, TextInput,TouchableHighlight, TouchableOpacity
} from "react-native";
import styles from "../styles";
import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function TabFiveScreen() {
    const [nickname, setNickname] = React.useState("Enter Github nickname");
    const storeData = async () => {
        try {
          await AsyncStorage.setItem('1', nickname)
        } catch (e) {
          // saving error
        }
      }


    return (

        
        <SafeAreaView style={styles.container}>
            <Text>Github nickname</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNickname}
                value={nickname}
            />

            <TouchableOpacity onPress={storeData} style={{width:100,height:30,backgroundColor:'grey',borderRadius:10, alignItems:'center',marginTop:5}}><Text style={{color:'black',paddingTop:5}}>Add Item</Text></TouchableOpacity>
        </SafeAreaView>
    );
}
  