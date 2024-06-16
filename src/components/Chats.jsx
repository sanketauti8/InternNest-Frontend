
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';   

const Chats = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('userId')){
      navigate('/info');
    window.location.reload();
    }
    const userInfo = localStorage.getItem('userInfo');
    console.log(userInfo);
   // const token = localStorage.getItem('token');
    // const redirectUrl = `https://chatup-mern-project.onrender.com/chats?userInfo=${userInfo}`;
    const redirectUrl = 'https://chatup-mern-project.onrender.com/chats';
    window.location.href = redirectUrl;
  }, []);

  return (
    <div className='main-content'>Redirecting to Chats page...</div>
  );
};

export default Chats;


