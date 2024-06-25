import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Custom CSS file for additional styling

export const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      navigate('/info');
      window.location.reload();
    }

    const fetchPosts = async () => {
      try {
        const url = `http://localhost:5000/search${searchQuery}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        const sortedPosts = data.msg.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
        setSearchQuery(''); // Clear the search query state
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [navigate, searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const queryParams = new URLSearchParams(formData).toString();

    try {
      const url = `https://internify-frontend.onrender.com/search?${queryParams}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const sortedPosts = data.msg.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const toggleReadMore = (id) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <>
      <div className="container mx-5 mt-5">
        <div className="card mb-4">
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>I code in production.</p>
              <footer className="blockquote-footer">
                 <cite title="Source Title">The Intern</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSearch} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by zip code"
                aria-label="Search"
                name="postzip"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-secondary mb-3" type="submit">Search by Zip</button>
            </div>
          </form>
          {posts.length === 0 ? (
            <p>No posts available</p>
          ) : (
            <div className="row">
              {posts.map(post => (
                <div key={post._id} className="col-12 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{post.userFirstName} {post.userLastName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Location: {post.city}, {post.state}, {post.country} {post.zip}</h6>
                      <p className={`card-text ${expandedPosts[post._id] ? 'expanded' : ''}`}>{post.description}</p>
                      <div className="mt-auto">
                        <span 
                          className="read-more-btn"
                          onClick={() => toggleReadMore(post._id)}
                        >
                          {expandedPosts[post._id] ? 'Read Less' : 'Read More'}
                        </span>
                        <Link to={`/userprofile/${post.user_id}`} state={{ post }} className="btn btn-primary btn-sm ms-2">User Profile</Link>
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(post.city + ', ' + post.state + ', ' + post.country + ' ' + post.zip)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-secondary btn-sm ms-2"
                        >
                          Location
                        </a>
                      </div>
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
