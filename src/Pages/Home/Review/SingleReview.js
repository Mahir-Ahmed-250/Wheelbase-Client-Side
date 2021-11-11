import React from 'react';
import { Card } from 'react-bootstrap';

const SingleReview = () => {
    return (
        <div className="">
            <Card >
                <Card.Body>
                    <h5 className='service-name'> Mahir</h5>
                    <h6 className='service-price'>Chorom</h6>
                    <p className="description">4star</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleReview;