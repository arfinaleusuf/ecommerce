import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthProvider";


const Login = () => {
    const [userName, serUserName] =useState("");
    const [password, setPassword] = useState("");
    const{authUser, login} =  useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        login(userName,password)
    }

    console.log(authUser);

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