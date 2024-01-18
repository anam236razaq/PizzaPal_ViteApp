import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FormProvider } from "./Contexts/ContactFormContext"
import { Suspense, lazy } from "react"
import Loader from "./UI/Loader";

const Home=lazy(()=>import("./Pages/Home"));
const MenuP=lazy(()=>import("./Pages/MenuP"));
const ContactUs=lazy(()=>import("./Pages/ContactUs"));
const Offers=lazy(()=>import("./Pages/Offers"));
const Cart=lazy(()=>import("./Features/Cart/Cart"));
const Order=lazy(()=>import("./Features/Order/Order"));
const OrderInfo=lazy(()=>import("./Features/Order/OrderInfo"));




function App() {
  return(
    <FormProvider>
      <BrowserRouter>
      <Suspense fallback={<Loader />} >
       <Routes>
         <Route exact index element={<Home />} />
         <Route exact path= "/menu" element={<MenuP />} />
         <Route exact path= "/offers" element={<Offers />} />
         <Route exact path= "/contact-us" element={<ContactUs />} />
         <Route exact path="/cart" element={<Cart />} />
         <Route exact path="/order" element={<Order />} />
         <Route exact path="/order-Info" element={<OrderInfo />} />
       </Routes>
       </Suspense>
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
