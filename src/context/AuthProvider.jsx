import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(()=> JSON.parse(localStorage.getItem('user')) || null)

    const login = (username, password) =>{
        setAuthUser({username, id:123})
        localStorage.setItem('user', JSON.stringify({username, id:123}))
    }
    const logout = () =>{
        setAuthUser(null)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ authUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;