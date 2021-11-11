import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container text-center">
            <h2 className="mt-5 py-3">Our Collections</h2>
            <div className="row mt-3">
                {
                    products.slice(0, 6).map(product => <HomeProduct key={product.id} product={product}></HomeProduct>)
                }
                <div class="row mt-4">
                    <div class="text-center">
                        <Link to='/products'><Button className="w-25" variant="success">Explore More!</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;