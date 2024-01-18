import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Location from "../UI/Location";
import Navbar from "../UI/Navbar";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMail, IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UseForm } from "../Contexts/ContactFormContext";
import Heading from "../UI/Heading";
import InputField from "../UI/InputField";

function ContactUs(){
 return(
   <>
    <Navbar />
    <Header name="Contact Us" buttonText="Make Order" img="/src/assets/Images/contact_header.jpeg"/>
    <ContactForm />
    <Location />
    <Footer />
   </>
   
 )
}
export default ContactUs;

function ContactForm(){
  return (
    <div className="bg-[#f3f4f6] h-[120vh] relative">
        <div className="bg-[#f3f4f6] h-[145vh] mt-[-10rem] mx-20 rounded-lg flex  
            justify-center absolute top-0 left-0 right-0 border overflow-hidden">
            <div className="w-1/4 border-2">
              <Heading title="Corporate Office" />
              <div className="">
                  <Icon icon={MdLocationOn} text="Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy." />
                  <Icon icon={FaPhoneAlt}  text="+391234567890" />
                  <Icon icon={IoMail } text="mail@example.com" />
              </div>
              <div>
                <Heading title="Stay Connected" />
                <div className="ml-10 flex items-center space-x-5">
                  <Link className="text-[#d97706] text-xl"  to="/" ><IoLogoTwitter /></Link>
                  <Link className="text-[#d97706] text-xl" to="/" ><FaFacebookF /></Link>
                  <Link className="text-[#d97706] text-xl" to="/" ><FaInstagram  /></Link>
                  <Link className="text-[#d97706] text-xl" to="/" ><FaYoutube /></Link>
                </div>
              </div>
            </div>
            <div className="bg-white w-3/4">
                <Form />
            </div>
        </div>
    </div>
  )
}

function Icon({icon, text}){
  const IconComponent=icon;
  return (
    <div className="flex ml-7 mt-4  items-center">
        <IconComponent className="text-[#d97706] text-2xl mr-4" />
        <p className="text-lg">{text}</p>
  </div>
  )
}

function Form(){
  const {firstName, lastName, mail, phoneNo, subject, message, 
    messageText, handleSubmit, dispatch}=UseForm();
  return(
     <div className="ml-8">
        <Heading title="We love to hear from you" />
        <p className="ml-8 text-lg w-3/4">Please share your details and message with us, 
          and well get back to you promptly. Your feedback is important to us!</p>
        <form onSubmit={handleSubmit} className="ml-8 mt-10">
           <div className="flex w-[95%]">
            <InputField label="FirstName" type="text" inputValue={firstName} 
                inputChange={(e)=>dispatch({type: "FirstName", payload: e.target.value})}/>
            <InputField label="LastName" type="text" inputValue={lastName} 
                inputChange={(e)=>dispatch({type: "LastName", payload: e.target.value})}/>
           </div>
            <InputField label="Email" type="email" inputValue={mail} 
                inputChange={(e)=>dispatch({type: "Email", payload: e.target.value})}/>
            <InputField label="Phone Number" type="tel" inputValue={phoneNo}
                inputChange={(e)=>dispatch({type: "PhoneNo", payload: e.target.value})}/>
            <InputField label="Subject" type="text" inputValue={subject} 
                inputChange={(e)=>dispatch({type: "Subject", payload: e.target.value})}/>
            <InputField label="Message" type="textarea" inputValue={message} 
                inputChange={(e)=>dispatch({type: "Message", payload: e.target.value})}/>
            <button className="border-2 px-9 py-3 text-lg mt-2 border-[#d97706] 
              text-[#d97706] hover:text-white hover:bg-[#d97706]">Submit</button>
        </form>
        <div className="mt-2 text-center">{messageText}</div>
     </div>
  )
}



