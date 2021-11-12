import React from 'react';
import { Card } from 'react-bootstrap';

const ManageSingleProduct = ({ product, handleDelete }) => {
    const { name, img, price } = product;

    return (
        <div className="col-md-4">
            <Card className='card w-100'>
                <Card.Body>
                    <h5 className='product-name p-2'> {name}</h5>
                    <Card.Img className="p-2 product-img" style={{ width: '100%' }} variant="top" src={img} />
                    <h6 className='product-price p-2'>Price: ${price}</h6>
                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger mb-2 ms-2 w-50" >Delete</button>
                </Card.Body>

            </Card>
        </div>

    );
};

export default ManageSingleProduct;