import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
    
    render() {
        const isAuthenticated = localStorage.getItem('user');

        return (
            <section className="cart-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-table">
                                <h3>Carrito</h3>
                                <div className="cart-table-warp">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-th">Producto</th>
                                                <th className="quy-th">Cantidad</th>
                                                <th className="total-th">Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-col">
                                                    <img src="https://picsum.photos/id/237/200" className="img-fluid border-20" alt="" />
                                                    <div className="pc-title">
                                                        <h4>Videojuego</h4>
                                                        <p>$135.00</p>
                                                    </div>
                                                </td>
                                                <td className="quy-col">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input type="text" value="1" onChange={() => console.log('hola')} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="total-col"><h4>$135.00</h4></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="total-cost">
                                    <h6>Total <span>$135.00</span></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 card-right">
                            <form className="promo-code-form">
                                <input type="text" placeholder="Enter promo code" />
                                <button type="submit">Enviar</button>
                            </form>
                            <Link to={isAuthenticated ? "/checkout" : '/login'} className="btn site-btn">Realizar compra</Link>
                            <Link to="/products" className="btn btn-continue site-btn">Continuar comprando</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShoppingCart;