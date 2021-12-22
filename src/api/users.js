import { API_URL } from "../utils/functions";

export const registerAPI = async (userData) => {
  try {
    const URL = `${API_URL}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(URL, params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return null;
  }
};

export const loginAPI = async (userData) => {
  try {
    const URL = `${API_URL}/auth/local`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(URL, params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return null;
  }
};

export const getMeAPI = async (token) => {
  try {
    const url = `${API_URL}/users/me`;
    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(url, params);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};