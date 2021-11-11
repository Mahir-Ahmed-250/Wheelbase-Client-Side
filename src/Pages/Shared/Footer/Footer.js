import React from 'react';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './1.png'
import { Button } from 'react-bootstrap';
import './Footer.css'


const fb = <FontAwesomeIcon icon={faFacebook} />
const yt = <FontAwesomeIcon icon={faYoutube} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-1">
                    <h3>
                        <span className="company-name">WheelBase</span></h3>
                    <p>Designing the future of transportation</p>
                    <p className="footer-company-name">WheelBase &copy; 2022</p>
                </div>
                <div className="footer-2">
                    <img className="payment" src={img1} alt="" />
                </div>
                <div className="footer-3">
                    <h5 className="footer-icons1">{fb}</h5>
                    <h5 className="footer-icons2">{yt}</h5>
                    <h5 className="footer-icons3">{twitter}</h5>
                    <h5 className="footer-icons4">{instagram}</h5>
                </div>
                <div className="footer-4">
                    <div>
                        <p>İsmetpaşa, 122. Sokak, Sultangazi/İstanbul, Turkey</p>
                    </div>
                    <div>
                        <p>+324-2350297</p>
                    </div>
                    <div>
                        <p><a className='mail' href="mailto:support@company.com">contact@wheelbase.com</a></p>
                    </div>
                </div>
                <div className="footer-5">
                    <p>Subscribe for get latest news about WheelBase!</p>
                    <form>
                        <input type="email" placeholder="Your Email" className="form-control" />
                        <Button className="mt-3" variant="outline-light">Join Now!</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;