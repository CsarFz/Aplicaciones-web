import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { context } from '../contexts';

const Login = (props) => {
    const { handleSignIn } = useContext(context.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <section id="formLogin">
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card pt-5 pb-3 border-20 shadow border-0">
                            <div className="card-body">
                                <h2 className="card-title text-center">Iniciar sesión</h2>
                                <div className="form-group row">
                                    <div className="col-sm-12 px-lg-5 pb-3">
                                        <input type="email" className="form-control form-control-lg  primaryInput" id="email" name="email"
                                            placeholder="Correo electrónico" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="col-sm-12 px-lg-5">
                                        <input type="password" className="form-control form-control-lg  primaryInput" id="password" name="password"
                                            placeholder="Contraseña" onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <button id="login" className="btn site-btn my-3" onClick={() => { handleSignIn(email, password, props); }}>Iniciar sesión</button>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 text-center text-muted">
                                        <p><Link to="#" onClick={() => setModalVisible(true)} className="link-cShop">¿Olvidaste tu contraseña?</Link></p>
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
                show={modalVisible}
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
                                    <button className="btn btn-danger w-100" onClick={() => setModalVisible(false)}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    )
}

export default Login;