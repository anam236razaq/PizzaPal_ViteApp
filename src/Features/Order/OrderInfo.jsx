import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice } from "../Cart/cartSlice";

function OrderInfo(){
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const location=useLocation();
   const {firstName, phoneNo, address}=location.state || {};
   const cart=useSelector(getCart);
   const totalCartPrice=useSelector(getTotalCartPrice);
   const deliveryCharges=10;
   const totalOrderPrice=totalCartPrice+deliveryCharges

   function backClick(){
      dispatch(clearCart());
      navigate("/cart");
   }

return(
   <div className="flex items-center justify-center h-screen w-[100%] flex-col">
      {cart.length>0? (
      <div className="flex w-[45%]  h-[90vh] bg-[#f3f4f6] flex-col">
            <InfoHeading title="Items Information:" />
            {cart.map((item)=>(
               <div key={item.id} className="flex ml-14 mt-2 text-lg">
                 <h1 className="font-semibold mr-2">Item Name:</h1>
                  <p className="mr-2 capitalize">{item.name}</p>
                  <h1 className="font-semibold mr-2">Item Quantity:</h1>
                  <p className="mr-2 capitalize">{item.quantity}</p>
                  <h1 className="font-semibold mr-2">Item Price:</h1>
                  <p className="mr-2 capitalize">${item.totalPrice}</p>
               </div>
            ))}
            <InfoSection title="Total Price:" content={`$${totalCartPrice}`} />
            <div>
               <InfoHeading title="Customer Information:" />
               <div className=" ml-14 mt-2 text-lg">
                  <CustomerDetail title="Customer Name:" data={firstName} />
                  <CustomerDetail title="Customer PhoneNo:" data={phoneNo} />
                  <CustomerDetail title="Address:" data={address} />
               </div>
            </div>
           
            <InfoSection title="Delivery Charges:" content={`$${deliveryCharges}`} />
            <InfoSection title="Total Charges:" content={`$${totalOrderPrice}`} />
      </div>
       ): (
         <button className="text-[#d97706] text-lg flex" onClick={backClick}>
         &larr; Back to Cart</button>
      )}
   </div> 
)
}
export default OrderInfo;

function InfoHeading({title}){
   return <h1 className="mt-6 text-xl ml-8 font-semibold">{title}</h1>
}

function InfoSection({title, content}){
   return(
   <div className="flex items-center">
      <InfoHeading title={title} />
      <p className="mt-7 ml-2 text-lg">{content}</p>
   </div>
   )
}

function CustomerDetail({title, data}){
   return(
      <div className="flex mt-1">
         <h1 className="font-semibold mr-2">{title}</h1>
          <p className="mr-2 capitalize">{data}</p>
   </div>
   )
}