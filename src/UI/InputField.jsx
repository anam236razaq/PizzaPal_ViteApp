import { IoLocation } from "react-icons/io5";

function InputField({label, type, inputValue, inputChange, handleGeolocation}){
    const isTextArea=type==='textarea';
  
    return (
      <div className="my-5 flex flex-col w-full">
          <label className="text-lg">{label}</label>
          {isTextArea? (
            <textarea className="mt-2 border outline-none py-4 pl-2 w-[90%]"
             value={inputValue} onChange={inputChange}/>
          ):(
          <div>
              <input className="mt-2 border outline-none py-4 pl-2 w-[90%]" required  type={type} 
              placeholder={label} value={isTextArea? undefined: inputValue} onChange={inputChange}/>
              {label==="Address" && (
                <button className="ml-[-2rem] text-[#d97706] text-xl" onClick={handleGeolocation}><IoLocation /></button>
              )}
          </div>
        )}
          
    </div>
    )
  } 

export default InputField;