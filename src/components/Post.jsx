import React, { useState, useEffect } from 'react';

const Post = () => {
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch userId from local storage on component mount
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Handle case where userId is not found in local storage
      console.error('User Should be logged in');
    }
  }, []);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
      if(!localStorage.getItem('userId')){
        alert('User Should be logged in');
      }

    try {
      const response = await fetch(`https://internify-backend.onrender.com/post/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: description
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      // Clear the description field after successful submission
      setDescription('');
      console.log('Post added successfully');
      // Optionally, redirect or update UI after successful post
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Add Post</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handlePostSubmit}>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Add Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Post;
