import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import img1 from './1.png'
import './SignUp.css'
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const [registerData, setRegisterData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { registerUser, authError, signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);
    }
    const handleRegistration = e => {
        registerUser(registerData.name, registerData.email, registerData.password, registerData.img, history)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div className="container">
            <div className='row'>
                <h2 className='text-center mt-2 sign-up'>Sign Up</h2>
                <div className='col-md-6 col-lg-8 '>
                    <Form className='form-reg animate__animated animate__fadeInLeft' onSubmit={handleRegistration} >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                placeholder="Enter Your Name" required
                            /></Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password" required
                            /></Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="img"
                                onBlur={handleOnBlur}
                                placeholder="Image Url" required
                            /></Form.Group>
                        <p className='text-danger'>{authError}</p>
                        <Button variant="success" type="submit">
                            Register
                        </Button><br />

                        <Link to='/login'><Button variant="primary" className='mt-2' >Already Have an account? Login Here</Button></Link>
                    </Form>
                    <Button onClick={handleGoogleSignIn} className="mt-2 animate__animated animate__fadeInLeft" variant="outline-dark" >
                        {google}    Access by Google
                    </Button>
                </div>
                <div className="col-md-6 signUp-img col-lg-4">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;