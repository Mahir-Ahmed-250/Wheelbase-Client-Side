import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;
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
        <div className="border" >
            <h2 className="title-text mt-5 p-4 text-center">Manage All Products</h2>
            <h5 className="border-bottom  p-4 text-center">All Orders: {products.length}</h5>
            {
                products.map(product => <div key={product._id}>
                    <div className=" m-3 border p-4">


                        <Card className='card'>
                            <Card.Img className="order-img" style={{ width: '100%' }} variant="top" src={product.img} />
                            <Card.Body>
                                <h5 className='service-name'> {product.name}</h5>
                                <h6 className='service-price'>Price: ${product.price}</h6>
                                <p className="description">{product.description}</p>
                            </Card.Body>
                        </Card>

                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger mb-2" >Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;