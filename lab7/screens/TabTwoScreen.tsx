import { StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import MapView, { Marker } from 'react-native-maps';


export default function TabTwoScreen() {
    const restaurants = [
        {
            "index": 1,
            "latlang": { "latitude": 54.51587, "longtitude": 18.530457317 },
            "title": "Moon",
            "description": "Chinesee Restaurant"
        },
        {
            "index": 2,
            "latlang": { "latitude": 54.50963951421426, "longtitude": 18.53775260390683 },
            "title": "Rozmaryn Miejskie Bistro",
            "description": ""
        },
        {
            "index": 3,
            "latlang": { "latitude": 54.5336099, "longtitude": 18.4873431 },
            "title": "Gruby Benek",
            "description": ""
        },
        {
            "index": 4,
            "latlang": { "latitude": 54.545988918995455, "longtitude": 18.456673720378458 },
            "title": "Taksim Kebab",
            "description": ""
        },
        {
            "index": 5,
            "latlang": { "latitude": 54.520819343715345, "longtitude": 18.537790881025035 },
            "title": "Obłoki",
            "description": ""
        },
        {
            "index": 6,
            "latlang": { "latitude": 54.54193957532214, "longtitude": 18.453588193240773 },
            "title": "KFC",
            "description": ""
        },
        {
            "index": 7,
            "latlang": { "latitude": 54.53919453288258, "longtitude": 18.45102309203884 },
            "title": "Pociąg Smaku",
            "description": ""
        },
        {
            "index": 8,
            "latlang": { "latitude": 54.53368103432688, "longtitude": 18.488267514284257 },
            "title": "Pattaya Bar",
            "description": ""
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}>
                    {restaurants.map((restaurant) => (
                        <Marker
                            key={restaurant.index}
                            coordinate={{ latitude: restaurant.latlang.latitude, longitude: restaurant.latlang.longtitude }}
                            title={restaurant.title}
                            description={restaurant.description}
                        />
                    ))}
                </MapView>
            </View>
        </SafeAreaView>
    );
}
