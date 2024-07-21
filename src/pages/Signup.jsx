import React, { useState } from 'react';
import axios from '../api/axios';
import {Link, useNavigate} from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/users', {
                email,
                password,
            });
            alert('Signup successful, please log in.');
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    return (
        <div>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link to="/" className="text-black hover:text-gray-700 flex items-center">
                        <FaArrowLeft className='mr-2'/> Back to Welcome Page
                    </Link>
                </div>
            </section>

            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

