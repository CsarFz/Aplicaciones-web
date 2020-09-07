import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '1'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ quantity: e.target.value });
    }

    render() {
        return (
            <section className="product-section">
                <div className="container">
                    <div className="back-link">
                        <Link to="#" onClick={this.props.history.goBack}> <i className="fas fa-chevron-left"></i> Regresar</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-pic-zoom">
                                <img className="product-big-img img-fluid border-20 shadow" src="https://picsum.photos/600" alt="" />
                            </div>
                            <div className="product-thumbs" tabIndex="1" style={{ overflow: 'hidden', outline: 'none' }}>
                                <div className="product-thumbs-track">
                                    <div className="pt active" data-imgbigurl="https://picsum.photos/600"><img src="https://picsum.photos/600" className="img-fluid" alt="" /></div>
                                    <div className="pt" data-imgbigurl="img/single-product/2.jpg"><img src="img/single-product/thumb-2.jpg" alt="" /></div>
                                    <div className="pt" data-imgbigurl="img/single-product/3.jpg"><img src="img/single-product/thumb-3.jpg" alt="" /></div>
                                    <div className="pt" data-imgbigurl="img/single-product/4.jpg"><img src="img/single-product/thumb-4.jpg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 product-details">
                            <h2 className="p-title">Videojuego</h2>
                            <h3 className="p-price">$135.00</h3>
                            <h4 className="p-stock">Disponible: <span>En stock</span></h4>
                            <div className="p-rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o fa-fade"></i>
                            </div>
                            {/* <div className="p-review">
                                <a href="">3 reviews</a>|<a href="">Add your review</a>
                            </div> */}
                            <div className="quantity">
                                <p>Cantidad</p>
                                <div className="pro-qty">
                                    <input type="text" value={this.state.quantity} onChange={this.handleChange} maxLength="1" />
                                </div>
                            </div>
                            <a href="/cart" className="btn site-btn">Añadir al carrito</a>
                            <div id="accordion" className="accordion-area">
                                <div className="panel">
                                    <div className="panel-header" id="headingOne">
                                        <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Detalles</button>
                                    </div>
                                    <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingTwo">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Información adicional </button>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingThree">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Envío y devolución</button>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="panel-body">
                                            <h4>Devoluciones en 7 días</h4>
                                            <p>Pagar cuando reciba disponiible<br />Entrega a domicilio <span>3 - 4 días</span></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
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

export default DetailsProduct;