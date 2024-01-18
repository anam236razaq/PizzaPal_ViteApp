import { useContext } from "react";
import { createContext, useReducer } from "react";


const ContactContext=createContext();

const initialState={
    firstName:"",
    lastName:"",
    mail: "",
    phoneNo: "",
    subject: "",
    message: "",
    messageText: "",
    address: "",
    latitude: null,
    longitude: null,
}

function reducer(state, action){
  switch(action.type){
     case "FirstName":
        return{
            ...state,
            firstName: action.payload,
        }
    case "LastName":
        return{
            ...state,
            lastName: action.payload,
        }
    case "Email":
        return{
            ...state,
            mail: action.payload,
        }
    case "PhoneNo":
        return{
             ...state,
            phoneNo: action.payload,
        }    
    case "Subject":
        return{
            ...state,
            subject: action.payload,
       } 
    case "Message":
        return{
             ...state,
            message: action.payload,
        }
    case  "MessageText":
        return{
            ...state,
            messageText: action.payload,
        }
    case "Address":
        return{
            ...state,
            address: action.payload,
        }
    case "Latitude":
        return{
            ...state,
            latitude: action.payload,
        }
    case "Longitude":
        return{
            ...state,
            longitude: action.payload,
        }
    case "ResetForm":
        return{
            ...state,
            ...initialState,
            messageText: action.payload
        }
    default:
        throw new Error("Unknown action type") 
  }
}

function FormProvider({children}){
    const [{firstName, lastName, mail, phoneNo, subject, message, messageText, address, latitude, longitude}, dispatch]=useReducer(reducer, initialState);

    function handleSubmit(e){
        e.preventDefault();
        dispatch({ type: "MessageText", payload: "Thank You For Submitting the form" });
        setTimeout(() => {
                dispatch({ type: "ResetForm", payload: "" });
                dispatch({ type: "MessageText", payload: "" });
        }, 3000);
        }

    return <ContactContext.Provider value={{firstName, lastName, mail, phoneNo, subject, message, 
    messageText, address, latitude, longitude, handleSubmit, dispatch }}>{children}</ContactContext.Provider>
}

function UseForm(){
    const context=useContext(ContactContext);
    if(context===undefined) throw new Error("ContactContext used Outside of FormProvider");
    return context;
}

export{FormProvider, UseForm};