import React from "react";
import './inputfield.styles.scss';

const InputField = ({handleChange, type, placeholder,value})=>{
    return(
        <div className="inputfield">
            <input 
                className="input"
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default InputField;