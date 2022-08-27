import React, { useEffect, useState } from "react";
import { Text, View, Button} from "react-native";
import PrivateUsers from "./PrivateUsers";
const UserScreen = (props) => {
  const id = props.navigation.getParam("id");
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
  let privateUserData =[];
  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(json);
        setUserAddress(json.address);
        setUserCompany(json.company);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const addToPrivateListOnClick = () => {
    privateUserData.push(user);
  };

  useEffect(() => {
    console.log(id);
    setLoading(true);
    getUser();
  }, []);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={{ alignItems: "center", fontSize: 25 }}>
            {user.name}
          </Text>
          <Text>Username: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          <Text>
            Address: {userAddress.street}, {userAddress.suite},{" "}
            {userAddress.city}, {userAddress.zipcode}
          </Text>
          <Text>
            {" "}
            {userAddress.city}, {userAddress.zipcode}
          </Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Website: {user.website}</Text>
          <Text>
            Company: {userCompany.name}, {userCompany.catchphrase},{" "}
            {userCompany.bs}
          </Text>
          <Button
            onPress={addToPrivateListOnClick}
            title="Add to Private List"
            color="#841584"
            accessibilityLabel="Addition of user to private list"
            />
          <Button
            onPress={() =>
              props.navigation.navigate("PrivateUsers", {
                privateUserData: privateUserData
              })
            }
            title="View Private List"
           />
        </View>
      )}
    </View>
  );
};
UserScreen.navigationOptions = {
  title: "User Details"
};
export default UserScreen;
