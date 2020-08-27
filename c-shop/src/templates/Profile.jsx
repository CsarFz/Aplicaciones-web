import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <section id="profile">
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card pt-3 pb-3 border-20 shadow border-0">
                                <div className="card-body">
                                    <h2 className="card-title">Perfil</h2>
                                    <div className="row">
                                        <div className="col-6">
                                            Nombre
                                        </div>
                                        <div className="col-6">
                                            Apellidos
                                        </div>
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