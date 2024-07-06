// Sing.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './Firebase'; // Ensure correct path to Firebase auth
 // Import CSS file

function Sing() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with values:', { username, email, password });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Email verification link has been sent to your provided email.');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{paddingTop:'150px'}} className='signup-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Sign Up' className='submit-button' />
      </form>
    </div>
  );
}

export default Sing;
