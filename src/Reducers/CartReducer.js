
import { updateCart } from "../Actions/CartAction"
 

const initialState={
    numofThings : 10
}
const CartReducer = (state = initialState ,action)=>{
    switch(action.type){
        case updateCart: return{
            ...state,
            numofThings:state.numofThings -1 
        }
        default :return state
    }
}
export default CartReducer