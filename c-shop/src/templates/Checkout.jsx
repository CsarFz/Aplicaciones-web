import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
            <section className="checkout-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-2 order-lg-1">
                            <form className="checkout-form">
                                <div className="cf-title">Dirección de envío</div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <p>* Información de envío</p>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="cf-radio-btns address-rb">
                                            <div className="cfr-item">
                                                <input type="radio" name="pm" id="one"/>
                                                <label for="one">Usa mi dirección habitual</label>
                                            </div>
                                            <div className="cfr-item">
                                                <input type="radio" name="pm" id="two"/>
                                                <label for="two">Usa una dirección diferente</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row address-inputs">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Dirección"/>
                                        <input type="text" placeholder="Dirección 2"/>
                                        <input type="text" placeholder="País"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Número exterior"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Código Postal"/>
                                    </div>
                                </div>
                                <div className="cf-title">Información de entrega</div>
                                <div className="row shipping-btns">
                                    <div className="col-6">
                                        <h4>Estándar (3 a 4 días)</h4>
                                    </div>
                                    <div className="col-6">
                                        <div className="cf-radio-btns">
                                            <div className="cfr-item">
                                                <input type="radio" name="shipping" id="ship-1"/>
                                                <label for="ship-1">Gratis</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h4>Entrega al día siguiente</h4>
                                    </div>
                                    <div className="col-6">
                                        <div className="cf-radio-btns">
                                            <div className="cfr-item">
                                                <input type="radio" name="shipping" id="ship-2"/>
                                                <label for="ship-2">$74.00</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cf-title">Pago</div>
                                <ul className="payment-list">
                                    <li>Paypal<a href="#"><img src="img/paypal.png" alt=""/></a></li>
                                    <li>Credit / Debit card<a href="#"><img src="img/mastercart.png" alt=""/></a></li>
                                    <li>Pay when you get the package</li>
                                </ul>
                                <button className="btn site-btn-animated submit-order-btn">Realizar pedido</button>
                            </form>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="checkout-cart">
                                <h3>Tu carrito</h3>
                                <ul className="product-list">
                                    <li>
                                        <div className="pl-thumb"><img src="img/cart/1.jpg" alt=""/></div>
                                        <h6>Videojuego</h6>
                                        <p>$135.00</p>
                                    </li>
                                    <li>
                                        <div className="pl-thumb"><img src="img/cart/2.jpg" alt=""/></div>
                                        <h6>Videojuego</h6>
                                        <p>$135.00</p>
                                    </li>
                                </ul>
                                <ul className="price-list">
                                    <li>Total<span>$99.90</span></li>
                                    <li>Envío<span>Gratis</span></li>
                                    <li className="total">Total<span>$99.90</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Checkout;