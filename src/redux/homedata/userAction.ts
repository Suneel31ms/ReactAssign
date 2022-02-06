import axios from "axios";
import { userTypes } from "./userTypes";

export const loadingAction = () => {
  return {
    type: userTypes.FETCH_USER_REQUEST,
  };
};
export const successAction = (userData: any) => {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
    payload: userData,
  };
};
export const failAction = (userFail: any) => {
  return {
    type: userTypes.FETCH_USER_FAIL,
    payload: userFail,
  };
};

//action creator
export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(loadingAction);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const user = res.data;
        dispatch(successAction(user));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(failAction(errorMsg));
      });
  };
};
