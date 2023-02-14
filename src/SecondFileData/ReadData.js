import React,{useState,useEffect} from "react";
import axios from 'axios';

export const ReadData=()=>{
   const [APIdata,setAPIdata] = useState([])

   useEffect(()=>{
    axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData').then((response)=> setAPIdata(response.data)).catch(error => console.log(error))
   },[])

   
   const dataRead=()=>{

    return <div>
           <table>
        <tr>
          <th>Email ID</th>
          <th>FirstName</th>
          <th>LastName</th>
        </tr>
        {APIdata.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.emailId}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
            </tr>
          )
        })}
      </table>
    </div>
   }
 
return <>
<h4>Read Data</h4>
<button onClick={dataRead}>ReadData</button>
</>
}