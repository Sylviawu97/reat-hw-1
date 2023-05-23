import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login authentication logic here
    // Set isLoggedIn to true on successful login
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    return <employees />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;