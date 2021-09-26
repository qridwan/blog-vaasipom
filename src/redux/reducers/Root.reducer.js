import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { dashboardState } from "./dashboardReducer";
import { headerVisible } from "./headerReducer";
import { LandingPageState } from "./landingpage.reducer";

const RootReducers = combineReducers({
  authentication,
  headerVisible,
  dashboardState,
  LandingPageState,
});

export default RootReducers;
