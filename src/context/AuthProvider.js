import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {createNewUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;