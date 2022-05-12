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
  input: {
    height: 50,
    width: 200,
    backgroundColor: 'whitesmoke',
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign:'center',
    borderRadius: 15,
    marginTop: 5,

  },
  numbersGallery: {
    width:380,
    backgroundColor: 'whitesmoke',
    opacity: 0.6,
    borderColor: 'navy',
    borderRadius: 10,
    padding: 5,
    margin: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  numbersText:{
    color: "navy"
  },
  stepGallery:{
  backgroundColor: 'transparent',
  height: 400,
  display:'flex',
  flexDirection: "row",
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'flex-start',}
  ,
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
      color: '#f5deb3',
      opacity: 0.7,
      borderRadius: 10,
      width: 500
  },
  item: {
    backgroundColor: 'navy',
    padding: 20,
    marginVertical: 8,
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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