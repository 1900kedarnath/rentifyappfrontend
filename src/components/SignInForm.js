import React, { useState } from 'react';
import './SignInc.css';
import { signIn } from './ApiService';

function SignInForm({ onSignIn, userId }) {
  const [signInCredential, setSignInCredential] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(signInCredential);
      if (onSignIn && userId) {
        if (response.userType === 'buyer') onSignIn('buyer');
        else if (response.userType === 'seller') onSignIn('seller');
       
        userId(response.userId);
      }
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect username or password.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInCredential((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signin-containers">
      <form className="signin-forms" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-groups">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={signInCredential.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groups">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signInCredential.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signin-buttons">
          Sign In
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SignInForm;
