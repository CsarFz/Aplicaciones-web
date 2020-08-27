import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>
                <div className="page-top-info">
                    <div className="container">
                        <h4>Página de categoría</h4>
                        <div className="site-pagination">
                            <a href="/" className="mx-1">Inicio</a>/
                            <a href="/" className="mx-1">Computo</a>/
                        </div>
                    </div>
                </div>
                <section className="category-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                <div className="filter-widget">
                                    <h2 className="fw-title">Categorías</h2>
                                    <ul className="category-menu">
                                        <li><Link to="#">PS4</Link></li>
                                        <li><Link to="#">Xbox One</Link></li>
                                        <li><Link to="#">Computación</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Products;