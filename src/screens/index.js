import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home';
import UserScreen from './User';
import PrivateUsersScreen from './PrivateUsers';
const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    User: UserScreen,
    PrivateUsers: PrivateUsersScreen,
});
export default createAppContainer(StackNavigator);