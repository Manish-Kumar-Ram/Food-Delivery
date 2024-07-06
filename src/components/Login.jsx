import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase'; // Ensure this import is correctly configured
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful Google sign-in if needed
      console.log(result);
      alert('Google login successful');
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with values:', { email, password });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='outer-login'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">Log In</button>
        </form>
        <button id='google' onClick={handleGoogleSignIn} className="google-button"><FcGoogle /></button>
      </div>
    </div>
  );
}

export default Login;
