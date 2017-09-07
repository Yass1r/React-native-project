import React from 'react';
import { StyleSheet, Text, View ,FlatList ,Platform } from 'react-native';
import Contacts from './screens/Contacts';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>a</Text>
      </View>
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