import React from "react";
import { Text, ScrollView } from "react-native";
import Search from "../components/SearchBar";
import Statusbar from "../components/StatusBar";
import colors from "../styles/colors";

const Account = () => {
  return (
    <>
      <Statusbar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <ScrollView>
        <Text>Account</Text>
      </ScrollView>
    </>
  );
};

export default Account;
