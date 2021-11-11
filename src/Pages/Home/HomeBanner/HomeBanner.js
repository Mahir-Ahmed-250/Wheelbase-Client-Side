import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 banner-title animate__animated animate__fadeInLeft">
                    <h2 className="banner-title-1" >BEST CYCLING EXPERIENCE</h2>
                    <h5 className="mt-4" >Checkout Our Exclusive Collection of Road Bike, Mountain Bike, Commuter Bike, Fat Bike And Many More!</h5>
                    <Link to='/products'><Button className="mt-3" variant="success">Explore More!</Button></Link>
                </div>
                <div className="col-md-8">
                    <Carousel fade className="slide ">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;