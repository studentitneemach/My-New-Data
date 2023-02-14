import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { authenticActions } from "../Store/store";
const  Auth =()=>{
    const dispatch = useDispatch()
    const loginHandle = (event) =>{ 
        event.preventDefault();
        dispatch(authenticActions.login())
     };
    return (
        <section>
            <form onSubmit={loginHandle}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <label htmlFor="password">wassword</label>
                    <input type="password" id="password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}
export default Auth;
