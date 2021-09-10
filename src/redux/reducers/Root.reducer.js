import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { headerVisible } from "./headerReducer";

const RootReducers = combineReducers({
  authentication,
  headerVisible,
});

export default RootReducers;
