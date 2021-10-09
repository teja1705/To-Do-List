import React from "react";
import './custombutton.styles.scss';

const CustomButton = ({children,handleSubmit})=>{
    return(
        <div className="custombutton">
            <button 
                className="button"
                onClick={handleSubmit}
            >{children}</button>
        </div>
    )
}

export default CustomButton;