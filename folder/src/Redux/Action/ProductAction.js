import { ActionTypes } from "../Constants/action-types";
 export const setProduct=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products
    };
 };

 export const selectedProduct=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
 };