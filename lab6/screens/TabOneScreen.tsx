import React from 'react';
import { SafeAreaView, ScrollView, Image } from 'react-native';
import styles from '../styles';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const ArtGallery = () =>{
  return(
  <View style={styles.artGalleryFlex}>
    <Image
        style={{width:400,height:300,marginBottom:10}}
        source={{
          uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114135-01-most-famous-paintings-mona-lisa.jpg',
        }}
      />
      <Image
        style={{width:400,height:300}}
        source={require('../assets/images/MonaLisa.jpg')
        }/>
     
    </View>);
}
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
        <ArtGallery />
    </SafeAreaView>
  );
}


        

