import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

//children es que va a ser un high order component
export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
  return (!logged) ? children: <Navigate to='/' />
}
