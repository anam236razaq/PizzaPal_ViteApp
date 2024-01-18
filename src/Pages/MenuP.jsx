import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import Header from "../UI/Header" ;
import Location from "../UI/Location";
import Menu from "../UI/Menu"
import MeatDeal from "../UI/MeatDeal";
import { useEffect} from "react";
import { fetchMenuData } from "../Services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { dataFailed, dataReceived } from "../Features/Menu/fetchingMenuSlice";
import Menus from "../Features/Menu/Menus";


function MenuP(){
    const dispatch=useDispatch();
    const menu= useSelector((state)=>state.fetch.menu);
    const status=useSelector((state)=>state.fetch.status);

    useEffect(()=>{
        async function fetchData(){
         try{
          const data=await fetchMenuData();
            dispatch(dataReceived(data));
         }
         catch(e){
            dispatch(dataFailed());
         }
        }
        fetchData();
    }, 
    [dispatch]);


return (
    <>
      <Navbar />
      <Header name="Our Menu" buttonText="Make Order" img="/src/assets/Images/menu_header.jpg"
      text="Indulge in a slice of perfection explore our pizza menu crafted with the finest
       ingredients and bold, delectable combinations!"  />
      <Menu marginTop={-9} />
      <PastaMenu status={status} menu={menu} />
      <MeatDeal/>
      <PizzaMenu status={status} menu={menu} />
      <DessertMenu status={status} menu={menu} />
      <Location />
      <Footer />
    </>
   
)
}
export default MenuP;

function PastaMenu({status, menu}){
  return  <Menus status={status} menu={menu} titleIndex={0} />
}

function PizzaMenu({status, menu}){
  return  <Menus status={status} menu={menu} titleIndex={1} />
}

function DessertMenu({status, menu}){
  return  <Menus status={status} menu={menu} titleIndex={2} />
}

