import { useState } from 'react';
import axios from '../api/axios';

const Login = () => {

    // Set up state to hold the form input values
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    // Local state to hold messages and token
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(null);

    // Update state as user types
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('');

        try {
            const response = await axios.post('/token/', credentials);
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            setToken(accessToken);
            setMessage('Login successful!');
            console.log('Access Token:', accessToken);
            console.log('Refresh Token:', refreshToken);

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

        } catch (e) {
            console.error('Login failed:', e.response?.data || e.message);
            setMessage('Login failed. Please check your credentials and try again.');
        }
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center source-serif'>Log In</h2>

            {message && <div className='alert alert-info'>{message}</div>}
            
            <div className='mx-auto mt-5' style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit} className='mt-3'>
                
                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>Username</label>
                        <div className='col-sm-6'>
                            <input 
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>Password</label>
                        <div className='col-sm-6'>
                            <input 
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='text-center'>
                        <button type="submit" className='btn btn-info mt-4'>Log In</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login;