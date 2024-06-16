import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setIsLoggedIn(!!storedUserId); // Set isLoggedIn to true if userId exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false); // Update state to reflect the logout
    // Optionally, you can redirect the user to the login page or home page
    window.location.href = '/login';
  };
  return (
    <div className='layout-center'>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/info">InternNest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      {isLoggedIn && (
                <>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/addpost">Add-Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/chats">Chats</a>
        </li>
        </>
          )}
           {!isLoggedIn && (
                <>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Signup</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
        </li>
        </>
          )}
        <li class="nav-item">
        <button class="nav-link" onClick={handleLogout} disabled={!isLoggedIn}>
        Logout
      </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar