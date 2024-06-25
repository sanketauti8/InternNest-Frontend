import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [postZip, setPostZip] = useState('');
  const [postCity, setPostCity] = useState('');
  const [postState, setPostState] = useState('');
  const [postCountry, setPostCountry] = useState('');
  const [profileImage, setProfileImage] = useState(null); // State to hold selected file
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch userId from local storage on component mount
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Handle case where userId is not found in local storage
      console.error('User should be logged in');
    }
  }, []);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    
    if (!localStorage.getItem('userId')) {
      navigate('/info');
      window.location.reload();
      return; // Stop execution if userId is not present
    }

    try {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('postzip', postZip);
      formData.append('postcity', postCity);
      formData.append('poststate', postState);
      formData.append('postcountry', postCountry);
      if (profileImage) {
        formData.append('profileImage', profileImage); // Append selected file to formData
      }

      const response = await fetch(`http://localhost:5000/post/${userId}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      // Clear the form fields after successful submission
      setDescription('');
      setPostZip('');
      setPostCity('');
      setPostState('');
      setPostCountry('');
      setProfileImage(null); // Clear selected file state

      console.log('Post added successfully');
      // Optionally, redirect or update UI after successful post
      navigate('/');
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file); // Update selected file state
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
                <div className="form-group">
                  <label htmlFor="postzip">Zip Code:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postzip"
                    value={postZip}
                    onChange={(e) => setPostZip(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postcity">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postcity"
                    value={postCity}
                    onChange={(e) => setPostCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="poststate">State:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="poststate"
                    value={postState}
                    onChange={(e) => setPostState(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postcountry">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postcountry"
                    value={postCountry}
                    onChange={(e) => setPostCountry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profileImage">Profile Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="profileImage"
                    accept="image/*"
                    onChange={handleFileChange}
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



