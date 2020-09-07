import React, {useEffect, useState} from 'react';
import $ from 'jquery'

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = async(email, password, location) => {
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
                    if (response.login !== 'fail') {
                        $('#modalSuccessLogin h3').text('Inicio de sesión exitosamente');
                        $('#modalSuccessLogin .message').text('Ha iniciado sesión exitosamente.');
                        $('#modalSuccessLogin').modal({
                            backdrop: 'static',
                            keyboard: false
                        });

                        localStorage.setItem('user', JSON.stringify(response));
                        setIsLoggedIn(true);
                        
                        setTimeout(() => {
                            $('#modalSuccessLogin').modal('hide');
                            location.history.push('/');
                        }, 3000);
                    } else {
                        $('#modalSuccessLogin h3').text('Error');
                        $('#modalSuccessLogin .message').text('Usuario o contraseña inválidos.');
                        $('#modalSuccessLogin').modal();
                    }
                });
        } else {
            $('#modalSuccessLogin h3').text('Aviso');
            $('#modalSuccessLogin .message').text('Los campos están vacíos.');
            $('#modalSuccessLogin').modal();
        }
    }

    const handleSignOut = (props) => {
        console.log('handleSignOut');
        localStorage.clear();
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider 
            value={{
                handleSignIn,
                handleSignOut,
                isLoggedIn}}>
                {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;