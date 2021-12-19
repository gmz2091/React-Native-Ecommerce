import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import Account from "../pages/Account";

const Tab = createMaterialBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Inicio",
          }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{
            title: "Favorites",
          }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{
            title: "Account",
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            title: "Cart",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationBottom;
