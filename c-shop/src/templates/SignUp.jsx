import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";

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
            surnames: null,
            email: null,
            password: null,
            phone: null,
            formErrors: {
                name: "",
                surnames: "",
                email: "",
                password: "",
                phone: "",
                date: ""
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.name}
                Last Name: ${this.state.surnames}
                Email: ${this.state.email}
                Password: ${this.state.password}
              `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "name":
                formErrors.name =
                    value.length < 5 ? 'Mínimo 5 caracteres requeridos' : '';
                break;
            case "surnames":
                formErrors.surnames =
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
        console.log(phoneRegex.test(value));
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
                                        {formErrors.surnames.length > 0 && (
                                            <p className="errorMessage">{formErrors.surnames}</p>
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
                                    <form className="px-lg-5 px-2 mt-4" onSubmit={this.handleSubmit} noValidate>
                                        <div className="row">
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="text" className={`form-control form-control-lg  primaryInput ${formErrors.name.length > 0 ? "error" : ''}`} name="name"
                                                    placeholder="Nombre(s)" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="text" className={`form-control form-control-lg  primaryInput ${formErrors.surnames.length > 0 ? "error" : ''}`} name="surnames"
                                                    placeholder="Apellidos" onChange={this.handleChange} />
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
                                            <button id="login" className="btn site-btn my-3" type="submit">Crear cuenta</button>
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
            </section>
        )
    }
}

export default SignUp;