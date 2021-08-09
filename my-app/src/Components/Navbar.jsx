import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../Utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from "react";
import { Context } from "..";

const Navbar = () => {
   const { auth } = useContext(Context);
   const [user] = useAuthState(auth);

   return (
      <div className='wrapper__navbar' >
         <div className='navbar__button-group'>
            {user ? (
      <button onClick={() => auth.signOut()} className="navbar__button-group-button">Exit</button>
   ) : (
      <NavLink to={LOGIN_ROUTE}>
         <button c lassName="n a vbar__button-group-button">Login</button>
      </NavLink >
   )
}
         </div >
      </div > 
   );
};
export default Navbar