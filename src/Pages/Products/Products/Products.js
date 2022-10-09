import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Product.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://wheelbase.onrender.com/products')
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
        <div>
            <div className="container mt-3">
                <h3 className="product-heading animate__animated animate__fadeInRight">Our <span className='product-heading-span'>Products</span></h3>
                <div className="row mt-3 animate__animated animate__fadeInLeft">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;