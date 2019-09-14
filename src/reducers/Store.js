import { createStore, combineReducers } from "redux";
import getData from "./reducer";

const rootReducers = combineReducers({
  getData
});
const store = createStore(rootReducers);

export default store;
