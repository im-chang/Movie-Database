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
import { fonts, colors } from '../../config/styles';

class Listings extends Component {
  static navigationOptions = {
    title: 'Listings',
    headerStyle: {
      backgroundColor: colors.grey,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.white,
      fontFamily: fonts.main,
      position: 'absolute',
      left: 0,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(
      'http://api.themoviedb.org/3/movie/popular?api_key=[YOUR_API_KEY]',
    );
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          numColumns={2}
          keyExtractor={item => '' + item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => navigate('MovieItem', { item: item })}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w185' + `${item.poster_path}`,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

export default withNavigation(Listings);
