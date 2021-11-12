import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;