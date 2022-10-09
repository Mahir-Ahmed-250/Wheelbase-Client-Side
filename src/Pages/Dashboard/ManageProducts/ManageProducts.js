import React, { useEffect, useState } from 'react';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://wheelbase.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
        if (confirmation) {
            const url = `https://wheelbase.onrender.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully.')
                        const remaining = products.filter(order => order._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div className="border mt-5" >
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }} className="  p-4 text-center">Manage All Products</h2>
            <h5 style={{ fontSize: '25px', fontFamily: " Georgia", fontWeight: "800" }} className="border-bottom  p-4 text-center">Displayed Products: {products.length}</h5>
            <div className="row">
                {
                    products.map(product =>
                        <ManageSingleProduct handleDelete={handleDelete} key={product._id} product={product}></ManageSingleProduct>



                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;