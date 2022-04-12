import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='container w-50 mt-4 border rounded'>
            <h3 className='text-center text-primary'>Register</h3>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name='name' className="form-control" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-md mt-2 w-100">Register</button>
                <p className="forgot-password text-right mt-2">
                    Already registered? <Link to='/login' className='text-success pe-auto text-decoration-none'>Please Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;