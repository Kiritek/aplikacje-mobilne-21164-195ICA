import { ImageBackground, StyleSheet, Image } from 'react-native';
import styles from './styles';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const image = 'http://www.valverderaul.com/new2017/wp-content/uploads/2018/09/1809_Raul_Valverde_Empty_Art_Galleries_Taxonomy_075-768x432.jpg'
  return (
    <View style={styles.container}>

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
      </View>
    </View>
  );
}


