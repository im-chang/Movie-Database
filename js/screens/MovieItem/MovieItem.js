import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { colors } from '../../config/styles';

class MovieItem extends Component {
  static navigationOptions = {
    title: 'Movie Details',
    headerStyle: {
      backgroundColor: colors.grey,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.white,
    },
  };

  render() {
    const { params } = this.props.navigation.state;
    const movie = params.item;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{`${movie.title}`}</Text>
        <View style={styles.movieInfo}>
          <View style={styles.infMovie}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://image.tmdb.org/t/p/w185' + `${movie.poster_path}`,
              }}
            />
            <View style={styles.movieText}>
              <Text style={styles.release}>{`${movie.release_date}`}</Text>
              <Text style={styles.rating}>
                ⭐️ {`${movie.vote_average}`}/10
              </Text>
              <TouchableOpacity style={styles.favorite}>
                <Text style={styles.favoriteText}> Mark As Favorite</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={styles.overviewText}>{`${movie.overview}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(MovieItem);
