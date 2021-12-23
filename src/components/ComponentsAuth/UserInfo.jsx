import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Userinfo = ({ user }) => {
  return (
    <View style={styles.container}>
      {user.name && user.lastname ? (
        <Text>
          {user.name} {user.lastname}
        </Text>
      ) : (
        <Text>
          {user.email} {user.username}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    padding: 20,
  },
});

export default Userinfo;
