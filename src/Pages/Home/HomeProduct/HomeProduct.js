import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProduct.css'
const HomeProduct = ({ product }) => {
    const { _id, name, img, description, price } = product;
    return (
        <div className="col-md-6 col-lg-4 mt-4">
            <Card className='card home-card' >
                <Card.Body>
                    <Card.Img variant="top" className='product-img' src={img} />
                    <h5 className='product-name mt-3'>{name}</h5>

                    <p className="product-description">{description}</p>
                    <p className='product-price'>Price: ${price}</p>
                    <Link to={`/products/${_id}`}><button className='btn btn-dark'>Buy Now!</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeProduct;