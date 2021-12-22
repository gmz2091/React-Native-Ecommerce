import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

const Statusbar = ({ backgroundColor, ...rest }) => {
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} {...rest} />
      <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColor }} />
    </>
  );
};

export default Statusbar;
