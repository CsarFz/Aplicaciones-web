import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header className="header-section">
                <div className="header-top bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 text-center">
                                <Link to={'/'} className="site-logo">
                                    <h2>C-Shop</h2>
                                </Link>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <form className="header-search-form">
                                    <input type="text" placeholder="Buscar..." />
                                    <button><i className="flaticon-search"></i></button>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="user-panel">
                                    <div className="up-item">
                                        <i className="flaticon-profile"></i>
                                        <Link to={'/login'}>Iniciar Sesión</Link> o <Link to={'/signup'}>Crear Cuenta</Link>
                                    </div>
                                    <div className="up-item">
                                        <div className="shopping-card">
                                            <i className="fas fa-shopping-bag fa-xs"></i>
                                            <span>0</span>
                                        </div>
                                        <a href="/cart" className="ml-2">Shopping Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul className="main-menu">
                            <li><Link to={'/'}>Home</Link></li>
                            {/* <li><a href="#">-</a></li>
                            <li><a href="#">-</a></li>
                            <li><a href="#">- <span className="new">New</span></a></li>
                            <li><a href="#">-</a>
                                <ul className="sub-menu">
                                    <li><a href="#">-</a></li>
                                    <li><a href="#">-</a></li>
                                    <li><a href="#">-</a></li>
                                    <li><a href="#">-</a></li>
                                    <li><a href="#">-</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;