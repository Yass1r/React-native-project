import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Actions = function({email, cell, phone}) {

    return (
        <View style={{flex:1, alignItems: 'flex-start' , justifyContent: 'center', backgroundColor: 'white', paddingVertical: 40}}>
            <View style={{margin: 10}}>
                <Text style={{color: 'gray',fontSize: 10}}>EMAIL:</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}>{email}</Text>
                <Icon name='md-mail' size={25} color={'gray'}/>
            </View>
            </View>
            <View style={{margin: 10}}>
                <Text style={{color: 'gray',fontSize: 10}}>CELL:</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16}}>{cell}</Text>
                    <Icon name='md-call' size={25} color={'gray'}/>
                    <Icon name='md-text' size={25} color={'gray'}/>
                </View>
            </View>
            <View style={{margin: 10}}>
                <Text style={{color: 'gray',fontSize: 10}}>HOME</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16}}>{phone}</Text>
                    <Icon name='md-call' size={25} color={'gray'}/>
                </View>
            </View>
        </View>
    );
};

export default Actions;