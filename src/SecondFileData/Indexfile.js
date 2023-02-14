import React, { useState } from "react";
import Data from '../UsersData.json';
const IndexFile = () => {
    const [Date, setData] = useState([]);
    const [Inform, setInform] = useState([]);

    const store = () => {
        const data = Data.map((data, idx) => {
            const email = Inform.email;
            const password = Inform.password;
            if (email === data.email && password === data.password) {
                return (
                    <div key={idx} style={{ textAlign: 'center' }}><br />
                        <img src={data.image} height='200px' width='300px' alt={data.id} /><br />
                        <span>Id : {data.id}</span><br />
                        <span>Name : {data.name}</span><br />
                        <span>Age : {data.age}</span><br />
                        <span>Mobile : {data.mobile}</span><br />
                        <span>Email :  {data.email}</span><br />
                        <span>Password :  {data.password}</span><br />
                    </div>
                )
            }
        })
        setData(data.filter((x) => x !== undefined))
    }

    const HandleChange = (e) => {
        const names = e.target.name;
        const value = e.target.value;
        setInform(data => ({ ...data, [names]: value }));
    }

    const HandleSubmit = (event) => event.preventDefault();

    return <div style={{ textAlign: 'center' }}><br />
        <form onSubmit={(e) => { HandleSubmit(e); store(); }}>
            <label> Email : </label>
            <input type='email' name='email' value={Inform.email || ''} onChange={HandleChange} /><br /><br />
            <label> Password : </label>
            <input type='password' name="password" value={Inform.password || ''} onChange={HandleChange} /><br /><br />
            <button type='submit' > Sumbit </button>
        </form >
        {Date}<br /><br />
        atuny0@sohu.com<br />
        9uQFF1Lh
    </div>
}


export { IndexFile };
//////////////https://mui.com/store/previews/bazar-pro-react-ecommerce-template/
////https://dum\images\1*qle8858T8Amobp6-WCrLZA.pngmyjson.com/users
//////https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-2-creating-a-token-api