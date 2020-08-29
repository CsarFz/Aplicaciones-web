import React, { Component } from 'react';
import $ from 'jquery';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleEdit = () => {
        $('#profileForm input')
            .addClass('form-control')
            .removeClass('form-control-plaintext')
            .attr('readonly', false);
        $('#profileForm button').removeClass('d-none');
        $('#btn-edit').addClass('d-none');
    }

    render() {
        return (
            <section id="profile">
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card pt-3 pb-3 border-20 shadow border-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="card-title float-left">Perfil</h2>
                                            <button className="btn btn-edit float-right" onClick={this.handleEdit} id="btn-edit">Editar <i className="fas fa-edit fa-sm"></i></button>
                                        </div>
                                        <form id="profileForm" className="mx-3">
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group row">
                                                        <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">Nombre</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" readOnly name="name" className="form-control-plaintext" id="name" value="César Adrián" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group row">
                                                        <label htmlFor="surnames" className="col-sm-3 col-form-label font-weight-bold">Apellidos</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" readOnly name="surnames" className="form-control-plaintext" id="surnames" value="Galván Medrano" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group row">
                                                        <label htmlFor="phone" className="col-sm-3 col-form-label font-weight-bold">Teléfono</label>
                                                        <div className="col-sm-9">
                                                            <input type="tel" readOnly name="phone" className="form-control-plaintext" id="phone" value="5512345678" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group row">
                                                        <label htmlFor="email" className="col-sm-3 col-form-label font-weight-bold">Email</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" readOnly name="email" className="form-control-plaintext" id="email" value="email@example.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <button className="btn site-btn d-none" type="submit">Guardar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;