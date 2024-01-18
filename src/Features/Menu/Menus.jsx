import Error from "../../UI/Error";
import Loader from "../../UI/Loader";
import MenuItem from "./MenuItem";

function Menus({menu, status, titleIndex}){

   return(
    <div className="flex h-[110vh] items-center justify-center flex-col bg-[#f3f4f6] pb-20">
        {status==="loading" && <Loader />}
        {status==="error" && <Error />}
        {status==="ready" && (
            <>
                <div className="flex items-center mb-5 justify-between mx-28 pt-32 mt-10">
                    <h1 className="text-[#d97706] text-7xl">{menu[titleIndex].name}</h1>
                    <p className="w-[55%] text-lg">{menu[titleIndex].description}</p>
                </div>
                <div className="flex flex-wrap  mt-12 mx-24">
                   {menu[titleIndex].menuItems.map((item)=>(
                      <MenuItem key={item.id} item={item} />
                   ))}
                </div>
            </>
        )}
    </div>
   )
}
export default Menus;

