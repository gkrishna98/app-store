import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};
 
export const selectedProducts = (state={}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS: 
            return({...state, ...payload});
            case ActionTypes.REMOVE_SELECTED_PRODUCTS: 
            return{};
        default:
            return state;
    }
}

export const wishSelectedProducts = (state = [], { type, payload }) => {
  switch (type) {
      case ActionTypes.WISH_SELECTED_PRODUCTS: 
      console.log(payload);
      let ui;
      ui = ui?.map(val => ({...val, ...payload}))
      return {...ui};
    default:
      return state;
  }
};