import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';

import {capitalizeFirstLetter} from '../../helpers/string';
import colors from '../../config/colors';

const Headers = ({picture, name})=> {
    const fullName = `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`;
    const window = Dimensions.get('window');
    return (
        <View style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
            <Image 
                source={{uri: picture.large}}
                style={{
                    width: window.width/2,
                    height: window.width/2, 
                    borderRadius: window.width / 4,
                }}
            />
            <View style={{paddingVertical: 10}}>
                <Text style={{fontSize: 25,}}>{fullName}</Text>
            </View>
        </View>
    );
};

export default Headers;