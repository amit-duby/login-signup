import { ADD_TO_CART } from "../../Constants/constant"
export const addToCort=(data)=>{
    // console.log('action',data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}