import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState([]);
    useEffect(() => {
        fetch('https://wheelbase.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [update])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
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

    const handleUpdate = (fullOrder) => {
        fetch('https://wheelbase.onrender.com/users/approve', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Status Updated Successfully!')
                    const afterUpdate = orders.filter(order => order._id !== fullOrder._id)
                    setUpdate(afterUpdate)
                }
                else {
                    alert('Something went wrong!')
                }
            })
    }

    return (
        <div className="border" >
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }} className="mt-5 p-4 text-center">Manage All Orders</h2>
            <h5 style={{ fontSize: '25px', fontFamily: " Georgia", fontWeight: "800" }} className="border-bottom   p-4 text-center">All Orders: {orders.length}</h5>
            {
                orders.map(order => <div key={order._id}>
                    <div className=" m-3 border p-4">
                        <h5><span className="name-title">Customer Name:</span> {order.Name}</h5>
                        <h5> <span className="name-title">Ordered Package: </span>{order.Product}</h5>
                        <h5><span className="name-title">Address:</span> {order.Address}</h5>
                        <h5><span className="name-title">Contact Number:</span> {order.Phone}</h5>
                        <h5><span className="name-title">Price:</span> ${order.Price}</h5>
                        <h5><span className="name-title">Status:</span> {order.Status}</h5>
                        {order.Status === "Pending" ? <button onClick={() => handleUpdate(order)} className="btn btn-success me-2 mb-2" >Shipped</button> : <button disabled onClick={() => handleUpdate(order)} className="btn btn-success me-2 mb-2" >Shipped</button>}
                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger mb-2" >Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;