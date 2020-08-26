import React from 'react';
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    render() {
        return (
            <section id="formSignUp">
                <div style={{position: 'fixed', zIndex: 1, top: '15%', right: 0, margin: '10px'}}>
                    <div className="toast bg-danger" data-delay="5000" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header bg-danger">
                            <strong className="mr-auto text-white">Error</strong>
                            <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body text-white"></div>
                    </div>
                </div>
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card pt-5 pb-3 rounded shadow border-0">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Regístrate</h2>
                                    <form className="px-lg-5 px-2 mt-4">
                                        <div className="row">
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="text" className="form-control form-control-lg  primaryInput" id="name"
                                                    placeholder="Nombre(s)" />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="text" className="form-control form-control-lg  primaryInput" id="surnames"
                                                    placeholder="Apellidos" />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="tel" className="form-control form-control-lg  primaryInput" id="phone"
                                                    placeholder="Teléfono" />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="text" className="form-control form-control-lg  primaryInput" id="birthday"
                                                    placeholder="Fecha de nacimiento" />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="email" className="form-control form-control-lg  primaryInput" id="email"
                                                    placeholder="Correo electrónico" />
                                            </div>
                                            <div className="col-12 col-md-6 px-lg-3 pb-3">
                                                <input type="password" className="form-control form-control-lg  primaryInput" id="password"
                                                    placeholder="Contraseña" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button id="login" className="btn btn-cShop my-3 px-4" type="button">Crear cuenta</button>
                                        </div>
                                    </form>
                                    {/* <div className="message === '' ? 'd-none' : ''" className="form-group d-flex justify-content-center">
                                        <label className="text-danger"></label>
                                    </div> */}
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
                </div >
            </section >
        )
    }
}

export default SignUp;