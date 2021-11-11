import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, price, _id } = product;
    return (
        <div className="col-md-4 mt-3">
            <Card>
                <Card.Img style={{ padding: "20px" }} variant="top" src={img} />
                <Card.Body>
                    <h5 className='course-name'> {name}</h5>
                    <h6 className='course-description'> {description}</h6>
                    <p className="course-price">Price: {price}</p>
                    <Link to={`/products/${_id}`}><button className='btn btn-dark'>Buy Now!</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;