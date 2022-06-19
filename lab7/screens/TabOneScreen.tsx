import React, { useEffect, useState} from 'react';
import { SafeAreaView,Text,Button} from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


Location.setGoogleApiKey("");
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [location, setLocation] = React.useState({"latitude": 0, "longitude" : 0});
  const [address, setAddress] = React.useState({"city":"","country":"","street":"","postalCode":""})
  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status){
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      setLocation({"latitude" : location.coords.latitude, "longitude" : location.coords.longitude });
      let geolocation = await Location.reverseGeocodeAsync({"latitude":location.coords.latitude,"longitude":location.coords.longitude});
      setAddress({"city":geolocation[3].city,"country":geolocation[3].country,"postalCode":geolocation[3].postalCode,"street":geolocation[3].street});

    }
  };
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1,width:200,alignSelf:'center',alignItems:'center'}}>
        <Button 
        onPress={getLocationAsync}
        title="Get Location"/>
        
        <Text style={{color:'#f5f5f5'}}>You are connetected from following coordinates</Text>
        <Text style={{color:'#f5f5f5'}}>longitude:{location.longitude}</Text>
        <Text style={{color:'#f5f5f5'}}>latitude:{location.latitude}</Text>
        <Text style={{color:'#f5f5f5'}}>Additional information:</Text>
        <Text style={{color:'#f5f5f5'}}>Country:{address.country}</Text>
        <Text style={{color:'#f5f5f5'}}>City:{address.city}</Text>
        <Text style={{color:'#f5f5f5'}}>Street:{address.street}</Text>
        <Text style={{color:'#f5f5f5'}}>Postal code:{address.postalCode}</Text>
      
      </View>
    </SafeAreaView>
  );
}


        

