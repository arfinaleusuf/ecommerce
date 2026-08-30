import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>  
            <p>this is a nav bar</p>
            <Outlet/>
        </div>
    );
};

export default Root;