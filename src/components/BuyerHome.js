
import { React, useState, useEffect } from 'react';
import { postForBuyer,updateLike } from './ApiService';
//import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SellerDetails from './SellerDetails';
import './BuyerHomec.css';


const BuyerHome = ({buyerId}) => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(4);
  const [navigationValue, setNavigationValue] = useState('buyerhome');
  const [userId, setUserId] = useState();
  const [filterTerm, setFilterTerm] = useState('');
  const[data,setData]=useState('');
 const[likeData,setLikeData]=useState({postId:0,count:0});
 
  useEffect(() => {
    loadPost();
  }, [userId]);

   useEffect(()=>{
    updateCount();
    loadPost();
   }, [likeData]);
 
  const loadPost = () => {
   
    setData(buyerId);
    postForBuyer().then(response => {
      setPost(response);
      console.log(response);
    }).catch(error => {
      console.error('Error fetching posts:', error);
    });
  };
const updateCount=()=>{
  
  
 
  updateLike(likeData).then(response=>{
   
  }).catch(error=>
   console.log(error) );
}




  const totalPage = Math.ceil(post.length / pageSize);

  const handlePageChange = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPage)
      setCurrentPage(pageIndex);
  };

  const getFilteredData = () => {
    return post.filter(item =>
      item.district.toLowerCase().includes(filterTerm.toLowerCase())
    );
  };

  
  const getPaginatedData = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const filteredData = getFilteredData();
    if (filteredData.length === 0) {
      return post.slice(startIndex, endIndex);
    } else {
      console.log('filter data');
      console.log(filteredData.slice(startIndex, endIndex));
      return filteredData.slice(startIndex, endIndex);
    }
  };

  

  const handleSeller = (e) => {
    setNavigationValue(e);
  };

  

  if (navigationValue === 'buyerhome') {
    return (
      <div className="buyer-home-container">
       
        <input
          type="text"
          placeholder="Search..."
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />
        <ul className="post-list">
          {getPaginatedData().map((data, index) => (
            <li key={index} className="post-item">
             
              <p>District: {data.district}</p>
              <p>Place: {data.place}</p>
              <p>Street: {data.street}</p>
              <p>State: {data.state}</p>
              <p>Country: {data.country}</p>
              <p>Number of Bedrooms: {data.numberOfBedroom}</p>
              <p>Bathroom: {data.bathroom}</p>
              <button onClick={() => {
                setUserId(data.userId.userId);
                setData(buyerId);
                setNavigationValue('sellerdetail');
              }}>I am Interested</button>
            <p>like {likeData.postId===data.postId?data.likeCount:data.likeCount}</p>
             <button onClick={()=>{
             
              setLikeData({
                postId: data.postId,
                count: data.likeCount + 1
              });
              }
           
            }>Like Post</button>
          </li>
          ))}
        </ul>
        <div className="pagination">
          <button className="previous" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {totalPage}
          </span>
          <button className="next-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPage - 1}>
            Next
          </button>
        </div>
      </div>
    );
  } else if (navigationValue === 'sellerdetail') {
    return (
      <SellerDetails id={userId} navValue={handleSeller} buyer={data} />
    );
  }
}

export default BuyerHome;