import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css'
import useAuth from './../../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const userPhoto = user.photoURL
    const onSubmit = data => {
        data.img = { userPhoto }
        fetch('https://wheelbase.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Thanks for your Review!')
                    reset()
                }
            })


    };

    return (
        <div className="add-product mt-5">
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }} className="text-center">Give a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input readOnly defaultValue={user.displayName} {...register("Name")} />
                <textarea className="text-area"  {...register("review", { required: true })} placeholder="Review" />
                {errors.review && <span className='mb-2'>Review field is required</span>}
                <input type="number"  {...register("rating", { required: true, max: 5 })} placeholder="Rating Out of 5" />
                {errors.rating && <span className='mb-2'>Rate Us Out of 5</span>}
                <input className="btn btn-dark" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;