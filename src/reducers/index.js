import { combineReducers } from "redux";
import BookReducer from "./bookReducer"
import SelectedBookReducer from "./selectedbookreducers";


export default combineReducers  ({
    books: BookReducer,
    selectedBook : SelectedBookReducer
});