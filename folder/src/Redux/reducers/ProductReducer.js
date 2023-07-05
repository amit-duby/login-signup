import {  ActionTypes } from "../Constants/action-types";


 const initialstate={
    products:[{
        id:1,
        title:"amit",
        category:"programmer"
  }, ],
 }
export const productReducer=(state=initialstate,{type , payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
        return state;
        default:
            return state;
    }
}
