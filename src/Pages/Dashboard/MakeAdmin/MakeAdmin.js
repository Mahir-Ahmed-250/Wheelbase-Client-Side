import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './MakeAdmin.css'
const MakeAdmin = () => {

    const [email, setEmail] = useState('')



    const handleOnBlur = e => {
        setEmail(e.target.value)

    }

    const handleAdminSubmit = e => {

        const user = { email }
        console.log(user)
        fetch('https://wheelbase.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Make Admin Successfully!')
                }
                else {
                    alert('Something went wrong!')
                }
            })
        e.preventDefault()
    }

    return (
        <div className="text-center mt-5">
            <h2 style={{ fontSize: '40px', fontFamily: " Georgia", fontWeight: "800" }}>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleOnBlur} type="email" className="form-control admin-input mx-auto mb-2" required />
                <Button className="" type="submit" variant="success" >Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;