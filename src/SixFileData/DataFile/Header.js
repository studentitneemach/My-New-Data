import React from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { authenticActions } from "../Store/store";
const Header =()=>{
    const dispatch = useDispatch();
    const  isAuth = useSelector( state => state.authentiction.isAuthenticted);
   
    const loguoutHandle =() =>{
        dispatch(authenticActions.logOut())
    }
    return (
        <header>
            <h3>Redux Auth</h3>
         { isAuth && (
               <nav>
               <a href="/">My Sales</a>
               <a href="/">My Product</a>
               <br />
               <button onClick={loguoutHandle}>logOut</button>
           </nav>
         )
         }
        </header>
    )
}
export default Header;