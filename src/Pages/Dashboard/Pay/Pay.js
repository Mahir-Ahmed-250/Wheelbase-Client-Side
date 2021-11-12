import React from 'react';
import img from './1.png'
const Pay = () => {
    return (
        <div className="text-center mt-5">
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }} >Online Payment</h2>
            <img style={{ marginTop: '-50px' }} src={img} alt="" />
        </div>
    );
};

export default Pay;