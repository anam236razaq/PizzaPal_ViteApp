import Button from "./Button";
import ComboDeals from "./ComboDeal";
import MeatDeal from "./MeatDeal";

function Deals(){
  return(
    <div>
        <div className="bg-[#f3f4f6] h-[170vh] mt-2">
            <div className="flex justify-between mx-[165px] pt-20 mb-10" >
                <h1 className="text-6xl font-sans font-semibold">Best Deals!</h1>
                <Button link="/offers" text="View All" />
            </div>
            <MeatDeal />
            <ComboDeals />
        </div>
    </div>
  )
}
export default Deals;