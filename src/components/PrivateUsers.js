import React from "react";
import { View, Text, FlatList } from "react-native";

const PrivateUsersScreen = (props) => {
    const privateUserData = props.navigation.getParam("privateUserData");
    
    return (
    <View style={{ padding: 20 }}>
        <FlatList
          data={privateUserData}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View>
                <Text>{item.userId}</Text>
             </View>
            )}
        />
    </View>
  );
};
PrivateUsersScreen.navigationOptions = {
    title: "Private Users"
  };
  export default PrivateUsersScreen;
