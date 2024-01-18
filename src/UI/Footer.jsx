import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer(){
  const aboutUsLinks = [
    { to: "/", label: "Our Story" },
    { to: "/contact-us", label: "Our Locations" },
    { to: "/offers", label: "Current Deals" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const ourMenuLinks = [
    { to: "/menu", label: "Pizza" },
    { to: "/menu", label: "Pasta" },
    { to: "/menu", label: "Desert" },
    { to: "/menu", label: "Take & Bake" },
  ];

  const locationsLinks = [
    { to: "/", label: "The PizzaPal Rome" },
    { to: "/", label: "The PizzaPal Madrid" },
    { to: "/", label: "The PizzaPal Paris" },
    { to: "/", label: "The PizzaPal Miami" },
  ];
   return(
    <div className="bg-[#171717] text-white mt-5 h-96">
    <div  className="flex ">
       <div className="ml-20 w-1/3 mt-10">
          <img  className="h-16 w-36 " src="/src/assets/Images/logo.png" alt="PizzaPal" />
        <p className="text-lg leading-7 mt-2 mb-2"> Explore our delicious range of pizzas crafted with love and fresh ingredients. 
            Satisfaction guaranteed with every bite. Order now and savor the taste of perfection!</p>
            <div className="flex items-center space-x-3 ">
                <Link to="/" className="hover:text-[#d97706] text-lg"><FaXTwitter /></Link>
                <Link to="/" className="hover:text-[#d97706] text-lg"><MdOutlineFacebook /></Link>
                <Link to="/" className="hover:text-[#d97706] text-lg"><IoLogoInstagram /></Link>
            </div>
       </div> 
       <FooterColumns title="About Us" links={aboutUsLinks}/>
       <FooterColumns title="Our Menu" links={ourMenuLinks}/>
       <FooterColumns title="Our Locations" links={locationsLinks}/>
    </div>
    <div className="mt-12 ml-20 mr-32 flex items-center justify-between">
        <span>Copyright &copy; 2024 The PizzaPal  </span> 
        <p>Powered by the PizzaPal</p>
    </div>
    </div>
   )
}
export default Footer;

function FooterColumns({title, links}){
  return(
    <div className="ml-20 mt-14 w-1/4">
         <h2 className=" text-2xl mb-4">{title}</h2>
          <div className="text-lg leading-8">
            <ul>
               {links.map((link,index)=>(
                <li key={index}>
                 <Link to={link.to} className="hover:text-[#d97706]">{link.label}</Link>
                </li>
               ))}
            </ul>
          </div>
       </div>
  )
}