import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./homedata/userReducer";
import { loginReducer } from "./login/loginReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","login"],
};
const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});
export default persistReducer(persistConfig, rootReducer);
