/* eslint-disable react/prop-types */
// import { useContext } from "react"
import { useAuth } from "../../context/AuthContext"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useAuth();
    if(!isLoggedIn){
        return(<Navigate to="/auth" />);
    }
    return children;
};
