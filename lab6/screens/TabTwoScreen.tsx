import { StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';



let FoodGallery = () => {
    const [sliderSize, setSliderSize] = useState(0.5);



    return (
        <View style={{alignItems:'center',justifyContent:'center',margin:0,padding:0,backgroundColor:202020}}>
            <Slider
                style={{ width: Dimensions.get('window').width, height: 100 }}
                minimumValue={0.01}
                maximumValue={1}
                value={0.5}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value)=>setSliderSize(value)} />
            <Image
                style={{ width: sliderSize * Dimensions.get('screen').width/2, height: 200 * sliderSize,justifyContent:'center' }}
                source={{
                    uri: 'https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg',
                }}
            />
        </View>);
}

export default function TabTwoScreen() {
    return (
        <SafeAreaView>
                <FoodGallery />
        </SafeAreaView>
    );
}
