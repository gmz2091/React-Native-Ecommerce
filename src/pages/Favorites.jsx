import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
