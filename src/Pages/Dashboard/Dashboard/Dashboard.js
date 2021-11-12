import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import img1 from './Dashboard.png'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Pay from '../Pay/Pay';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddReview from './../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import './Dashboard.css'

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();

    return (
        < div className="container-fluid">
            <div className="row">
                <div className="col-md-4 text-center mt-5 ">
                    <Button className="text-center canvas-btn" variant="success" onClick={handleShow}>
                        Open Side Menu
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} onClick={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>WheelBase</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <img style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', border: '2px solid black' }} className="ms-4" src={user.photoURL} alt="" /><br />
                            <Link to={`${url}`}><Button className="w-50" variant="outline-dark">Dashboard</Button></Link><br />
                            {
                                !admin && <div>
                                    <Link to={`${url}/pay`}><Button variant="outline-dark" className="w-50 mt-3" >Pay</Button></Link><br />
                                    <Link to={`${url}/myOrders`} ><Button variant="outline-dark" className="w-50 mt-3">My Orders</Button></Link><br />
                                    <Link to={`${path}/reviews`}><Button variant="outline-dark" className="w-50 mt-3">Review</Button></Link><br />
                                </div>
                            }
                            {
                                admin && <div>
                                    <Link to={`${url}/allOrders`}><Button
                                        variant="outline-dark" className="w-50 mt-3">Manage All Orders</Button></Link><br />
                                    <Link to={`${path}/addProducts`}><Button variant="outline-dark" className="w-50 mt-3">Add A Product </Button></Link><br />
                                    <Link to={`${path}/makeAdmin`}><Button variant="outline-dark" className="w-50 mt-3" >Make Admin</Button></Link><br />
                                    <Link to={`${path}/manageProducts`}><Button variant="outline-dark" className="w-50 mt-3" >Manage Products</Button></Link><br />
                                </div>
                            }
                            <Button onClick={logOut} variant="outline-dark" className="w-50 mt-3" >Logout</Button>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <img className="canvas-img" style={{ width: '350px' }} src={img1} alt="" />
                </div>
                <div className="col-md-8">

                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/allOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddAProduct></AddAProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>


                </div>
            </div>


        </div>
    )
};

export default Dashboard;