import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({id}){
const dispatch=useDispatch();

    return <button className="text-[#d97706] text-2xl" onClick={()=>dispatch(deleteItem(id))}><MdDelete /></button>
}
export default DeleteItem;