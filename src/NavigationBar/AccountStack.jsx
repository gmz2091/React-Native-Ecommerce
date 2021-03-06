import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Account from "../pages/AccountStacksViews/Account";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Account",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AccountStack;
