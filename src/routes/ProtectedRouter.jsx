import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";


const ProtectedRouter = ({children}) => {
    const {authUser} = useContext(AuthContext)

    if(authUser){
        return children
    }
    return (
        <Navigate to={'/login'}/>
    );
};

export default ProtectedRouter;