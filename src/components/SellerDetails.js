import React, { useState, useEffect} from 'react';
import { sellerDetail } from './ApiService';
import './Sellerc.css';

const SellerDetails = ({ id, navValue,buyer}) => {
  const [details, setDetails] = useState('');
  

  const handleNav = () => {
    navValue('buyerhome');
  };

  useEffect(() => {
    
    sellerDetail(id, buyer).then(response => {
      setDetails(response);
      
    });
  }, [id,buyer]);

  return (
    <div className="seller-details-container">
      <ul className="seller-details-list">
        <li className="seller-details-item">
          <h1 className="heading">Seller Details</h1>
          <p><strong>First Name:</strong> {details.firstName}</p>
          <p><strong>Last Name:</strong> {details.lastName}</p>
          <p><strong>Phone Number:</strong> {details.phoneNumber}</p>
          <p><strong>Email Address:</strong> {details.emailAddress}</p>
        </li>
      </ul>
      <button className="back-button" onClick={handleNav}>Go Home</button>
    </div>
  );
};

export default SellerDetails;
