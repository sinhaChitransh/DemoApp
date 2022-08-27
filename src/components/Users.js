import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import User from "./User";
const Users = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View style={{ padding: 20, flexDirection: "row" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("User", {
                  id: item.id
                })
              }
            >
              <View>
                <User user={item} />
                <Text>{item.userId}</Text>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default Users;
