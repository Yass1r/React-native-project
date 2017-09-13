import  React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { Headers, Actions } from '../components/UserDetails';
import { capitalizeFirstLetter } from '../helpers/string';


export default class Details extends Component {
    render() {
        const item = this.props.navigation.state.params;
        return(
            
            <ScrollView>
                <Headers {...item} />
                <Actions {... item}/>
            </ScrollView>
        );
    }
};