export async function fetchMenuData(){
    const res=await fetch("http://localhost:9000/menu");
    if(!res.ok) throw new Error("Failed Getting Menu");
    const data=await res.json();
    return data;
}


  