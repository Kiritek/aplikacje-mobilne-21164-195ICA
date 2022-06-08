import {SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


const LazyLoadingImage = ({imageUri}) => {
      const [loaded,setLoaded] = useState(false);
    return (
      <View style={styles.container}>
        <Image
          source={{uri:imageUri}}
          style={{width:400,height:400}}
          PlaceholderContent={<ActivityIndicator/>}
          />
          

        </View>
        );
  }
  const IconSet = ()=>{

    return(
      <SafeAreaView style={{flexDirection:"row"}}>
        <Ionicons name="logo-angular" size={32} color="red" />
        <Ionicons name="logo-android" size={32} color="green" />
        <Ionicons name="logo-apple" size={32} color="white" />
        <Ionicons name="logo-facebook" size={32} color="blue" />
        <Ionicons name="logo-javascript" size={32} color="yellow" />
        <Ionicons name="logo-linkedin" size={32} color="lightblue" />
        <Ionicons name="logo-twitch" size={32} color="purple" />
        <Ionicons name="logo-python" size={32} color="blue" />
        <Ionicons name="logo-windows" size={32} color="lightblue" />
      </SafeAreaView>
    )

  }

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <LazyLoadingImage imageUri={'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg'} />
        <IconSet />
    </SafeAreaView>
  );
}
