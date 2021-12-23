import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import colors from "../styles/colors";
import { StyleSheet } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AccountStack from "./AccountStack";
const Tab = createMaterialBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={styles.navigation}
        screenOptions={({ route }) => ({
          tabBarIcon: (routerStatus) => {
            return setIcon(route, routerStatus);
          },
        })}
      >
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
          component={AccountStack}
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

const setIcon = (route, routerStatus) => {
  let iconName = "";

  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "favorites":
      iconName = "heart";
      break;
    case "account":
      iconName = "bars";
      break;
    case "cart":
      iconName = "shopping-cart";
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={styles.icon} />;
};

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: colors.bgDark,
  },
  icon: {
    fontSize: 20,
    color: colors.fontLight,
  },
});