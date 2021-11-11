import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProduct.css'
const HomeProduct = ({ product }) => {
    const { _id, name, img, description, price } = product;
    return (
        <div className="col-md-6 col-lg-4 mt-3">
            <Card className='card home-card' >
                <Card.Body>
                    <Card.Img variant="top" className='service-img' src={img} />
                    <h5 className='service-name'>{name}</h5>
                    <p className='service-price'>Price: ${price}</p>
                    <p className="description">{description}</p>
                    <Link to={`/products/${_id}`}><button className='btn btn-dark'>Buy Now!</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeProduct;