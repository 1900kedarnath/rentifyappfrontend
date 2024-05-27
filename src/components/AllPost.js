import './Allpostc.css';
import { React, useEffect, useState, useContext } from 'react';
import { seePost, updatePost, deletePost } from './ApiService';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext' ;
const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  
  const [newPlace, setNewPlace] = useState('');
  const [newStreet, setNewStreet] = useState('');
  const [newDistrict, setNewDistrict] = useState('');
  const [newState, setNewState] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newNumberOfBedroom, setNewNumberOfBedroom] = useState('');
  const [newBathroom, setNewBathroom] = useState('');


  const navigate = useNavigate();
  const {data}=useContext(DataContext);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(5); // Number of posts per page

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    await seePost(data)
      .then(response => {
        console.log(response);
        setPosts(response);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleHome = () => {
    navigate('/sellerhome');
  };

  const handleUpdate = (id) => {
    const updatedPost = {
     
      place: newPlace,
      street: newStreet,
      district: newDistrict,
      state: newState,
      country: newCountry,
      numberOfBedroom: newNumberOfBedroom,
      bathroom: newBathroom,
     
    };
    updatePost(id, updatedPost)
      .then(() => {
        loadPosts();
        setEditPost(null);
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        loadPosts();
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  //const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul>
        {currentPosts && currentPosts.map((post) => (
          <li key={post.postId} className="post-item">
            {editPost === post.postId ? (
              <div>
               
                <input
                  type="text"
                  value={newPlace}
                  onChange={(e) => setNewPlace(e.target.value)}
                  placeholder="New Place"
                />
                <input
                  type="text"
                  value={newStreet}
                  onChange={(e) => setNewStreet(e.target.value)}
                  placeholder="New Street"
                />
                <input
                  type="text"
                  value={newDistrict}
                  onChange={(e) => setNewDistrict(e.target.value)}
                  placeholder="New District"
                />
                <input
                  type="text"
                  value={newState}
                  onChange={(e) => setNewState(e.target.value)}
                  placeholder="New State"
                />
                <input
                  type="text"
                  value={newCountry}
                  onChange={(e) => setNewCountry(e.target.value)}
                  placeholder="New Country"
                />
                <input
                  type="text"
                  value={newNumberOfBedroom}
                  onChange={(e) => setNewNumberOfBedroom(e.target.value)}
                  placeholder="New Number of Bedrooms"
                />
                <input
                  type="text"
                  value={newBathroom}
                  onChange={(e) => setNewBathroom(e.target.value)}
                  placeholder="New Bathroom"
                />
                
                <button onClick={() => handleUpdate(post.postId)}>Save</button>
                <button onClick={() => setEditPost(null)}>Cancel</button>
              </div>
            ) : (
              <div>
              <p>District: {post.district}</p>
              <p>Place: {post.place}</p>
              <p>Street: {post.street}</p>
              <p>State: {post.state}</p>
              <p>Country: {post.country}</p>
              <p>Number of Bedrooms: {post.numberOfBedroom}</p>
              <p>Bathroom: {post.bathroom}</p>

                
                <button onClick={() => setEditPost(post.postId)}>Edit</button>
                <button onClick={() => handleDelete(post.postId)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
     
      <button className="go-home-button" onClick={handleHome}>Go Home</button>
    </div>
  );
};


export default AllPost;
