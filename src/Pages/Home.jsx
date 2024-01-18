import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import MenuItems from "../UI/MenuItems";
import Deals from "../UI/Deals";
import Location from "../UI/Location";
import Header from "../UI/Header";

function Home(){
  return(
    <>
    <Navbar />
    <Header name="Welcome to a Slice of Delight!" text="Fresh, Flavorful Pizzas Await, Crafted with Care, Each Bite Great.
                Taste Tradition, Savor the Night. Join Us for a Pizza Delight." buttonText="Make Order" 
                img="/src/assets/Images/header_home.jpg"/>
    <PizzaIngredients />
    <MenuItems />
    <Deals />
    <Location />
    <Footer />
    </>
  )
}
export default Home;


function PizzaIngredients(){
  return(
    <>
    <div className=" flex items-center justify-center">
      <img className="m-[-200px]" src="/src/assets/Images/pizza_home.png" alt="Pizza" />
    </div>
    <div className="bg-[#f3f4f6] h-[115vh] mt-[-60px] flex items-center">
         <PizzaIngredientsColumn source="/src/assets/Images/pizza-fresh-ingredients-img.jpg" 
      name="Fresh Ingredients" text="Tomatoes, basil, mozzarella, mushrooms, bell peppers.Fresh dough,
      olive oil, garlic, onions, pepperoni (optional)." />

        <PizzaIngredientsColumn source= "/src/assets/Images/pizza-homemade-mozarella.jpg"
      name="HomeMade Mozarella" text="Crafted with care, our homemade mozzarella brings a creamy richness to every bite.
      Hand-stretched and perfected for that authentic taste you&apos;ll savor." marginTop={96} />
      
        <PizzaIngredientsColumn source="/src/assets/Images/pizza-secret-recipe-sauce-img.jpg" 
      name="Secret Recipe &quot; Sauce" text="A tantalizing blend of ripe tomatoes, garlic, and aromatic herbs simmered to perfection,
      infusing every dish with our signature secret sauce&apos;s bold, savory allure." />
   </div>
   </>
  )
}

function PizzaIngredientsColumn({source, name, text, marginTop}){
  return(
    <div className={`w-2/6 flex items-center justify-center flex-col mb-[100px] 
    ${marginTop!==undefined? 'mt-96': ""}`}>
          <img className="rounded-[50%]" src={source} alt={name} />
          <h2 className="text-3xl font-sans font-semibold mt-3 text-[#d97706]">{name}</h2>
          <p className="w-72 text-center mt-[10px] text-lg">{text}</p>
        </div>
  )
}