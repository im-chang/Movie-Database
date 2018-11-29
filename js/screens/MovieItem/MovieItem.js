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

class MovieItem extends Component {
  static navigationOptions = {
    title: 'Movie Details',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff',
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
              <Text style={styles.release}>
                Release Date: {`${movie.release_date}`}
              </Text>
              <Text style={styles.rating}>
                Rating: {`${movie.vote_average}`} ⭐️
              </Text>
            </View>
          </View>
          <Text style={styles.overview}>{`${movie.overview}`}</Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(MovieItem);
