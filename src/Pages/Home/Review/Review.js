import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import { Card } from 'react-bootstrap';
import './Review.css'


SwiperCore.use([Navigation]);


const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mt-5">

            <Swiper slidesPerView={3} spaceBetween={20} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">

                {reviews.map(review => <SwiperSlide>
                    <Card className="text-center review-card " >
                        <Card.Img className="customer-img mx-auto mt-4" variant="top" src={review?.img?.userPhoto} />
                        <Card.Body>
                            <h5 className='service-name'>{review.Name}</h5>
                            <h6 className='service-price'>{review.review}</h6>
                            <p className="description">{review.rating}</p>
                        </Card.Body>
                    </Card>
                </SwiperSlide>)


                }
            </Swiper>

        </div >
    );
};

export default Review;