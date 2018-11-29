import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    padding: height / 35,
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 20,
  },
  image: {
    width: width / 2.5,
    height: height / 3.5,
  },

  movieInfo: {
    margin: width / 20,
  },

  infMovie: {
    display: 'flex',
    flexDirection: 'row',
  },

  overview: {
    padding: width / 25,
  },

  movieText: {
    padding: width / 20,
    display: 'flex',
    flex: 1,
  },
  release: {
    padding: height / 25,
    color: 'grey',
  },
  rating: {
    padding: height / 25,
  },
});

export default styles;
