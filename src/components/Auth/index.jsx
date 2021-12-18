import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import * as YUP from "yup";
import { registerAPI } from "../../api/users";
import { formStyle } from "../../styles";

const RegisterForm = ({ changeForm }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: YUP.object(validationSchema()),
    onSubmit: async (userData) => {
      console.log("Registro enviado");
      setLoading(true);
      try {
        await registerAPI(userData);
        console.log("Registro enviado 2.0");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Toast.show("Error al registrar usuairo, intente de nuevo", {
          position: Toast.positions.CENTER,
        });
        console.log(error.message);
        console.log(error);
      }
      console.log("Registro exitoso");
      changeForm();
    },
  });
  return (
    <View>
      <Text>RegisterForm</Text>
      <TextInput
        label="Email"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Username"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        label="Password"
        style={formStyle.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Confirm Password"
        style={formStyle.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      />
      <Button
        mode="contained"
        style={formStyle.btnSuccess}
        onPress={formik.handleSubmit}
        disabled={loading}
        loading={loading}
      >
        {loading ? null : "Register"}
      </Button>
      <Button
        mode="text"
        style={formStyle.btnText}
        labelStyle={formStyle.btnTextLabel}
        onPress={changeForm}
      >
        Iniciar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterForm;

const initialValues = () => {
  return {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
};

const validationSchema = () => {
  return {
    email: YUP.string().email(true).required(true),
    username: YUP.string().required(true),
    password: YUP.string().required(true),
    confirmPassword: YUP.string()
      .required(true)
      .oneOf([YUP.ref("password")], true),
  };
};

//Para verificar que un password sea igual a otro
// .oneOf([YUP.ref("password")], true)
