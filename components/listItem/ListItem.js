import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Platform, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {capitalizeFirstLetter} from '../../helpers/string';


const ListItem = ({contact, onPress}) =>{
    const nameContact = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    return (
        <TouchableHighlight
            onPress={onPress}
        >
            <View style={styles.row}>
                <Image 
                    source={{uri: contact.picture.thumbnail}}
                    style={styles.avatar}
                />
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text style={styles.name}>{nameContact}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View>
                    <Icon name='md-arrow-forward' size={25} color={'gray'}/>
                </View>
            </View>
        </TouchableHighlight>
    )
};

export default ListItem;