import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from '../api/axios';
import AuthContext from '../context/AuthContext';
import {FaArrowLeft} from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', email);  // OAuth2PasswordRequestForm expects 'username'
        formData.append('password', password);

        try {
            const response = await axios.post('/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            login(response.data.access_token);
            navigate('/home');
        } catch (error) {
            console.error('Login failed', error);
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

            <div style={styles.container}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2>Login</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={styles.input}
                    />
                    <button className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                            type="submit" style={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff', // Optional: for better visibility
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff', // Optional: for better visibility
    },
    input: {
        margin: '0.5rem 0',
        padding: '0.5rem',
        width: '100%',
        maxWidth: '300px',
    },
    button: {
        margin: '1rem 0',
        padding: '0.5rem 1rem',
        width: '100%',
        maxWidth: '300px',
    }
};

export default Login;


