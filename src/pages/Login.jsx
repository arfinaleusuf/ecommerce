import { useState } from "react";
import { Link } from "react-router";


const Login = () => {
    const [userName, serUserName] =useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userName, password)
    }

    return (
        <div className="shadow-2xl w-1/3 mx-auto text-center py-12">
            <p>Please Login</p>
            <form onSubmit={handleLogin}>
                <input value={userName} onChange={(e)=> serUserName(e.target.value)} type="text" placeholder="User Name" />
                <br />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
                <br />
                <button className="border" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;