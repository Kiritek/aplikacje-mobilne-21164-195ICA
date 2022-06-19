import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
    padding:0,
    margin:0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },input: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign:'center',
    borderRadius: 15,
    marginTop: 5,
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    marginHorizontal: 20,
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
    width: Dimensions.get('window').width,
    height:120,
    marginBottom:2,
    
  },
  imageFood:{
    width:(Dimensions.get('window').width/3)-16,
    height:130,
    marginLeft:2,
    marginBottom:2,
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