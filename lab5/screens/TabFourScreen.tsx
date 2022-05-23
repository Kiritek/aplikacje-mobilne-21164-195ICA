import { Dimensions, SafeAreaView, TouchableHighlight, Image, ScrollView } from 'react-native';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';


const SwipeableComponent = ({mailAuthor, mailTopic, mailDescription,mailDate, mailImage}) => {
  const [read, setRead] = useState(false);
  const [star, setStar] = useState(false);

  const StarDisplay = ({ star }) => {
    if (star) {
      return (
        <Icon name="star" size={25} color="white" />
      );
    }
    else {
      return (
        <Icon name="star-o" size={25} color="white" />
      );
    }
  }
  const ReadDisplay = ({ read }) => {
    if (read) {
      return (
        <Icon name="check" size={25} color="white" />
      );
    }
    else {
      return (
        <Icon name="check-square" size={25} color="white" />
      );
    }
  }

  const setReadSwipe = (read)=>{
    setRead(read=>!read)
  }
  const leftContent = <Text
    style={{ textAlign: 'center' }}>Pull to mark as read</Text>;

  const rightButtons = [
    <TouchableHighlight onPress={(star) => setStar(star => !star) }><StarDisplay star={!star} /></TouchableHighlight>
  ];

  return (
    <SafeAreaView style={{ width: Dimensions.get("window").width, height:100 }}>
      <Swipeable leftContent={leftContent} rightButtons={rightButtons} onLeftActionRelease={setReadSwipe}>
        <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', backgroundColor:"#202020",}}>
          <View style={{ alignSelf: 'flex-start',backgroundColor:"#202020" ,alignItems:'center'}}>
            <Image
              style={{ width: 45, height: 45, borderRadius: 30, marginBottom:2}}
              source={{ uri: mailImage}}
            />
            <ReadDisplay read={read}/>
          </View>
          <View style={{ alignSelf: 'center', width: 250, marginLeft: 5 ,backgroundColor:"#202020",}}>
            <Text style={{ color: '#A9A9A9', fontSize: 20, }}>{mailAuthor}</Text>
            <Text style={{ color: '#f5f5f5', fontSize: 16, }}>{mailTopic}</Text>
            <Text style={{ color: '#f5f5f5', fontSize: 14, }}>{mailDescription}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end' ,backgroundColor:"#202020", marginLeft:5}}>
            <Text style={{alignItems:'center',marginBottom:25}}>{mailDate}</Text> 
            <StarDisplay star={star} />
          </View>
        </View>
      </Swipeable>
    </SafeAreaView>
  );
}


export default function TabFourScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <Text lightColor='#282828' darkColor='white' style={{ fontSize: 18, marginBottom: 10 }}>Received</Text>
        <SwipeableComponent mailAuthor = 'Maklowicz' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='18:28'  mailImage ='https://thumbs.dreamstime.com/b/krakow-poland-october-robert-maklowicz-th-inte-international-book-fair-61268815.jpg'/>
        <SwipeableComponent mailAuthor = 'Youtube' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='17:15'  mailImage ='https://www.seekpng.com/png/detail/400-4001409_youtube-logo-png.png'/>
        <SwipeableComponent mailAuthor = 'Facebook' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='15:26'  mailImage ='https://www.facebook.com/images/fb_icon_325x325.png'/>
        <SwipeableComponent mailAuthor = 'Instagram' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='15:13'  mailImage ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'/>
        <SwipeableComponent mailAuthor = 'Twitter' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='11:53'  mailImage ='https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_1280.jpg'/>
        <SwipeableComponent mailAuthor = 'AMW' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='08:01'  mailImage ='https://www.platformazakupowa.pl/file/get_new/2a939a21276dd9bfec57c3b77e4a6312.jpg'/>
        <SwipeableComponent mailAuthor = 'Github' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='08:01'  mailImage ='https://www.influxdata.com/wp-content/uploads/GitHub-logo.jpg'/>
        <SwipeableComponent mailAuthor = 'AMW' mailTopic ='Mauris quis ligula eu '  mailDescription ='Proin massa est, ultrices et porta nons' mailDate ='08:01'  mailImage ='https://www.platformazakupowa.pl/file/get_new/2a939a21276dd9bfec57c3b77e4a6312.jpg'/>

      </ScrollView>
    </SafeAreaView>
  );
}

