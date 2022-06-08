import {
    SafeAreaView,
  } from "react-native";
  import styles from "../styles";
  import { Text, View } from "../components/Themed";
  import React, { useEffect, useState } from "react";
  import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
  import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
  
 
  const CheckDataFromWeb=async () => {
      const response = await fetch("da")
  }
 
  export default function TabSixScreen() {
    const [nicknames, setNicknames] = useState();
    const [names , setNames] = useState();

    const netInfo = useNetInfo();

    async function loadFromWeb(){
           const name = await fetch(`https://api.github.com/users/${nicknames}`)
           setNames(name.name);
    }
    async function loadItems() {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        setNicknames(values);
        }

        useEffect(() => {
            loadItems();
            if(netInfo.isConnected==true){
                loadFromWeb()
            }
            else{
                setNames("Offline");
            }
         }, []);

    
    return (
      <SafeAreaView style={{backgroundColor:'gray',alignContent:'center',alignSelf:'center'}}>
        <View style={{flexDirection:"column"}}>
            <Text darkColor="white">{nicknames}</Text>
            <Text darkColor="white">{names}</Text>
        </View>
      </SafeAreaView>
    );
  }
  