import React, { useState } from "react";
export const UserData =()=>{
   const [data,setData] =useState([])
    const GetData =()=> {
        let userdata= window.localStorage.getItem('name');
        console.log(typeof userdata)
        // setData(userdata);
    }
    
    return   <>
     <button type='submit' onClick={GetData}>getData</button> 
     {/* <h6>{data}</h6> */}
    </>
}