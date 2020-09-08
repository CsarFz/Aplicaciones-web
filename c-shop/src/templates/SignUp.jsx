import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
import { context } from '../contexts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

registerLocale('es', es);

/* eslint-disable */
const emailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const passwordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
);
const phoneRegex = RegExp(
    /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/i
)
/* eslint-enable */

const formValid = (errors, values) => {
    let validErrors = true;
    let validValues = true;

    // validate form errors being empty
    Object.values(errors).forEach((error) => {
        error.length > 0 && (validErrors = false);
    });

    // validate the form was filled out
    Object.values(values).forEach(val => {
        if (val === null || val === '') { validValues = false }
    });

    if (!validErrors) {
        toast.error('Hay errores sin resolver.', { position: toast.POSITION.TOP_RIGHT, draggable: false, autoClose: 3000 });
    }

    if (!validValues) {
        toast.error('Algunos campos están vacíos.', { position: toast.POSITION.TOP_RIGHT, draggable: false, autoClose: 3000 });
    }

    if (validErrors && validValues) { return true; } else { return; }
};

const SignUp = (props) => {
    const { handleSignUp } = useContext(context.auth);
    const [values, setValues] = useState({
        name: '', lastName: '', motherLastName: '', phone: '',
        email: '', password: ''
    });
    const [date, setDate] = useState(new Date());
    const [errors, setErrors] = useState({
        name: '', lastName: '', motherLastName: '', phone: '',
        email: '', password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(errors, values)) {
            handleSignUp(values);
            props.history.push('/');
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...errors };

        switch (name) {
            case "name":
                formErrors.name =
                    value.length < 5 ? 'Mínimo 5 caracteres requeridos' : '';
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 5 ? 'Mínimo 5 caracteres requeridos' : '';
                break;
            case "motherLastName":
                formErrors.motherLastName =
                    value.length < 5 ? 'Mínimo 5 caracteres requeridos' : '';
                break;
            case "phone":
                formErrors.phone = 
                    phoneRegex.test(value) ? '' : 'El teléfono es invalido, debe tener 10 caracteres y ser numérico.';
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ''
                    : 'El correo no es válido';
                break;
            case "password":
                formErrors.password = passwordRegex.test(value)
                    ? ''
                    : 'La contraseña debe tener entre 8 y 15 caracteres que contengan al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial.';
                break;
            default:
                break;
        }
        setValues({ ...values, [name]: value });
        setErrors(formErrors);
    }

    return (
        <section id="formSignUp">
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card pt-5 pb-3 border-20 shadow border-0">
                            <div className="card-body">
                                <h2 className="card-title text-center">Regístrate</h2>
                                <div className="form-group text-center">
                                    {errors.name.length > 0 && (
                                        <p className="errorMessage">{errors.name}</p>
                                    )}
                                    {errors.lastName.length > 0 && (
                                        <p className="errorMessage">{errors.lastName}</p>
                                    )}
                                    {errors.motherLastName.length > 0 && (
                                        <p className="errorMessage">{errors.motherLastName}</p>
                                    )}
                                    {errors.phone.length > 0 && (
                                        <p className="errorMessage">{errors.phone}</p>
                                    )}
                                    {errors.email.length > 0 && (
                                        <p className="errorMessage">{errors.email}</p>
                                    )}
                                    {errors.password.length > 0 && (
                                        <p className="errorMessage">{errors.password}</p>
                                    )}
                                </div>
                                <form className="px-lg-5 px-2 mt-4" noValidate>
                                    <div className="row">
                                        <div className="col-12 col-md-4 px-lg-3 pb-3">
                                            <input type="text" className={`form-control form-control-lg  primaryInput ${errors.name > 0 ? "error" : ''}`} name="name"
                                                placeholder="Nombre(s)" onChange={handleChange} value={values.name} required />
                                        </div>
                                        <div className="col-12 col-md-4 px-lg-3 pb-3">
                                            <input type="text" className={`form-control form-control-lg  primaryInput ${errors.lastName > 0 ? "error" : ''}`} name="lastName"
                                                placeholder="Apellido paterno" onChange={handleChange} value={values.lastName} required />
                                        </div>
                                        <div className="col-12 col-md-4 px-lg-3 pb-3">
                                            <input type="text" className={`form-control form-control-lg  primaryInput ${errors.motherLastName > 0 ? "error" : ''}`} name="motherLastName"
                                                placeholder="Apellido materno" onChange={handleChange} value={values.motherLastName} required />
                                        </div>
                                        <div className="col-12 col-md-6 px-lg-3 pb-3">
                                            <input type="tel" className={`form-control form-control-lg  primaryInput ${errors.phone > 0 ? "error" : ''}`} name="phone"
                                                placeholder="Teléfono" maxLength="10" onChange={handleChange} value={values.phone} required />
                                        </div>
                                        <div className="col-12 col-md-6 px-lg-3 pb-3">
                                            <DatePicker className="w-100 px-3 form-control form-control-lg"
                                                selected={date}
                                                onChange={(value) => setDate(value)}
                                                dateFormat={'dd/MMMM/yyyy'}
                                                maxDate={new Date()}
                                                isClearable
                                                showYearDropdown
                                                scrollableYearDropdown
                                                placeholderText="Fecha de nacimiento"
                                                locale="es"
                                                todayButton="Hoy"
                                                disabledKeyboardNavigation
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 px-lg-3 pb-3">
                                            <input type="email" className={`form-control form-control-lg  primaryInput ${errors.email > 0 ? "error" : ''}`} name="email"
                                                placeholder="Correo electrónico" onChange={handleChange} value={values.email} required />
                                        </div>
                                        <div className="col-12 col-md-6 px-lg-3 pb-3">
                                            <input type="password" className={`form-control form-control-lg  primaryInput ${errors.password > 0 ? "error" : ''}`} name="password"
                                                placeholder="Contraseña" onChange={handleChange} value={values.password} required />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button id="signup" className="btn site-btn my-3" onClick={handleSubmit} type="submit">Crear cuenta</button>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-md-12 text-center text-muted">
                                        <p className="px-4">
                                            ¿Ya tienes una cuenta C-Shop?
                                                <Link to={'/login'} className="link-cShop"> Inicia sesión</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalSuccess" tabIndex="-1" role="dialog" aria-labelledby="modalSuccessTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-12 pt-4">
                                        <h3 className="title-modal">Registro exitoso</h3>
                                    </div>
                                    <div className="col-12 py-3">
                                        <p className="message">Su cuenta ha sido creada exitosamente</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default SignUp;