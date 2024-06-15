
import React, { useEffect } from 'react';

const Chats = () => {
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    console.log(userInfo);
   // const token = localStorage.getItem('token');
    // const redirectUrl = `https://chatup-mern-project.onrender.com/chats?userInfo=${userInfo}`;
    const redirectUrl = 'https://chatup-mern-project.onrender.com';
    window.location.href = redirectUrl;
  }, []);

  return (
    <div className='main-content'>Redirecting to Chats page...</div>
  );
};

export default Chats;


