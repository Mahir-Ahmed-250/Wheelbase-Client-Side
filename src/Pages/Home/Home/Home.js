import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <Review></Review>
        </div>
    );
};

export default Home;