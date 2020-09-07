import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-logo text-center text-white">
                        <a href='/'>
                            <h2 className="text-white">C-Shop</h2>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <h2>Acerca de</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus, quae aliquam sequi deleniti itaque error ipsum eligendi est consequuntur, molestiae ut nostrum labore vero earum odit architecto natus porro?</p>
                                <img src="img/cards.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <h2>Páginas</h2>
                                <ul>
                                    <li><Link to={'/login'}>Iniciar sesión</Link></li>
                                    <li><Link to={'/signup'}>Crear cuenta</Link></li>
                                    <li><Link to={'/contact'}>Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <h2>Questions</h2>
                                <div className="fw-latest-post-widget">
                                    <div className="lp-item">
                                        <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/1.jpg"></div>
                                        <div className="lp-content">
                                            <h6>what shoes to wear</h6>
                                            <span>Oct 21, 2018</span>
                                            <a href="#" className="readmore">Read More</a>
                                        </div>
                                    </div>
                                    <div className="lp-item">
                                        <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/2.jpg"></div>
                                        <div className="lp-content">
                                            <h6>trends this year</h6>
                                            <span>Oct 21, 2018</span>
                                            <a href="#" className="readmore">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h2>Questions</h2>
                                <div className="con-info">
                                    <span>C.</span>
                                    <p>Your Company Ltd </p>
                                </div>
                                <div className="con-info">
                                    <span>B.</span>
                                    <p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
                                </div>
                                <div className="con-info">
                                    <span>T.</span>
                                    <p>+53 345 7953 32453</p>
                                </div>
                                <div className="con-info">
                                    <span>E.</span>
                                    <p>office@youremail.com</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="social-links-warp">
                    <div className="container">

                        <p className="text-white text-center"> &copy; 2020</p>

                    </div>
                </div> */}
            </footer>
        )
    }
}

export default Footer;