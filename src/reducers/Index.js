
import { combineReducers } from "redux";
import BookReducer from "./BookReducer";
export default combineReducers({
  bookItem:BookReducer
});