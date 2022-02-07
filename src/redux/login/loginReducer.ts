import { loginTypes } from "./loginTypes";

const initialState = {
  username: "",
  useremail: "",
  userphone: "",
  isLogin:true
};
export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.LOGIN_USER:
      return {
        ...state,
        username: action.payload,
      };
    case loginTypes.LOGIN_EMAIL:
      return {
        ...state,
        useremail: action.payload,
      };
    case loginTypes.LOGIN_PHONE:
      return {
        ...state,
        userphone: action.payload,
      };
      case loginTypes.IS_LOGIN:
        return{
          ...state,
          isLogin: action.payload
        }
    default:
      return state;
  }
};
