import { addItem, getCurrentQuantityById } from "../Cart/cartSlice"; 
import { useDispatch, useSelector } from "react-redux";

function MenuItem({item}){
    const dispatch=useDispatch();
    const currentQuantity= useSelector(getCurrentQuantityById(item.id));

    const isInCart=currentQuantity>0;

    function handleAddToCart(){
        const newItem={id: item.id, name: item.name, unitPrice: item.price, quantity: 1, totalPrice: item.price * 1 }
            dispatch(addItem(newItem));
    }

    return(
        <div key={item.id} className="flex w-1/2 mb-10">
        <div className="w-1/2">
            <img className="rounded-xl w-[90%]" src={item.img} alt={item.name} />
        </div>
        <div className="w-3/4">
            <h2 className="text-xl uppercase text-[#d97706]">{item.name}</h2>
            <h3 className="text-xl">${item.price}</h3>
            <p className="w-[79%]">{item.Ingredients}</p>
            {!isInCart && <button className="bg-[#d97706] p-2 mt-1 text-white text-base rounded-md"
                    onClick={handleAddToCart}>Add to cart</button>}
        </div>
    </div>
    )
}

export default MenuItem;