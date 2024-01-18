import { Link } from "react-router-dom";

function EmptyCart(){
    return(
        <div className="flex flex-col">
            <Link to="/menu" className="text-[#d97706] text-lg">&larr; Back to menu</Link>
            <p className="text-lg">Your cart is still empty. Start adding some pizzas :)</p>
        </div>
    )
}
export default EmptyCart;