import { PropagateLoader } from "react-spinners"

function Loader(){
    return(
        <div className="flex items-center justify-center h-screen">
           <PropagateLoader color="#d97706" />
        </div>
    )
}
export default Loader