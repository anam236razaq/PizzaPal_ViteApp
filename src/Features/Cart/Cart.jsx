import { useDispatch, useSelector } from "react-redux";
import Footer from "../../UI/Footer";
import Navbar from "../../UI/Navbar";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { Link} from "react-router-dom";
import CartItems from "./CartItems";

function Cart(){
    const dispatch=useDispatch();
    const cart=useSelector(getCart);

    
   return(
        <>
            <Navbar />
            <div className="my-8 mx-32 flex flex-col">
               {!cart.length? (<EmptyCart />
               ):(
                <div>
                    <Link className="text-[#d97706] text-lg" to="/menu">&larr; Back to menu</Link>
                    <h2 className="mt-2 text-2xl ml-3">Your Cart...</h2>
                    <ul className="ml-10 mt-4">
                        {cart.map((item)=>(
                            <CartItems key={item.id} item={item}/>
                        ))}
                    </ul>
                    <div className="mt-5 space-x-4 ml-10 ">
                        <Link className="bg-white text-[#d97706] px-4 py-2 border border-[#d97706]
                        hover:bg-[#d97706] hover:text-white rounded-lg" to="/order">Order</Link>
                        <button className="bg-[#f3f4f6] px-4 py-2 rounded-lg" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                    </div>
                </div>
                )}
            </div>
            <Footer />
        </>
   )
}
export default Cart;

