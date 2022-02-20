import React from 'react';
import { createContext } from 'react';
import useMainhooks from '../Components/hooks/useMainhooks';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useMainhooks()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};
 
export default AuthProvider;