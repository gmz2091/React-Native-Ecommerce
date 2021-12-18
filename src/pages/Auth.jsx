import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import logo from "../../assets/favicon.png";
import RegisterForm from "../components/Auth";
import LoginForm from "../components/LoginForm";
import { layoutStyle } from "../styles/index";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const changeForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View style={layoutStyle.container}>
      <Image style={styles.logo} source={logo} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <LoginForm changeForm={changeForm} />
        ) : (
          <RegisterForm changeForm={changeForm} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
});

export default Auth;
