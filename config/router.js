import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { StackNavigator } from 'react-navigation';
import {capitalizeFirstLetter} from '../helpers/string';

export const ContactScreen = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts',
        }

    },
    Details: {
        screen: Details,
        // navigationOptions: {
        //     title: 'Details',
        // }
        navigationOptions: ({navigation})=>({
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
        }),
    },
});