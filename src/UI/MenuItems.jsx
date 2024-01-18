import Menu from "./Menu";
import Button from "./Button";

function MenuItems(){
    return(
        <>
        <div className="h-5 bg-[#171717]"></div>
        <div className="h-[120vh] bg-[#f3f4f6] flex items-center justify-start flex-col rounded-b-[200px]">
          <span className="mt-20 text-[#d97706] text-lg font-semibold">Choose your Flavor</span>
          <h1 className="font-semibold text-6xl font-sans">Food That Brings People Together!</h1>
          <p className="text-lg w-[35rem] text-center mt-7">Shared meals, endless conversations; food that unites
             hearts and creates cherished memories, binding us in warmth and joy.</p>
             <Button link="/menu" text="View All Menu"/>
          <Menu />
       </div>
        </>
      
    )
}
export default MenuItems;