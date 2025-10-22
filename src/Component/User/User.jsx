
import React, { Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false)
    const {id, name, email, phone} = user;

    const response = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

    return (
        <div className='border-2 border-amber-600 rounded-xl p-3 m-3'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show details</Link>

            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'} info</button>

            {
                showInfo && <Suspense>
                    <UserDetails2 response={response}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;