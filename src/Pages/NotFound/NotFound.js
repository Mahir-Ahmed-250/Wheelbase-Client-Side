import React from 'react';
import img1 from './404 Error.gif'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className=" text-center">
                <img className="container notfound" src={img1} alt="" />
            </div>
        </div>
    );
};

export default NotFound;