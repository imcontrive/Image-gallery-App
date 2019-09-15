import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import getData from "./reducer";

const rootReducers = combineReducers({
  getData
});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
