import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screenloading = ({
  sizeUser = 10,
  textData = "Cargando...",
  colorUser = "#000",
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        size={sizeUser}
        color={colorUser}
        style={styles.loading}
      />
      <Text style={styles.title}>{textData}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loading: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default Screenloading;