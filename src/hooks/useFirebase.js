import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in method
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub sign in method
    const signInUsingGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // user email password registration method
    const registrationUsingUserPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // user email and password sign in method
    const signInUsingUserPassword = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error)
            })
    }

    return {
        user,
        error,
        setError,
        signInUsingGoogle,
        signInUsingGithub,
        registrationUsingUserPassword,
        signInUsingUserPassword,
        logOut,
        isLoading,

    };
}


export default useFirebase;