import React from 'react';
import { StyleSheet, Text, View ,FlatList ,Platform } from 'react-native';
import {ContactScreen} from './config/router';
export default class App extends React.Component {
  render() {
    return (
      <ContactScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});