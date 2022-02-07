import { loginTypes } from "./loginTypes";

export const setUsername = (name: any) => {
  return {
    type: loginTypes.LOGIN_USER,
    payload: name,
  };
};

export const setUserEmail = (email: any) => {
  return {
    type: loginTypes.LOGIN_EMAIL,
    payload: email,
  };
};

export const setUserPhone = (phone: any) => {
  return {
    type: loginTypes.LOGIN_PHONE,
    payload: phone,
  };
};
export const setisLogIn = (togle: any) => {
  return {
    type: loginTypes.IS_LOGIN,
    payload: togle,
  };
};