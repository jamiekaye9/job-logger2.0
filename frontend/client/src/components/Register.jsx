import { useState } from 'react';
import axios from '../api/axios';

const Register = () => {
    // Set up state to hold the form input values
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirm: ''
    })

    // Message shown to the user (success or failure)
    const [message, setMessage] = useState('');

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Submit form data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/register/', formData);
            setMessage('Registration successful! Please log in.');
            console.log('Registration successful:', response.data);

              setFormData({
                first_name: '',
                last_name: '',
                username: '',
                password: '',
                password_confirm: ''
            });
            
        } catch (e) {
            console.error('Registration failed:', e.response?.data || e.message);
            setMessage('Registration failed. Please try again.');
        }
    }

    return (
        <div className='container mt-5'>

            <h2 className='text-center source-serif'>Sign Up</h2>

            {message && <div className='alert alert-info'>{message}</div>}

            <div className='mx-auto mt-5' style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit} className='mt-3'>

                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>First Name</label>
                        <div className='col-sm-6'>
                            <input 
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>Last Name</label>
                        <div className='col-sm-6'>
                            <input 
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>Username</label>
                        <div className='col-sm-6'>
                            <input 
                                type="text"
                                name="username"
                                value={formData.username}
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
                                value={formData.password}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-3 row justify-content-center'>
                        <label className='form-label col-sm-2'>Confirm Password</label>
                        <div className='col-sm-6'>
                            <input 
                                type="password"
                                name="password_confirm"
                                value={formData.password_confirm}
                                onChange={handleChange}
                                className='form-control'
                                required
                            />
                        </div>
                    </div>

                    <div className='text-center mt-3'>
                        <button type='submit' className='btn btn-info mt-4 button'>Sign Up</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Register;