import {combineReducers} from "redux";
import { productReducer, selectedProducts, wishSelectedProducts } from "./productReducer";

const reducers  =  combineReducers({
    allProducts: productReducer,
    product: selectedProducts,
    wishList:wishSelectedProducts,
});

export default reducers