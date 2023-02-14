import React from "react";
import './Button.css';
export  const Button =({childern,onClick})=>{
    return (
        <button onClick={onClick} className="button">
            {childern}
        </button>
    )
}