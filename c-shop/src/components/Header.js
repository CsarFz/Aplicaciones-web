import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 text-center">
                            <Link to={'/home'} className="site-logo">
                                <h2>C-Shop</h2>
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <form className="header-search-form">
                                <input type="text" placeholder="Buscar..."/>
                                <button><i className="flaticon-search"></i></button>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="user-panel">
                                <div className="up-item">
                                    <i className="flaticon-profile"></i>
                                    <a href="#">Iniciar Sesión</a>  o <a href="#">Crear Cuenta</a>
                                </div>
                                <div className="up-item">
                                    <div className="shopping-card">
                                        <i className="flaticon-bag"></i>
                                        <span>0</span>
                                    </div>
                                    <a href="#">Shopping Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-navbar">
                <div className="container">
                    <div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" className="slicknav_btn slicknav_collapsed">
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span></span></a>
                        <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
                                        <li><a href="#" role="menuitem" tabindex="-1">Home</a></li>
                                        <li><a href="#" role="menuitem" tabindex="-1">Women</a></li>
                                        <li><a href="#" role="menuitem" tabindex="-1">Men</a></li>
                                        <li><a href="#" role="menuitem" tabindex="-1">Jewelry
                                    <span className="new">New</span>
                                </a>
                            </li>
                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row"><a href="#" tabindex="-1">Shoes</a>
                                <span className="slicknav_arrow"><i className="flaticon-right-arrow"></i></span></a><ul className="sub-menu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                                    <li><a href="#" role="menuitem" tabindex="-1">Sneakers</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Sandals</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Formal Shoes</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Boots</a></li>
                                    <li><a href="#" role="menuitem" tabindex="-1">Flip Flops</a></li>
                                </ul>
                            </li>
                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row">
                                <a href="#" tabindex="-1">Pages</a>
                                <span className="slicknav_arrow"><i className="flaticon-right-arrow"></i></span></a>
                                <ul className="sub-menu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                                    <li><a href="./product.html" role="menuitem" tabindex="-1">Product Page</a></li>
                                    <li><a href="./category.html" role="menuitem" tabindex="-1">Category Page</a></li>
                                    <li><a href="./cart.html" role="menuitem" tabindex="-1">Cart Page</a></li>
                                    <li><a href="./checkout.html" role="menuitem" tabindex="-1">Checkout Page</a></li>
                                    <li><a href="./contact.html" role="menuitem" tabindex="-1">Contact Page</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <ul className="main-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Jewelry
                            <span className="new">New</span>
                        </a></li>
                        <li><a href="#">Shoes</a>
                            <ul className="sub-menu">
                                <li><a href="#">Sneakers</a></li>
                                <li><a href="#">Sandals</a></li>
                                <li><a href="#">Formal Shoes</a></li>
                                <li><a href="#">Boots</a></li>
                                <li><a href="#">Flip Flops</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="./product.html">Product Page</a></li>
                                <li><a href="./category.html">Category Page</a></li>
                                <li><a href="./cart.html">Cart Page</a></li>
                                <li><a href="./checkout.html">Checkout Page</a></li>
                                <li><a href="./contact.html">Contact Page</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
	</header>
    )
}

export default Header;