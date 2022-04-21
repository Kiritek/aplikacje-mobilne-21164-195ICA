import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from './styles';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const randomNumbers: number[] = [];
  const randomNumberTwo: number[] = [];
  function randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  for (let i = 0; i < 100; i++) {
    let randomNumberResult = randomNumber(0,1000);
    randomNumbers.push(randomNumberResult);
    randomNumberTwo.push(randomNumberResult);
  }

  const PlainList = ()=>(
    <>
    {randomNumbers.map(mapNumber => <Text style={{color:"navy"}}>{mapNumber}</Text>)}
    </>
  )  

  const numbersSortDesc = randomNumberTwo.sort((a,b)=>b-a);  

  const SortedList = ()=>(
    <>
    {numbersSortDesc.map(mapNumber => <Text style={{color:"navy"}}>{mapNumber}</Text>)}
    </>
  )
  const FilteredList = ()=>(
    <>
    {randomNumbers
    .filter(mapNumber => mapNumber <500)
    .map(mapNumber => <Text style={{color:"navy"}}>{mapNumber}</Text>)}
    </>
  )
  
  
  return (
    <View style={styles.container}>
      <Text style = {{color:"navy"}}>
       Randomly generated numbers
      </Text>
      <View
      style={styles.numbersGallery}>
      <PlainList></PlainList>
      </View>
      <Text style = {{color:"navy"}}>
       Randomly generated numbers lesser than 500
      </Text>
      <View
      style={styles.numbersGallery}>
      <FilteredList></FilteredList>
      </View>
      <Text style = {{color:"navy"}}>
       Randomly generated sorted descending
      </Text>
      <View
      style={styles.numbersGallery}>
      <SortedList></SortedList>
      </View>
      
    </View>
  );
}

