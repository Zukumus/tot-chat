import './login.css'
import React, { useContext } from 'react';
import { Context } from '..';
import firebase from 'firebase';

const Login = () => {
   const { auth } = useContext(Context)
   const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);
      console.log(user)
   }

   return (
      <div className='wrapper__login' >
         <div className='login__button-group'>
            <div className='login__border-group'>
               <button onClick={login} className="login__button-group-button">login using google account</button>
            </div>
         </div>
      </div >
   );
};
export default Login