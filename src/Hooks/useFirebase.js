import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from './../Pages/Login/Firebase/firebase.init';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    console.log(user)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, img, history) => {
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);
                // SAVE USER TO DATABASE

                // saveUser(email, name)

                //SEND NAME & IMG TO FIREBASE AFTER CREATION
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: img
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/');
                window.location.reload();
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError("");
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveGoogleUser(user.email, user.displayName);
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                // Handle Errors here.
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    }


    //Observe User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    // useEffect(() => {
    //     fetch(`https://mighty-forest-99071.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    const logOut = () => {
        setIsLoading(false)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    // const saveUser = (email, displayName) => {
    //     const user = { email, displayName };
    //     fetch('https://mighty-forest-99071.herokuapp.com/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }
    // const saveGoogleUser = (email, displayName) => {
    //     const user = { email, displayName };
    //     fetch('https://mighty-forest-99071.herokuapp.com/users', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }
    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        authError,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;