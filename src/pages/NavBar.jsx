import { Link } from "react-router";

const NavBar = () => {
    return (
        <div className="flex justify-between px-12 py-6 bg-amber-500 text-white">
            <Link to="/"><button>Our Site</button></Link>
            <p>Our WebSite</p>
            <Link to={'/login'}><button>Login</button></Link>
        </div>
    );
};

export default NavBar;