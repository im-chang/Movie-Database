import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    padding: height / 35,
    backgroundColor: colors.teal,
    color: colors.white,
    fontSize: 25,
    fontFamily: fonts.main,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: width / 2.5,
    height: height / 3.5,
  },

  movieInfo: {
    margin: width / 20,
    flexGrow: 1,
  },

  infMovie: {
    display: 'flex',
    flexDirection: 'row',
  },

  overview: {
    paddingTop: width / 20,
    paddingBottom: width / 20,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  overviewText: {
    fontFamily: fonts.main,
    color: colors.lightGrey,
  },
  movieText: {
    padding: width / 20,
    display: 'flex',
    flex: 1,
    fontFamily: fonts.main,
  },
  release: {
    padding: 5,
    color: colors.lightGrey,
    fontSize: 20,
    fontFamily: fonts.main,
  },
  rating: {
    margin: 5,
    padding: 5,
    fontSize: 18,
    fontFamily: fonts.main,
  },
  favorite: {
    margin: 10,
    padding: 10,
    width: width / 3.5,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightTeal,
  },

  favoriteText: {
    color: colors.lightGrey,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: fonts.main,
    textTransform: 'uppercase',
  },
});

export default styles;
