import { StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';



let FoodGallery = () =>{
  return(
    <View>
  <View style={styles.foodGalleryFlex}>
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/fa/38/c2/fa38c2e209c4f257380ab81ebfde90a8.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/6a/58/ed/6a58eda5cea4d65978804ea7a16e9897.jpg',
        }}
    />
</View>
<View style={styles.foodGalleryFlex}>
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/66/5b/ae/665bae52e4d20e2b4126c75b0e3e5dcd.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/1f/27/7f/1f277fec06c1c4f76200500f2ce9392b.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/d2/7e/1c/d27e1cedd302b9f94f5f112cd465c093.jpg',
        }}
    />
</View>
<View style={styles.foodGalleryFlex}>
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/73/26/9e/73269e77a127453075b4d481044f9d82.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/92/54/b4/9254b4a4ea08e61c03d15e67daee3fe0.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/71/10/7f/71107f6b892967d63a1cd914359a508d.jpg',
        }}
    />
</View>
<View style={styles.foodGalleryFlex}>
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/a1/89/93/a189935abbf8e0b75f151a57f3f0f4a5.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/ed/f0/85/edf08555012b53136636500f3108c5c1.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/62/69/9c/62699c1cfb16d381acb20d2ae8b9b7c3.jpg',
        }}
    />
</View>
<View style={styles.foodGalleryFlex}>
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/2c/03/40/2c0340e0351fb84caca3a49b687414a1.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/ea/ea/4d/eaea4d6092ee6cc8365fdd32ae01d8ae.jpg',
        }}
    />
    <Image
        style={styles.imageFood}
        source={{
            uri: 'https://i.pinimg.com/236x/c8/af/3d/c8af3db4eed2fb51d39fa379cc95bce4.jpg',
        }}
    />
</View>
</View>);
}

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} persistentScrollbar={true}>
        <FoodGallery />
        <FoodGallery />
        <FoodGallery />
      </ScrollView>
    </SafeAreaView>
  );
}
