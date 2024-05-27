

import React, { useState ,useContext} from 'react';
import { addPost } from './ApiService';
import DataContext from './DataContext';
import { useNavigate } from 'react-router-dom';
import './Dopostc.css' ;
const DoPost = ( ) => {
    const [propertyDetails, setPropertyDetails] = useState({
        userId: '',
        place: '', 
        street: '', 
        district: '', 
        state: '', 
        country: '', 
        numberOfBedroom: '', 
        bathroom: '', 
        uploadRoomImage: ''
    });    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const {data} =useContext(DataContext) ;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPropertyDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleHome=()=>{
        navigate('/sellerhome') ;
        
         }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost(data,propertyDetails);
            navigate('/sellerhome');
        } catch (error) {
            setError('Post failed. Please try again.');
        }
    };

    return (
       <div className="seller-containerd">
           
            <form className="signin-formd" onSubmit={handleSubmit}>
            <div className="form-groupd">
        <label>Place:</label>
        <input
            type="text"
            name="place"
            value={propertyDetails.place}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>Street:</label>
        <input
            type="text"
            name="street"
            value={propertyDetails.street}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>District:</label>
        <input
            type="text"
            name="district"
            value={propertyDetails.district}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>State:</label>
        <input
            type="text"
            name="state"
            value={propertyDetails.state}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>Country:</label>
        <input
            type="text"
            name="country"
            value={propertyDetails.country}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>Number of Bedrooms:</label>
        <input
            type="text"
            name="numberOfBedroom"
            value={propertyDetails.numberOfBedroom}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>Bathroom:</label>
        <input
            type="text"
            name="bathroom"
            value={propertyDetails.bathroom}
            onChange={handleChange}
            required
        />
    </div>
    <div className="form-groupd">
        <label>Upload Room Image:</label>
        <input
            type="text"
            name="uploadRoomImage"
            value={propertyDetails.uploadRoomImage}
            onChange={handleChange}
            required
        />
    </div>
    <button type="submit" className="signin-buttond">Add Post</button>
</form>
{error && <p>{error}</p>}
<button onClick={handleHome} className="seller-home-buttond">Go Home</button>
        </div>
    );
};








export default DoPost;
