import Chat from "../Components/Chat";
import Login from "../Components/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../Utils/consts";

export const publicRouts = [
   {
      path: LOGIN_ROUTE,
      Component: Login,
   },

]
export const privateRouts = [

   {
      path: CHAT_ROUTE,
      Component: Chat,
   },
]