import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  

export const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      if(!localStorage.getItem('userId')){
        navigate('/info');
      window.location.reload();
      }

    const fetchPosts = async () => {
      try {
        const url = 'https://internify-backend.onrender.com/getallpost';
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
         // Sort posts by createdAt in descending order
         const sortedPosts = data.msg.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
         setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container mx-5 mt-5">
        
        <div className="card mb-4">
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-4">
          {posts.length === 0 ? (
            <p>No posts available</p>
          ) : (
            <div className="row">
              {posts.map(post => (
                <div key={post._id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{post.userFirstName} {post.userLastName}</h5>
                      <p className="card-text">{post.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <img 
                          src={post.profileImage} 
                          alt="Profile" 
                          className="img-fluid mb-2" 
                        />
                      </li>
                      <li className="list-group-item">Created by: {post.userEmail}</li>
                      <li className="list-group-item">Created at: {new Date(post.createdAt).toLocaleString()}</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
