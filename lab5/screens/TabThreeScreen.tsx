import { Image, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';

const CustomTouchableOpacity = () => {
    const artLinks= ['https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114135-01-most-famous-paintings-mona-lisa.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114347-02-most-famous-paintings-last-supper.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114425-03-most-famous-paintings-starry-night-restricted.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114518-04-most-famous-paintings-the-scream-restricted.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114612-05-most-famous-paintings-guernica.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114705-06-most-famous-paintings-the-kiss-restricted.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_779,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191029114856-07-most-famous-paintings-girl-with-a-pearl-earring-restricted.jpg']


    const [count, setCount] = useState(0);
    const onPress = () => {if(count<6){
        setCount(count + 1);
        }else{
        setCount(0);
        }
    }
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Image
        style={{width:Dimensions.get("window").width/2,height:200}}
        source={{
            uri: artLinks[count],
        }}
    />
        </View>
        <TouchableOpacity
          style={{ alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10}}
          onPress={onPress}
        >
          <Text
          style={{
            fontSize:25}}>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  };
const CustomTouchableHightlight = () =>{
    const foodLinks= ['https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg',
'https://i.pinimg.com/236x/fa/38/c2/fa38c2e209c4f257380ab81ebfde90a8.jpg',
'https://i.pinimg.com/236x/6a/58/ed/6a58eda5cea4d65978804ea7a16e9897.jpg',
'https://i.pinimg.com/236x/66/5b/ae/665bae52e4d20e2b4126c75b0e3e5dcd.jpg',
'https://i.pinimg.com/236x/1f/27/7f/1f277fec06c1c4f76200500f2ce9392b.jpg',
'https://i.pinimg.com/236x/73/26/9e/73269e77a127453075b4d481044f9d82.jpg',
'https://i.pinimg.com/236x/92/54/b4/9254b4a4ea08e61c03d15e67daee3fe0.jpg',
'https://i.pinimg.com/236x/2c/03/40/2c0340e0351fb84caca3a49b687414a1.jpg',
'https://i.pinimg.com/236x/ea/ea/4d/eaea4d6092ee6cc8365fdd32ae01d8ae.jpg',
'https://i.pinimg.com/236x/c8/af/3d/c8af3db4eed2fb51d39fa379cc95bce4.jpg']

    const [count, setCount] = useState(0);
    const onPress = () => {
        if(count<9){
        setCount(count + 1);
        }else{
        setCount(0);
        }
        
    }
    return( <View style={styles.container}>
        
        <View style={{alignItems: "center",marginTop:10}}>
        <Image
        style={{width:Dimensions.get("window").width/2,height:200,marginBottom:5}}
        source={{
            uri: foodLinks[count],
        }}
    />
        </View>
        <TouchableHighlight onPress={onPress}>
          <View style={{alignItems: "center"}}>
            <Text
            style={{fontSize:25,
            color:"black",
             backgroundColor:"whitesmoke",
             textAlign:"center",borderRadius:5,
             width:Dimensions.get("window").width/2,
            marginBottom:10}}
             >Tap to change photo</Text>
          </View>
        </TouchableHighlight>
      </View>);
}


export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomTouchableHightlight />
        <CustomTouchableOpacity />
      </ScrollView>
    </SafeAreaView>
  );
}
