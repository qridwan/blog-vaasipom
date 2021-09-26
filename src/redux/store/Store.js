import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducers from "../reducers/Root.reducer";
const store = createStore(RootReducers, applyMiddleware(thunk));

export default store;
