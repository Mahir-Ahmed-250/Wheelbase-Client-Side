import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
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
        <div className="border" >
            <h2 className="title-text mt-5 p-4 text-center">Manage All Orders</h2>
            <h5 className="border-bottom  p-4 text-center">All Orders: {orders.length}</h5>
            {
                orders.map(order => <div key={order._id}>
                    <div className=" m-3 border p-4">
                        <h5><span className="name-title">Customer Name:</span> {order.Name}</h5>
                        <h5> <span className="name-title">Ordered Package: </span>{order.Service}</h5>
                        <h5><span className="name-title">Address:</span> {order.Address}</h5>
                        <h5><span className="name-title">Contact Number:</span> {order.Phone}</h5>
                        <h5><span className="name-title">Price:</span> ${order.Price}</h5>
                        <h5><span className="name-title">Status:</span> {order.Status}</h5>
                        <button className="btn btn-success me-2 mb-2" >Approve</button>
                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger mb-2" >Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;