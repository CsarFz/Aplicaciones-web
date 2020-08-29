import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

class Login extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            modalVisible: false
        }
    }

    toggleModal(e) {
        e.preventDefault();
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render() {
        return (
            <section id="formLogin">
                <div style={{ position: 'fixed', zIndex: 1, top: '15%', right: 0, margin: '10px' }}>
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
                            <div className="card pt-5 pb-3 border-20 shadow border-0">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Iniciar sesión</h2>
                                    <form className="px-lg-5 px-md-4 px-3 mt-4">
                                        <div className="form-group row">
                                            <div className="col-sm-12 px-lg-5 pb-3">
                                                <input type="email" className="form-control form-control-lg  primaryInput" id="email"
                                                    placeholder="Correo electrónico" />
                                            </div>
                                            <div className="col-sm-12 px-lg-5">
                                                <input type="password" className="form-control form-control-lg  primaryInput" id="password"
                                                    placeholder="Contraseña" />
                                            </div>
                                        </div>
                                        <div className="form-group d-flex justify-content-center">
                                            <button id="login" className="btn site-btn my-3" type="button">Iniciar sesión</button>
                                        </div>
                                    </form>
                                    {/* <div className="message === '' ? 'd-none' : ''" className="form-group d-flex justify-content-center">
                                        <label className="text-danger"></label>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-md-12 text-center text-muted">
                                            <p><Link to="" onClick={this.toggleModal.bind(this)} className="link-cShop">¿Olvidaste tu contraseña?</Link></p>
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
                <Modal
                    show={this.state.modalVisible}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body className="p-5 border-20">
                        <h4 className="text-center mb-3">Recuperar contraseña</h4>
                        <div className="row text-center">
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Dolor sequi maiores repudiandae error vitae tempore rem aliquam ab? 
                                    Qui itaque eaque doloremque nemo consequuntur voluptatum, delectus deserunt fugit sint nam.
                                </p>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control form-control-lg  primaryInput" id="email"
                                        placeholder="Correo electrónico" />
                            </div>
                            <div className="col-12 mt-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <button className="btn site-btn w-100" type="submit">Enviar</button>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <button className="btn btn-danger w-100" onClick={this.toggleModal.bind(this)}>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        )
    }
}

export default Login;