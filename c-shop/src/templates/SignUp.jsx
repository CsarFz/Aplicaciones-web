import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
import api from '../assets/js/api';
import $ from 'jquery';

registerLocale('es', es);

/* eslint-disable */
const emailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const passwordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
);
const phoneRegex = RegExp(
    /^[0-9\b]+$/
)
/* eslint-enable */

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            name: null,
            lastName: null,
            motherLastName: null,
            email: null,
            password: null,
            phone: null,
            formErrors: {
                name: "",
                lastName: "",
                motherLastName: "",
                email: "",
                password: "",
                phone: "",
                date: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password, name, lastName, motherLastName, phone } = this.state;

        if (formValid(this.state)) {
            api.creatAccount(email, password, name, lastName, motherLastName, phone)
        } else {
            $('#modalSuccess h3').text('Error');
            $('#modalSuccess .message').text('Ocurrió un error al validar los campos.');
            $('#modalSuccess').modal();
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

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
            case "phone":
                formErrors.phone = phoneRegex.test(value) ? '' : 'El teléfono es invalido, debe tener 10 caracteres y ser numérico.';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }); // () => console.log(this.state)
    };

    render() {
        const { formErrors } = this.state;

        return (
            <section id="formSignUp">
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card pt-5 pb-3 border-20 shadow border-0">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Regístrate</h2>
                                    <div className="form-group text-center">
                                        {formErrors.name.length > 0 && (
                                            <p className="errorMessage">{formErrors.name}</p>
                                        )}
                                        {formErrors.lastName.length > 0 && (
                                            <p className="errorMessage">{formErrors.lastName}</p>
                                        )}
                                        {formErrors.motherLastName.length > 0 && (
                                            <p className="errorMessage">{formErrors.motherLastName}</p>
                                        )}
                                        {formErrors.phone.length > 0 && (
                                            <p className="errorMessage">{formErrors.phone}</p>
                                        )}
                                        {formErrors.email.length > 0 && (
                                            <p className="errorMessage">{formErrors.email}</p>
                                        )}
                                        {formErrors.password.length > 0 && (
                                            <p className="errorMessage">{formErrors.password}</p>
                                        )}
                                    </div>
                                    <form className="px-lg-5 px-2 mt-4" noValidate>
                                        <div className="row">
                                            <div className="col-12 col-md-4 px-lg-3 pb-3">
                                                <input type="text" className={`form-control form-control-lg  primaryInput ${formErrors.name.length > 0 ? "error" : ''}`} name="name"
                                                    placeholder="Nombre(s)" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-4 px-lg-3 pb-3">
                                                <input type="text" className={`form-control form-control-lg  primaryInput ${formErrors.lastName.length > 0 ? "error" : ''}`} name="lastName"
                                                    placeholder="Apellido paterno" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-4 px-lg-3 pb-3">
                                                <input type="text" className={`form-control form-control-lg  primaryInput ${formErrors.motherLastName.length > 0 ? "error" : ''}`} name="motherLastName"
                                                    placeholder="Apellido materno" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="tel" className={`form-control form-control-lg  primaryInput ${formErrors.phone.length > 0 ? "error" : ''}`} name="phone"
                                                    placeholder="Teléfono" maxLength="10" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <DatePicker className="w-100 px-3 form-control form-control-lg"
                                                    selected={this.state.date}
                                                    onChange={(date) => this.setState({ date })}
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
                                                <input type="email" className={`form-control form-control-lg  primaryInput ${formErrors.email.length > 0 ? "error" : ''}`} name="email"
                                                    placeholder="Correo electrónico" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="password" className={`form-control form-control-lg  primaryInput ${formErrors.password.length > 0 ? "error" : ''}`} name="password"
                                                    placeholder="Contraseña" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button id="signup" className="btn site-btn my-3" onClick={this.handleSubmit} type="submit">Crear cuenta</button>
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
}

export default SignUp;