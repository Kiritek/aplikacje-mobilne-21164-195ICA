import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from './styles';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.operatorsGallery}>
      <Text style={styles.title}>Spread operator</Text>
      <Text style={styles.textBackground}>Allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array.</Text>
      <Text style={styles.title}>Rest parameters</Text>
      <Text style={styles.textBackground}>The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.</Text>
      <Text style={styles.title}>useState hook</Text>
      <Text style={styles.textBackground}>
      Returns a stateful value, and a function to update it.
      During the initial render, the returned state (state) is the same as the value passed as the first argument(initialState).
      The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
      </Text>
    </View>
  );
}

