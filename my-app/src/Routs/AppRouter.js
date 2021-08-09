import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Context } from "..";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../Utils/consts";
import { privateRouts, publicRouts } from './Routes';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
   const { auth } = useContext(Context);
   const [user] = useAuthState(auth);

   return user ? (
      <Switch>
         {privateRouts.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact={true} />
         )}
         <Redirect to={CHAT_ROUTE} />
      </Switch>
   )
      :
      (
         <Switch>
            {publicRouts.map(({ path, Component }) =>
               <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
         </Switch>
      )
};

export default AppRouter