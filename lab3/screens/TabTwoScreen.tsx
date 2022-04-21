import { ImageBackground, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import { Text, View } from '../components/Themed';
import React from 'react';

export default function TabTwoScreen() {
  var j = 0;
  function CreateData(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }
  
  var dataGathered = [
    
  ];
  for(let i=0; i<10; ++i){
    dataGathered[j] = {id: j.toString(), title: CreateData(1).toString()}
    j++;
  }
  function generateMore(){
    for(let i=0; i<10; ++i){
      dataGathered[j] = {id: j.toString(), title: CreateData(1).toString()}
      j++
    }
  }
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataGathered}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={generateMore}
      />
    </SafeAreaView>
  );
}


