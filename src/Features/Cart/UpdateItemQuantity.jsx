import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({id, currentQuantity}){
const dispatch=useDispatch();

return(
    <div className="space-x-7 rounded-lg px-4 bg-[#f3f4f6] py-1">
        <button onClick={()=>dispatch(decreaseItemQuantity(id))}>-</button>
        <span>{currentQuantity}</span>
        <button onClick={()=>dispatch(increaseItemQuantity(id))}>+</button>
    </div>
)
}
export default UpdateItemQuantity;