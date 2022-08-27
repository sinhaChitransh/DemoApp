import React from 'react';
import { Text, View } from 'react-native';
const PrivateUsersScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Private Users</Text>
        </View>
    );
};
PrivateUsersScreen.navigationOptions = {
    title: 'Private User Details'
};
export default PrivateUsersScreen;