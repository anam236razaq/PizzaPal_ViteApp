function Location(){
   return(
    <div className="flex items-center justify-start flex-col bg-[#f3f4f6] h-[80vh] mb-[-1rem]">
        <span className="mt-20 text-[#d97706] text-lg font-semibold">Our Location</span>
        <h1 className="font-semibold text-6xl font-sans">Find The PizzaPal near you</h1>
        <p className="text-lg w-[35rem] text-center mt-7">Pizzapal: Serving authentic flavors at 5th and Main,
             where every slice tells a delicious story and every bite sparks joy.</p>
        <div className="flex items-center justify-between mt-10">
                <LocationColumn name="Rome" text="Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy." 
                number="+391234567890"/>
                 <LocationColumn name="Florence" text="Viale Belfiore, 50, 50144 Firenze FI, Italy." 
                number="+391234567890"/>
                  <LocationColumn name="Bologna" text="Via delle Lame, 55, 40122 Bologna BO, Italy." 
                number="+391234567890"/>
                  <LocationColumn name="Venice" text="S. Marco, 615, 30124 Venezia VE, Italy." 
                number="+391234567890"/>
        </div>
    </div>
   )
}
export default Location;

function LocationColumn({name, text, number}){
    return(
    <div className="text-center w-1/4 m-8">
        <h1 className="text-[rgb(217,119,6)] text-4xl font-semibold font-sans">{name}</h1>
        <p className="text-lg w-60">{text}</p>
        <span>{number}</span>
    </div>
    )
}