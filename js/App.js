import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Listings from './screens/Listings/Listings';
import MovieItem from './screens/MovieItem/MovieItem';

class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppNavigator = createStackNavigator({
  Listings: Listings,
  MovieItem: MovieItem,
});

export default createAppContainer(AppNavigator);
