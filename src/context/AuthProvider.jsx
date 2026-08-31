import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null)

    const login = (username, password) =>{
        setAuthUser({username, id:123})
    }
    return (
        <AuthContext.Provider value={{ authUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;