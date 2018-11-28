import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: height / 2.5,
  },
});

export default styles;
