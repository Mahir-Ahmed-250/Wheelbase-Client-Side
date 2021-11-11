import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddAProduct.css'
const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Updated Successfully')
                    reset();
                }
            })
    };
    return (
        <div className="add-product mt-5">
            <h2 className="text-center">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />
                <textarea className="text-area"  {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="Image Url" />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;