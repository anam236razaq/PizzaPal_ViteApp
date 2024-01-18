import { Link, useLocation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";

function Navbar(){
    const location=useLocation();
    const isLinkActive=(path)=>{
        return location.pathname===path? "text-[#d97706]": " ";
    }

  return(
    <div className="bg-[#171717] h-24 flex items-center justify-between">
        <div className="ml-20">
            <Link to="/"><img className="h-16 w-36" src="/src/assets/Images/logo.png" alt="PizzaPal" /></Link>
        </div>
        <div className="mr-20 flex items-center">
            <ul className="flex items-center  space-x-8 text-lg text-white">
                <li><Link className={isLinkActive("/")} to="/">Home</Link></li>
                <li><Link className={isLinkActive("/menu")} to="/menu">Menu</Link></li>
                <li><Link className={isLinkActive("/offers")} to="/offers">Offers</Link></li>
                <li><Link className={isLinkActive("/contact-us")} to="/contact-us">Contact Us</Link></li>
            </ul>
            <CartOverview />
        </div>
    </div>
  )
}
export default Navbar;