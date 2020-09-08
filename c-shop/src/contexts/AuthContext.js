import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    // const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignUp = async (values) => {
        console.log('handleSignUp');
        let data = {
            'mail': values.email,
            'password': values.password,
            'nombre': values.name,
            'apPaterno': values.lastName,
            'apMaterno': values.motherLastName,
            'telefono': values.phone,
            'trato': 'Mr.',
        }
        console.log(data);

        fetch('https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/creacuenta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                toast('Su cuenta ha sido creada exitosamente', {
                    className: 'success-toast',
                    draggable: false,
                    autoClose: 3000,
                    progress: 0,
                    hideProgressBar: true
                });
            });
    }

    const handleSignIn = async (email, password, location) => {
        console.log('handleSignIn');
        let data = {
            "mail": email,
            "password": password
        }

        if (data.mail !== '' && data.mail !== null && data.password !== '' && data.password !== null) {
            await fetch('https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/validacuenta', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(data)
                })
                .then((res) => res.json())
                .catch((error) => console.error("Error:", error))
                .then((response) => {
                    if (response !== undefined) {
                        if (response.login !== 'fail') {
                            toast('Ha iniciado sesión exitosamente.', {
                                className: 'success-toast',
                                autoClose: 3000,
                                progress: 0,
                                hideProgressBar: true
                            });
                            localStorage.setItem('user', JSON.stringify(response));
                            setIsLoggedIn(true);
                            location.history.push('/');
                        } else {
                            toast.error('Usuario o contraseña inválidos.');
                        }
                    } else {
                        toast.error('Error en el servidor');
                    }
                });
        } else {
            toast.warn('Los campos están vacíos.', {
                draggable: false,
                autoClose: 5000,
            });
        }
    }

    const handleSignOut = (props) => {
        console.log('handleSignOut');
        localStorage.clear();
        setIsLoggedIn(false);
    }

    return ( 
        <AuthContext.Provider value = {{
                handleSignUp,
                handleSignIn,
                handleSignOut,
                isLoggedIn
            }}> 
            { props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;