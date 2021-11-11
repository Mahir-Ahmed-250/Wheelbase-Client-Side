import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img1 from './1.png'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div className="container">
            <div className='row'>
                <h2 className='text-center mt-2 sign-up'>Login</h2>
                <div className='col-md-6 col-lg-8 '>
                    <Form className='form-reg animate__animated animate__fadeInLeft' onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                placeholder="Enter email"
                                required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                placeholder="Password"
                                required />
                        </Form.Group>
                        <p className='text-danger'>{authError}</p>
                        <Button variant="success" type="submit">
                            Login
                        </Button><br />

                        <Link to='/signup'><Button variant="primary" className=' mt-2' >New to WheelBase? Sign Up Here</Button></Link>
                    </Form>
                    <Button onClick={handleGoogleSignIn} className="mt-2 animate__animated animate__fadeInLeft" variant="outline-dark" >
                        {google}    Access by Google
                    </Button><br />
                </div>
                <div className="col-md-6 signUp-img col-lg-4">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;