import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  operatorsGallery:{
    flexDirection:'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBackground:{
      padding: 5,
      backgroundColor: 'white',
      height: 150,
      color: 'gray',
      opacity: 0.7,
      borderRadius: 10,
      width: 350
  },
  imageBackground:{
    width:400,
    height:100
  },
  imageFood:{
    width:130,
    height:130
  },
  artGalleryFlex:{
    flexDirection: 'column',
    display: 'flex',
    alignContent: 'space-around',
    flexShrink: 5,
    justifyContent: 'space-evenly',
  },
  foodGalleryFlex:{
    flexDirection: 'row',
    display:'flex',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    flexGrow:1

  },
  foodGalleryFlexSub:{
    flexDirection: 'column'
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
  
});