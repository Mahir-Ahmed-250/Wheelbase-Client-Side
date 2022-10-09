import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import { Card } from 'react-bootstrap';
import './Review.css'
import Rating from 'react-rating';

SwiperCore.use([Navigation]);

const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://wheelbase.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mt-5 mb-5">
            <h3 className="mb-5 product-heading animate__animated animate__fadeInRight">Customer <span className='product-heading-span'>Review</span></h3>
            <Swiper slidesPerView={3} spaceBetween={20} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {reviews.map(review => <SwiperSlide>
                    <Card style={{ border: '5px solid' }} className="text-center review-card" >
                        <Card.Img className="customer-img mx-auto mt-4" variant="top" src={review?.img?.userPhoto} />
                        <Card.Body>
                            <h5 className='customer-name'>{review.Name}</h5>
                            <Rating className='rating mb-2' style={{ color: 'orange' }}
                                initialRating={review.rating}
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                readonly></Rating>
                            <h6 className='customer-review'>{review.review}</h6>
                        </Card.Body>
                    </Card>
                </SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};

export default Review;