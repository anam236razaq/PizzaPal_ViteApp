import { MdShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview(){
    const totalCartQuantity=useSelector(getTotalCartQuantity);
    const totalPrice=useSelector(getTotalCartPrice)

 return(
    <div className="flex items-center ml-4 text-[#d97706]">
        <MdShoppingBag className="text-2xl"/>
        <Link to="/cart">
            <span>{totalCartQuantity} Items - </span>
            <span>${totalPrice.toFixed(2)}</span>
        </Link>
    </div>
 )
}
export default CartOverview;