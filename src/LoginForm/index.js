import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import SuccessMessage from "./success";

import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    console.log({ data });
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);


      if (result.success) {
       
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000);

        
        navigate("/products");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          placeholder="Enter username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(p) => setPassword(p.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      {showSuccessMessage && <SuccessMessage message="Login successful! Redirecting to products page..." />}
    </div>
  );
}

export default Login;


