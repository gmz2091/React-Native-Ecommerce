import { useFormik } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { formStyle } from "../../styles";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { loginAPI } from "../../api/users";

const LoginForm = ({ changeForm }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        console.log(formData);
        console.log("Formulario Enviado");
        const response = await loginAPI(formData);
        if (response.statusCode) throw "Error al iniciar sesion";
        console.log(response);
      } catch (error) {
        setLoading(false);
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
      }
      setLoading(false);
    },
  });
  return (
    <View>
      <TextInput
        label="Email o Usuario"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("identifier", text)}
        value={formik.values.identifier}
        error={formik.errors.identifier}
      />
      <TextInput
        secureTextEntry
        label="Contraseña"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        mode="contained"
        style={formStyle.btnSuccess}
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Entrar
      </Button>
      <Button mode="Text" style={formStyle.btnText} onPress={changeForm}>
        Registrarse
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;

const initialVales = () => {
  return {
    identifier: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  };
};
