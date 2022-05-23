import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Image } from 'react-native';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';





let ArtGallery = () =>{
  return(
  <View style={styles.artGalleryFlex}>
    <Image
        style={styles.imageBackground}
        source={{
          uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114135-01-most-famous-paintings-mona-lisa.jpg',
        }}
      />
      <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114347-02-most-famous-paintings-last-supper.jpg',
          }}
        />
        <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114425-03-most-famous-paintings-starry-night-restricted.jpg',
          }}
        />
        <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114518-04-most-famous-paintings-the-scream-restricted.jpg',
          }}
        />
        <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114612-05-most-famous-paintings-guernica.jpg',
          }}
        />
        <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114705-06-most-famous-paintings-the-kiss-restricted.jpg',
          }}
        />
        <Image
          style={styles.imageBackground}
          source={{
            uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114856-07-most-famous-paintings-girl-with-a-pearl-earring-restricted.jpg',
          }}
        />
    </View>);

}
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} persistentScrollbar={true}>
        <ArtGallery />

      </ScrollView>
    </SafeAreaView>
  );
}


        

