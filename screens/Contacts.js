import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { StackNavigator,} from 'react-navigation';


import {contacts} from '../config/data';
import colors from '../config/colors';
import {ListItem} from '../components/listItem/index';
import Details from './Details';

export default class Contacts extends Component {
     handleRowPress = ((item) => {
        //make a navigation to details screen
        return this.props.navigation.navigate('Details', item); 
    });

    render() {
        return(
            <FlatList 
                data={ contacts }
                renderItem = {({item}) => 
                    <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
                }
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