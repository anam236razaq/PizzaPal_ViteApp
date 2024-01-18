

function Menu({marginTop}){
  const styles = {
    marginTop: marginTop ? `${marginTop}rem` : '',
  };
    return (
        <div className="flex items-center" style={styles}>
              <MenuImg source="/src/assets/Images/pasta.png" name="Pasta" />
              <MenuImg source="/src/assets/Images/pizza.png" name="Pizza" marginBottom={36} />
              <MenuImg source="/src/assets/Images/dessert.png" name="Dessert" />
        </div>
    )
}
export default Menu;

function MenuImg({source, name, marginBottom}){
    return (
       <figure className={`w-1/3 flex items-center flex-col ${marginBottom? `mb-${marginBottom}`: 'mb-44'}`}>
            <img className="w-[70%] transition-transform duration-700 hover:-translate-y-2" 
               src={source} alt={name} />
             <figcaption className="mt-4 text-4xl text-[#d97706]">{name}</figcaption>
       </figure>
    )
   }