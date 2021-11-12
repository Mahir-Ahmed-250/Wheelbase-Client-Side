import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from './images/faq.png'

const FAQ = () => {
    return (
        <div className="container">
            <h3 className="mb-5 product-heading animate__animated animate__fadeInRight">Frequently Asked <span className='product-heading-span'>Questions</span></h3>
            <div className="row">
                <div className='col-md-6 mt-5'>
                    <h3>FAQ</h3>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >What brands of bikes do you sell?</Accordion.Header>
                            <Accordion.Body>
                                We sell bikes from Trek, Canondale, Saracen, Ghost, All-City, Origin8, Yuba, and Brompton. To learn more about the different brands of bikes we sell, see our Products by navigation.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What types of bikes do you sell?</Accordion.Header>
                            <Accordion.Body>
                                We sell road bikes, cyclocross bikes, mountain bikes, hybrid bikes, track and single speed bikes, cargo bikes, folding bikes, and kid's bikes.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Why should I buy a bike from you?</Accordion.Header>
                            <Accordion.Body>
                                We will work with you to find a bike that suits your riding goals. Whether that bike costs $400 or $4,000, you will receive the highest level of service and care. When you buy a bike from us, we provide free mechanical adjustments for as long as you own it. When you buy a road or cyclocross bike from us, we provide a free basic fit session at the time of purchase. We will adjust the height, angle, and position of your new bike's seat and handlebars so that your ride is as efficient and comfortable as possible.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you sell e-bikes?
                            </Accordion.Header>
                            <Accordion.Body>
                                No, we only sell pedal powered bikes.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What happens when I buy a bike on your website?
                            </Accordion.Header>
                            <Accordion.Body>
                                When you buy a bike on our website, you will be asked to select a shipping method. You have to select In-Store Pickup in order to complete the Check Out process. After you complete the order, we will pull the bike from storage and assemble it according to our exacting standards. While we will try to assemble the bike right away, please allow up to 24 hours for bike assembly- sometimes our service department gets very busy! When the bike is ready to ride, one of our mechanics will give you a call. Then you can come into the store and pick it up!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></div>
                <div className='col-md-6'>
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default FAQ;