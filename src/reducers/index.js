import { combineReducers } from "redux";
import products from "./products";
import updateItem from "./updateItem";

const appReducers = combineReducers({
    products : products,
    updateItem : updateItem,
});

export default appReducers;