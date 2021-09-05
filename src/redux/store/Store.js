import { createStore } from "redux";
import RootReducers from "../reducers/Root.reducer";
const store = createStore(RootReducers);

export default store;
