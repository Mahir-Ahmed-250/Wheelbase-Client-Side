import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Card } from 'react-bootstrap';
import './OrderPage.css'
const OrderPage = () => {
    const [productDetails, setProductDetails] = useState([]);
    const { _id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
            .then((res) => res.json())
            .then((data) => setProductDetails(data));
    }, [_id])


    const onSubmit = data => {
        data.Status = "Pending"
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully')
                    reset()
                }
            })
    }


    const { user } = useAuth()
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-lg-6 mt-3'>
                    <Card className='card'>
                        <Card.Img className="order-img" style={{ width: '100%' }} variant="top" src={productDetails.img} />
                        <Card.Body>
                            <h5 className='service-name'> {productDetails.name}</h5>
                            <h6 className='service-price'>Price: ${productDetails.price}</h6>
                            <p className="description">{productDetails.description}</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6 order-service'>

                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <h2>Order Details</h2>
                        <input defaultValue={user.displayName} {...register("Name")} />
                        <input defaultValue={user.email} {...register("Email", { required: true })} />
                        {productDetails.name && <input readOnly defaultValue={productDetails.name} {...register("Service", { required: true })} />}
                        {productDetails.price && <input readOnly defaultValue={productDetails.price}{...register("Price", { required: true })} />}
                        <input placeholder='Address' {...register("Address", { required: true })} />
                        <input type="number" placeholder='Phone Number' {...register("Phone", { required: true })} />
                        <input className=" w-25 btn btn-success" type="submit" />
                    </form>


                </div>

            </div>

        </div>
    );
};

export default OrderPage;