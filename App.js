import jwtDecode from "jwt-decode";
import React, { useState, useMemo, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { getTokenAPI, removeTokenAPI, setTokenAPI } from "./src/api/token";
import AuthContext from "./src/context/AuthContext";
import NavigationBottom from "./src/NavigationBar/NavigationBottom";
import Auth from "./src/pages/Auth";
import "react-native-gesture-handler";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenAPI();
      if (token) {
        console.log("Login Succes");
        setAuth({
          token,
          idUser: jwtDecode(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    setTokenAPI(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = async (user) => {
    if (user) {
      await removeTokenAPI();
      setAuth(null);
      console.log("Logout Success");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <NavigationBottom logout={logout} /> : <Auth />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
