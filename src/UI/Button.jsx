import { Link } from "react-router-dom";

function Button({text, link}){
    return(
       <Link to={link} className="border-2 px-9 py-3 text-lg mt-2 border-[#d97706] 
       rounded-lg text-[#d97706] hover:text-white hover:bg-[#d97706]">{text}</Link>
    )
}
export default Button;