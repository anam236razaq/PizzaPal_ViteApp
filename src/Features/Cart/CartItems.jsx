import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItems({item}){
    const {id, name, totalPrice}=item;

    const currentQuantity=useSelector(getCurrentQuantityById(id));

    return(
        <li className="text-lg flex items-center justify-between mb-4">
            <p className="capitalize">{name}</p>
            <div className="flex items-center space-x-7">
                <p>${totalPrice}</p>
                <UpdateItemQuantity id={id} currentQuantity={currentQuantity}/>
                <DeleteItem id={id}/>
            </div>
        </li>
    )
}
export default CartItems;