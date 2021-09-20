import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { dashboardState } from "./dashboardReducer";
import { headerVisible } from "./headerReducer";

const RootReducers = combineReducers({
  authentication,
  headerVisible,
  dashboardState
});

export default RootReducers;
