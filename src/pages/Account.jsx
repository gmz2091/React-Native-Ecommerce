import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Search from "../components/SearchBar";

const Account = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Text>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

