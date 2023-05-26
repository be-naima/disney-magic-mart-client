
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser) 
        setLoading(false)
    })
    
    return ()=>{
        unsubscribe();
    }
    },[])
    const update_profile = (user,name,Photo_url) =>{
        updateProfile(user, {
            displayName: name, photoURL: Photo_url
          }).then(() => {
           
          }).catch((error) => {
            
          });
    }
    const googleSignIn = (provider) =>{
       return  signInWithPopup(auth, provider) ;
    }
    
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const test = 'hello'
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        update_profile,
        googleSignIn,
        test
    }
    return (
        
        <div>
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;