import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { name, img, description, price, _id } = product;
    return (
        <div className="col-md-4 mt-3">
            <Card className="product-card">
                <Card.Img className="product-img" variant="top" src={img} />
                <Card.Body>
                    <h5 className='product-name'> {name}</h5>
                    <h6 className='product-description'> {description}</h6>
                    <p className="product-price">Price: ${price}</p>
                    <Link to={`/products/${_id}`}><Button className='btn btn-dark'>Buy Now!</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;