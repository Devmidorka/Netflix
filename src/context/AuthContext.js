import {createContext, useContext, useState, useEffect} from "react";
import {auth} from "../firebase/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    })
    return(
        <AuthContext.Provider value={{signUp, logIn, logOut ,user}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useUserAuth = () => {
    return useContext(AuthContext)
}
