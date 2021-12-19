import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../utils/functions";

export const setTokenAPI = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
    return true;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export const getTokenAPI = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const removeTokenAPI = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN);
    return true;
  } catch (error) {
    console.log(error);
  }
};
