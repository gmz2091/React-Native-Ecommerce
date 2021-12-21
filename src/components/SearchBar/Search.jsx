import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import colors from "../../styles/colors";

const Search = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Busca tu producto"
        // onChangeText={(text) => console.log(text)}
        // value={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
});

export default Search;
