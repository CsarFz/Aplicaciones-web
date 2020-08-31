import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <>
                <section className="hero-section">
                    <img src="https://dummyimage.com/1920x1800/000/fff" className="img-fluid mx-auto d-flex" alt="logo" />
                </section>

                <section className="product-filter-section" id="products">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>PRODUCTOS</h2>
                        </div>
                        {/* <ul className="product-filter-menu text-center">
                            <li><a href="#">XBOX</a></li>
                            <li><a href="#">PS4</a></li>
                            <li><a href="#">Switch</a></li>
                            <li><a href="#">PC</a></li>
                            <li><a href="#">HARDWARE</a></li>
                        </ul> */}
                        <ul className="nav nav-pills mb-3 product-filter-menu d-flex justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="pills-xbox-tab" data-toggle="pill" href="#pills-xbox" role="tab" aria-controls="pills-xbox" aria-selected="true">Xbox</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-ps4-tab" data-toggle="pill" href="#pills-ps4" role="tab" aria-controls="pills-ps4" aria-selected="false">PS4</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-switch-tab" data-toggle="pill" href="#pills-switch" role="tab" aria-controls="pills-switch" aria-selected="false">Switch</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-pc-tab" data-toggle="pill" href="#pills-pc" role="tab" aria-controls="pills-pc" aria-selected="false">PC</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-xbox" role="tabpanel" aria-labelledby="pills-xbox-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <div className="tag-sale">Oferta</div>
                                                <a href='/products/2'>
                                                    <img src="https://dummyimage.com/600x600/000/fff" className="img-fluid" alt="" />
                                                </a>
                                                <div className="pi-links">
                                                    <a href="/" className="add-card"><span>Añadir</span><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                            <div className="pi-text">
                                                <h6>$135.00</h6>
                                                <p>Videojuego</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <div className="tag-sale">Oferta</div>
                                                <a href='/products/2'>
                                                    <img src="https://dummyimage.com/600x600/000/fff" className="img-fluid" alt="" />
                                                </a>
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
                            <div className="tab-pane fade" id="pills-ps4" role="tabpanel" aria-labelledby="pills-ps4-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <div className="tag-sale">Oferta</div>
                                                <a href='/products/2'>
                                                    <img src="https://dummyimage.com/600x600/000/fff" className="img-fluid" alt="" />
                                                </a>
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
                            <div className="tab-pane fade" id="pills-switch" role="tabpanel" aria-labelledby="pills-switch-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <div className="tag-sale">Oferta</div>
                                                <a href='/products/2'>
                                                    <img src="https://dummyimage.com/600x600/000/fff" className="img-fluid" alt="" />
                                                </a>
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
                            <div className="tab-pane fade" id="pills-pc" role="tabpanel" aria-labelledby="pills-pc-tab">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <h3>No hay resultados</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="text-center pt-5">
                            <button className="btn btn-more">MÁS</button>
                        </div> */}
                    </div>
                </section>

            </>
        )
    }
}

export default Home;