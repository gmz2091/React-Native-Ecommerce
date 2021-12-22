import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../styles/colors";

const Userinfo = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>
        {user.name && user.lastname
          ? `${user.name} ${user.lastname}`
          : `${user.email} ${user.username}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.primary,
  },
});

export default Userinfo;
