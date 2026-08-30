import { Outlet } from "react-router";
import NavBar from "../pages/NavBar";

const Root = () => {
    return (
        <div>  
            <p>this is a nav bar</p>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;