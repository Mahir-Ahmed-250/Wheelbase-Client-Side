import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='nav-background' variant="dark">
            <Container>
                <NavLink className='company-name nav-links' to="/" >
                    <span>WheelBase</span>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end animate__animated animate__slideInRight" >
                    <NavLink className='nav-links' to="/home">Home</NavLink>
                    <NavLink className='nav-links' to="/products">Products</NavLink>
                    {user.email ? <NavLink className='nav-links' to="/dashboard">Dashboard</NavLink> : ''}
                    {user.email ? <span className='nav-name' style={{ color: 'white' }}><img className='nav-img' src={user.photoURL} alt="" /> {user.displayName}</span> : ''}
                    {user.email ?
                        <Button onClick={logOut} variant="outline-light" className='logout-btn'>Log Out</Button>
                        : <NavLink className='nav-links' to="/login"><Button variant="outline-light">Login</Button></NavLink>}
                    {user.email ? '' : <NavLink className='nav-links' to="/signup"><Button variant="outline-light">Sign Up</Button></NavLink>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;