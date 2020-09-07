import $ from 'jquery'

const api = {
    creatAccount: function (email, password, name, lastName, motherLastName, phone) {
        let data = {
            'mail': email,
            'password': password,
            'nombre': name,
            'apPaterno': lastName,
            'apMaterno': motherLastName,
            'telefono': phone,
            'trato': 'Mr.',
        }

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
                $('#modalSuccess').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000);
            });
    },
    loginAccount: function (email, password, props) {
        let data = {
            "mail": email,
            "password": password
        }

        if (data.mail !== '' && data.mail !== null && data.password !== '' && data.password !== null) {
            fetch('https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/validacuenta', {
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
                        
                        setTimeout(() => {
                            $('#modalSuccessLogin').modal('hide');
                            props.history.push('/');
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
}

export default api;