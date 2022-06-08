import {
  SafeAreaView,
} from "react-native";
import styles from "../styles";
import { Text, View } from "../components/Themed";
import React, { useState } from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/FontAwesome';


const NetShow = () => {
const netInfo = useNetInfo();
return (
  <View>
    <View>
    <Text>Connection Type: {netInfo.type}</Text>
    <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
    <View style={{flexDirection:'row',alignContent:'space-around',alignSelf:'auto'}}>
    <Icon name="wifi" size={32} color={netInfo.type?.toString() == "wifi" ? "green" : "red"} />
    <Icon name="signal" size={32} color={netInfo.type?.toString() =="celluar" ? "green" : "red"} />
    <Icon name={netInfo.isConnected?.toString() ? "check" : "remove"} size={32} color={netInfo.isConnected?.toString() ? "green" : "red"} />
    </View>
    
    </View>
  </View>
);
}

export default function TabFourScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NetShow />
    </SafeAreaView>
  );
}
