import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { context } from '../contexts'

const Header = (props) => {
    const { isLoggedIn, handleSignOut } = useContext(context.auth);
    
    return (
        <header className="header-section">
            <div className="header-top bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 text-center">
                            <Link to='/' className="site-logo">
                                <h2>C-Shop</h2>
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <form className="header-search-form">
                                <input type="text" placeholder="Buscar..." />
                                <button><i className="fas fa-search fa-xs"></i></button>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="user-panel">
                                { !isLoggedIn ?
                                <div className="up-item">
                                    <i className="fas fa-user mr-2 fa-lg"></i>
                                    <Link to="/login">Iniciar Sesión</Link> o <Link to="/signup">Crear Cuenta</Link>
                                </div>
                                :
                                <div className="up-item">
                                    <ul className="main-menu">
                                        <li><Link to="/profile"><i className="fas fa-user mr-2 fa-lg"></i> Perfil</Link>
                                            <ul className="sub-menu shadow">
                                                <li><Link to="/profile">Mi perfil</Link></li>
                                                <li><Link to="#" onClick={() => { handleSignOut(); props.history.push('/'); }}>Cerrar Sesión</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                }
                                <div className="up-item">
                                    <div className="shopping-card">
                                        <i className="fas fa-shopping-cart fa-lg"></i>
                                        <span>0</span>
                                    </div>
                                    <Link to={"/cart"} className="ml-2">Carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-navbar d-none d-md-block">
                <div className="container">
                    <ul className="main-menu">
                        <li><Link to='/'>Inicio</Link></li>
                        {/* <li><a href="#">- <span className="new">New</span></a></li> */}
                        <li><Link to='/products'>Productos</Link></li>
                        <li><Link to='#'>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
            <Navbar collapseOnSelect variant="dark" expand="lg" className="d-md-none main-navbar">
                <p className="navbar-brand m-0">Menú</p>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto d-block">
                        <Nav.Item>
                            <Nav.Link eventKey="1" as={Link} to="/">
                                Inicio
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav>
                                <a href="/products" className="nav-link">Productos</a>
                            </Nav>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" as={Link} to="/contact">
                                Contacto
                                </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default withRouter(Header);