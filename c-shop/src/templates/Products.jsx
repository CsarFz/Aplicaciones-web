import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>
                <div className="page-top-info">
                    <div className="container">
                        <h4>Productos</h4>
                        <div className="site-pagination">
                            <a href="/" className="mx-1">Inicio</a>/
                            <a href="/" className="mx-1">Productos</a>/
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
                                        <li><Link to="#">PS4</Link>
                                            <ul className="sub-menu">
                                                <li><a href="/">Videojuegos <span>(2)</span></a></li>
                                                <li><a href="/">Accesorios<span>(6)</span></a></li>
                                                <li><a href="/">Hardware<span>(3)</span></a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Xbox One</Link>
                                            <ul className="sub-menu">
                                                <li><a href="/">Videojuegos <span>(3)</span></a></li>
                                                <li><a href="/">Accesorios<span>(8)</span></a></li>
                                                <li><a href="/">Hardware<span>(3)</span></a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Computación</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <div className="tag-sale">Oferta</div>
                                                <Link to="/products/2">
                                                    <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid" alt="" />
                                                </Link>
                                                <div className="pi-links">
                                                    <a href="#" className="add-card"><span>Añadir</span><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                            <div className="pi-text">
                                                <h6>$135.00</h6>
                                                <p>Videojuego</p>
                                            </div>
                                        </div>
                                    </div>
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