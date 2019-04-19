import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux-immutable";
import reduxThunk from "redux-thunk";
import home from "./reducer/home";
const reducer = combineReducers({
    home
})
const store = createStore(reducer,applyMiddleware(reduxThunk));
export default store;