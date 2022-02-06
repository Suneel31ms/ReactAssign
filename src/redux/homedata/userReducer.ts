import { userTypes } from "./userTypes";

const initialState = {
  loading: true,
  user: [],
  error: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case userTypes.FETCH_USER_FAIL:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
