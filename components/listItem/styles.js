import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    email: {
        fontSize: 14,
        color: 'gray'
    },
});