import React, { useState } from 'react';
import { loginBuyer } from './ApiService';
import './LoginFormc.css';

const LoginForm = ({ afterLogin }) => {
    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', emailAddress: '', phoneNumber: '', password: '', userType: '' });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!credentials.firstName) {
            errors.firstName = 'First name is required';
            valid = false;
        }

        if (!credentials.lastName) {
            errors.lastName = 'Last name is required';
            valid = false;
        }

        if (!credentials.emailAddress) {
            errors.emailAddress = 'Email is required';
            valid = false;
        }

        // Add more validation rules as needed

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                loginBuyer(credentials);
                if (afterLogin) afterLogin();
            } catch (error) {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="signin-containers">
            <form className="signin-forms" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-groups">
                    <label>FirstName:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={credentials.firstName}
                        onChange={handleChange}
                        required
                    />
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                </div>

                <div className="form-groups">
                    <label>LastName:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={credentials.lastName}
                        onChange={handleChange}
                        required
                    />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>

                <div className="form-groups">
                    <label>PhoneName:</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={credentials.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                </div>

                <div className="form-groups">
                    <label>Email :</label>
                    <input
                        type="email"
                        name="emailAddress"
                        value={credentials.emailAddress}
                        onChange={handleChange}
                        required
                    />
                    {errors.emailAddress && <p className="error-message">{errors.emailAddress}</p>}
                </div>

                <div className="form-groups">
                    <label>Password :</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                <div className="form-groups">
                    <label>UserType:Enter any one buyer/seller</label>
                    <input
                        type="text"
                        name="userType"
                        value={credentials.userType}
                        onChange={handleChange}
                       
                        required
                    />
                    {errors.userType && <p className="error-message">{errors.userType}</p>}
                </div>

                <button type="submit" className="signin-button">Sign Up</button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginForm;
