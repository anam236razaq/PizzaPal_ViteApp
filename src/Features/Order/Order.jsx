import Heading from "../../UI/Heading";
import InputField from "../../UI/InputField";
import { UseForm } from '../../Contexts/ContactFormContext';
import { useLocation } from '../../hooks/useLocation';
import { useNavigate } from "react-router-dom";

function Order() {
    const navigate=useNavigate();
    const {firstName, phoneNo, address, dispatch, messageText}=UseForm();
    const[latitude, longitude, handleGeolocation]=useLocation();

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: "MessageText", payload: "Your Order has been Placed"});
    setTimeout(()=>{
        dispatch({type: "ResetForm"});
        dispatch({type: "MessageText", payload: ""});
        navigate("/order-Info", {state: {firstName, phoneNo, address}})
     
    }, 3000);
  }

  return(
    <>
   <form className='mx-40' onSubmit={handleSubmit}>
    <Heading title= "Ready to order? Let's go!" />
    <div className='ml-10'>
        <InputField label="FirstName" type="text" inputValue={firstName} 
            inputChange={(e)=>dispatch({type: "FirstName", payload: e.target.value})}/>
        <InputField label="Phone Number" type="text" inputValue={phoneNo} 
            inputChange={(e)=>dispatch({type: "PhoneNo", payload: e.target.value})}/>
        <InputField label="Address" type="text"  inputValue={address} 
            inputChange={(e)=>dispatch({type: "Address", payload: e.target.value})} 
            handleGeolocation={handleGeolocation} latitude={latitude} longitude={longitude}/>
    </div>
    <button className='ml-10 bg-[#d97706] p-2 text-white rounded-md'>Order Now</button>
    <p className="text-lg text-center">{messageText}</p>
   </form>
   </>
  )
}

export default Order;
