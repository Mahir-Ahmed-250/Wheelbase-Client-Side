import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-oasis-14511.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length < 1) {
        return <div className="text-center mt-5"> <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" /></div>
    }
    return (
        <div className="container text-center">
            <h3 className=" product-heading animate__animated animate__fadeInRight">Our <span className='product-heading-span'>Collections</span></h3>
            <div className="row mt-3 animate__animated animate__fadeInLeft">
                {
                    products.slice(0, 6).map(product => <HomeProduct key={product.id} product={product}></HomeProduct>)
                }
                <div class="row mt-4">
                    <div class="text-center">
                        <Link to='/products'><Button className="w-50 mt-4 mb-4" variant="success">Explore More!</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;