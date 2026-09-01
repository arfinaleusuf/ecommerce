import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const NavBar = () => {
    const {logout, authUser} = useContext(AuthContext)
    return (
        <div className="flex justify-between px-12 py-6 bg-amber-500 text-white">
            <Link to="/"><button>Our Site</button></Link>

            <Link to={'/login'}><button>Login</button></Link>
            {
                authUser ? <button onClick={logout}>Logout</button> : <Link to={'/login'}><button>Login</button></Link>
            }
        </div>
    );
};

export default NavBar;