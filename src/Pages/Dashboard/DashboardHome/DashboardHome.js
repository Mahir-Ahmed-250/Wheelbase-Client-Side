import React from 'react';
import img from './preview.png'
const DashboardHome = () => {
    return (
        <div className="text-center mt-5">
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }}>Welcome to  WheelBase Dashboard</h2>
            <img style={{ marginTop: '-50px' }} src={img} alt="" />
        </div>
    );
};

export default DashboardHome;