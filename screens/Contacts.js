import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {contacts} from '../config/data';
import colors from '../config/colors';

export default class Contacts extends Component {
    render() {
        return(
            <FlatList 
                data={contacts}
                renderItem = {({item})=> <View ><Text>{item.email}</Text></View>}
                keyExtractor={(item) => item.email}
            />

        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});