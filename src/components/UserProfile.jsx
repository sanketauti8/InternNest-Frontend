import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
  const { post  } = location.state;

  return (
    <>
      <div className="container mx-5 mt-5">
        <div className="card">
          <img 
            className="card-img-top img-thumbnail" 
            src={post.profileImage} 
            alt="Profile" 
            style={{ width: '350px', height: '150px', objectFit: 'cover', margin: '0 auto' }} 
          />
          <div className="card-body text-center">
            <h5 className="card-title">Name: {post.userFirstName} {post.userLastName}</h5>
            <p className="card-text">Email: {post.userEmail}</p>
            
            
          </div>
          
        </div>
        <p>Note- Use profile user email to chat with user!</p>
      </div>
    </>
  );
};

export default UserProfile;
