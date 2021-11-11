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
import './Dashboard.css'
import MyOrders from '../MyOrders/MyOrders';


const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();

    return (
        < div className=" container-fluid">
            <div className="row">
                <div className="col-md-4 text-center mt-5 ">
                    <Button className="text-center" style={{ width: '50%', height: '75px' }} variant="success" onClick={handleShow}>
                        Open Side Menu
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} onClick={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>WheelBase</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <img style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', border: '2px solid black' }} src={user.photoURL} alt="" /><br />
                            <Link to={`${url}`}><Button variant="outline-dark">Dashboard</Button></Link><br />
                            <Link to={`${url}/pay`}><Button variant="outline-dark">Pay</Button></Link><br />
                            <Link to={`${url}/myOrders`} ><Button variant="outline-dark">My Orders</Button></Link><br />
                            <Link><Button variant="outline-dark">Review</Button></Link><br />
                            <Link to={`${url}/allOrders`}><Button variant="outline-dark">Manage All Orders</Button></Link><br />
                            <Link><Button variant="outline-dark">Add A Product </Button></Link><br />
                            <Link><Button variant="outline-dark">Make Admin</Button></Link><br />
                            <Link><Button variant="outline-dark">Manage Products</Button></Link><br />
                            <Button onClick={logOut} variant="outline-dark">Logout</Button>
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
                        <Route path={`${path}/allOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>

                    </Switch>


                </div>
            </div>


        </div>
    )
};

export default Dashboard;