import React, { useCallback, useState } from "react";
import { Text, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getMeAPI } from "../../api/users";
import Search from "../../components/SearchBar";
import Statusbar from "../../components/StatusBar";
import colors from "../../styles/colors";
import useAuth from "../../hooks/useAuth";

const Account = () => {
  const [user, setUser] = useState(null);
  const { auth } = useAuth();

  console.log(auth);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await getMeAPI(auth.token);
        console.log(data);
        setUser(data);
      })();
    }, [])
  );

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