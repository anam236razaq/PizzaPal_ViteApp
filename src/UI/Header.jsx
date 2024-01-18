import { Link } from "react-router-dom";

function Header({name, text, buttonText, img}){
    return(
        <div className={`bg-cover bg-center h-[48rem] rounded-b-[300px] text-white flex items-center 
        justify-center flex-col bg-opacity-10 bg-black`} style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-[5rem]">{name}</h2>
            <p className="text-[24px] w-[44rem] text-center">{text}</p>
            <Link to="/menu" className="bg-[#d97706] px-12 py-4 mt-5 text-xl">{buttonText}</Link>
    </div>
    );
}
export default Header;


 


