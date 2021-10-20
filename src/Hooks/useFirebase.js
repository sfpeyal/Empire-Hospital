import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');


    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const gooogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, gooogleProvider)
            .finally(() => setLoading(false));
    }




    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be At Least six Characters Long')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }


    const LoginProcess = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be At Least six Characters Long')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })

    }

    useEffect(() => {
        const unsubscirbed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscirbed;
    }, [])


    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        Loading,
        error,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleNameChange,
        LoginProcess
    }

}


export default useFirebase;