import { StyleSheet } from "react-native";
import { ease } from "react-native/Libraries/Animated/Easing";
import colors from "./colors";

const formStyle = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  btnSuccess: {
    padding: 5,
    backgroundColor: colors.primary,
  },
  btnText: {
    marginTop: 20,
  },
  btnTextLabel: {
    color: colors.dark,
  },
});

export default formStyle;