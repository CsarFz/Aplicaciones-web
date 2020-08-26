import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <section id="formLogin">
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
                        <div className="col-md-7">
                            <div className="card pt-5 pb-3 rounded shadow border-0">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Iniciar sesión</h2>
                                    <form className="px-5 mt-4">
                                        <div className="form-group row">
                                            <div className="col-sm-12 px-5">
                                                <input type="text" className="form-control form-control-lg  primaryInput" id="email"
                                                    placeholder="Correo electrónico" />
                                            </div>
                                        </div>
                                        <div className="form-group row pt-2">
                                            <div className="col-sm-12 px-5">
                                                <input type="password" className="form-control form-control-lg  primaryInput" id="password"
                                                    placeholder="Contraseña" />
                                            </div>
                                        </div>
                                        <div className="form-group d-flex justify-content-center">
                                            <button id="login" className="btn btn-cShop my-3 px-4" type="button">Iniciar sesión</button>
                                        </div>
                                    </form>
                                    {/* <div className="message === '' ? 'd-none' : ''" className="form-group d-flex justify-content-center">
                                        <label className="text-danger"></label>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-12 text-center text-muted">
                                            <p><Link to={'/'} className="link-cShop">¿Olvidaste tu contraseña?</Link></p>
                                            <p className="px-4">
                                                ¿No tienes una cuenta C-Shop?
                                                <Link to={'/signup'} className="link-cShop"> Regístrate</Link>
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

export default Login;