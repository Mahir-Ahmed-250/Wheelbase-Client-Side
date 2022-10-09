import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://wheelbase.onrender.com/orders')
            .then(res => res.json())

            .then((result) => {
                const myOrderList = result.filter(
                    order => order.Name === user.displayName
                );
                setOrders(myOrderList);
            });
    }, [user.displayName]);
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to Remove this Order?');
        if (confirmation) {
            const url = `https://wheelbase.onrender.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully.')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }
    return (
        <div className="border">


            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }} className="mt-5 p-4 text-center">My Orders</h2>
            <h5 style={{ fontSize: '25px', fontFamily: " Georgia", fontWeight: "800" }} className="border-bottom  p-4 text-center">My Orders: {orders.length}</h5>
            {
                orders.map(order => <div key={order._id}>
                    <div className=" m-3 border p-4">
                        <h5><span className="name-title">Customer Name:</span> {order.Name}</h5>
                        <h5> <span className="name-title">Ordered Product: </span>{order.Product}</h5>
                        <h5><span className="name-title">Address:</span> {order.Address}</h5>
                        <h5><span className="name-title">Contact Number:</span> {order.Phone}</h5>
                        <h5><span className="name-title">Price:</span> ${order.Price}</h5>
                        <h5><span className="name-title">Status:</span> {order.Status}</h5>
                        <button className="btn btn-danger mb-2" onClick={() => handleDelete(order._id)}>Remove From My Order</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;