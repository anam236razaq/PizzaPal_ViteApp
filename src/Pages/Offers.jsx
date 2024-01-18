import ComboDeals from "../UI/ComboDeal";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Location from "../UI/Location";
import MeatDeal from "../UI/MeatDeal";
import Navbar from "../UI/Navbar";

function Offers(){
 return(
    <>
      <Navbar />
      <Header name="Pizza Offers" buttonText="Make Order" img="/src/assets/Images/offer_header.jpg"
      text="Enjoy BOGO: Buy One, Get One Free on all pizzas today!" />
      <Deals />
      <Location />
      <Footer />
    </>
 )
}
export default Offers;

function Deals(){
  return(
    <div className="flex flex-col justify-between  bg-[#f3f4f6] h-[290vh]">
       <h1 className="text-6xl font-sans font-semibold mt-[4rem]  ml-[10rem]">Best Deals!</h1>
       <MeatDeal />
       <ComboDeals />
       <div className="flex items-center justify-center space-x-16 mt-10" >
        <DealImg link= "/src/assets/Images/deal_3.png" name="Deal" />
        <DealImg link= "/src/assets/Images/deal_4.png" name="Deal" />
       </div>
       <div className="flex items-center justify-center mt-10 ">
       <DealImg link= "/src/assets/Images/poster.png" name="Poster" />
       </div>
    </div>
  )
}

function DealImg({link, name}){
  return (
    <img className="rounded-lg" src={link} alt={name} />
  )
}