import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.less';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        setLoading(true)
        await fetch('https://fakestoreapi.com/products?limit=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                setProducts(response);
                console.log(response);
                setLoading(false);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <a href="/#" id="backToTop" className="shadow-lg"> </a>
            <section className="hero-section">
                <Swiper id="main" navigation pagination spaceBetween={30} loop autoplay>
                    <SwiperSlide>
                        <img src={'https://picsum.photos/1920/200'} className="mw-100 mx-auto d-flex" height="200" alt={'Slide'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={'https://picsum.photos/1920/200'} className="mw-100 mx-auto d-flex" height="200" alt={'Slide'} />
                    </SwiperSlide>
                </Swiper>
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
                    { isLoading && (
                        <div className="row">
                            <div className="col-12 text-center">
                                <Loader type="RevolvingDot" color="#E9155F" height={100} width={100} />
                            </div>
                        </div>
                    )}
                    
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-xbox" role="tabpanel" aria-labelledby="pills-xbox-tab">
                            <div className="row justify-content-center">
                                {
                                    products.filter(({category}) => category === 'electronics')
                                    .map(({id, title, image, price, category}) => {
                                            return (
                                            <div className="col-lg-3 col-sm-6" key={`product-${id}`}>
                                                <div className="product-item">
                                                    <div className="pi-pic">
                                                        {category === 'electronics' ? <div className="tag-sale">Oferta</div> : ''}
                                                        <a href='/products/2'>
                                                            <img src={image} className="mw-100" height="300" alt="" />
                                                        </a>
                                                        <div className="pi-links">
                                                            <a href="/#" className="add-card"><span>Añadir</span><i className="fas fa-shopping-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="pi-text">
                                                        <h6>$ {price}</h6>
                                                        <p>{title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                    })
                                }
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
                                                <a href="/#" className="add-card"><span>Añadir</span><i className="fas fa-shopping-cart"></i></a>
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
                                                <a href="/#" className="add-card"><span>Añadir</span><i className="fas fa-shopping-cart"></i></a>
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

export default Home;