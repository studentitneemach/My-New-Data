import React, { useState } from "react";
export const FiveIndexfile = () => {
    const [Name,setName] = useState([]);
    const handleChange=(e)=>{
      const names=  e.target.name;
      const value= e.target.value; 
        setName((data)=>({  ...data,[names] : value } ))
    
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('name',Name);
        alert('data stored')
    }
   
    return <>
    <h4>Name</h4>
   <form onSubmit={handleSubmit} >
   <input type='text' name='name' value={Name.name || ""}  onChange={handleChange} /><br/>
   <input type='text' name='age' value={Name.age || ""}  onChange={handleChange} /><br/>
   <button type='submit'>Submit</button>
   
   </form>

    </>
}

/////https://www.youtube.com/watch?v=6_a27O2WFR0&list=PL8p2I9GklV47TDYUq8RmFzeI9CgOoVgpJ