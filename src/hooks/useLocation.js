import { UseForm } from "../Contexts/ContactFormContext";
import { getAddress } from "../Services/apiGeocoding";


export function useLocation(){
    const{latitude, longitude,dispatch}=UseForm();

    const handleGeolocation = async () => {
        try {
          if (navigator.geolocation) {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
      
            const { latitude, longitude } = position.coords;
            dispatch({ type: "Latitude", payload: latitude });
            dispatch({ type: "Longitude", payload: longitude });
      
            try {
              const data = await getAddress({ latitude, longitude });
              dispatch({type: "Address", payload: data.locality});
            } catch (error) {
              console.error("Error getting address:", error);
            }
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
        } catch (error) {
          console.error("Error during geolocation:", error.message);
        }
      };
      return [latitude, longitude, handleGeolocation]
    }
    
