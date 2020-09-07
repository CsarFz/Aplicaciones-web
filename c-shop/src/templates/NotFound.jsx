import React, { Component } from 'react';
import $ from 'jquery'

class NotFound extends Component {

    componentDidMount() {
        if (this.props) {
            $('header, footer').remove();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row vh-100">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 align-self-center">
                        <h1 style={{fontSize: '7.5em', margin: '15px 0px'}}>404</h1>
                        <h2>Ooops! Te perdiste.</h2>
                        <p>La página que busca no existe.
                        Cómo llegaste aquí es un misterio. Pero puede hacer clic en el botón de abajo
                        para volver a la página de inicio.
                        </p>
                        <a href="/" className="btn site-btn-animated">INICIO</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;