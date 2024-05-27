
import axios from 'axios';


const API_URL = 'http://localhost:8080';
 const loginBuyer = async (loginCredentials) => {
    try {
        const response = await axios.post(`${API_URL}/rentify/login/home`, loginCredentials);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in the buyer!', error);
        throw error;
    }
};



const addPost= async (data,propertyDetails)=>{

    try { 
        const response = await axios.post(`${API_URL}/rentify/seller/addpost/${data}`, propertyDetails);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in the buyer!', error);
        throw error;
    }

}

const deletePost=async (data)=>{
    try {
        const response = await axios.delete(`${API_URL}/rentify/seller/deletepost/${data}`);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in the buyer!', error);
        throw error;
    }

}

const updatePost=async (id,propertyDetails)=>{
    try {
        const response = await axios.put(`${API_URL}/rentify/seller/updatepost/${id}`,propertyDetails);
        return response.data;
    } catch (error) {
        console.error('There was an error logging in the buyer!', error);
        throw error;
    }

}


const seePost = async(id) => {
    return await axios.get(`${API_URL}/rentify/seller/seepost/${id}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
   
}

const postForBuyer= async ()=>{
//const params={page:'1',size:'10',sortBy:'district'};

return await axios.get(`${API_URL}/rentify/buyer/home`).then(
    response=>response.data)
    .catch(error=>{
        throw error;
    }) ;




}

const updateLike=async (likeupdate)=>{
    return await axios.put(`${API_URL}/rentify/buyer/likeupdate`,likeupdate).then(
        response=>response)
        .catch(error=>{
            throw error;
        }) ;
    
}


const sellerDetail= async (id,userId)=>{

return await axios.get(`${API_URL}/rentify/buyer/seller/${userId}/${id}`).then(response=>
    response.data)
    .catch(error=>{
        throw error;
    }) ;

}

const signIn= async(signInCredential)=>{

return await axios.post(`${API_URL}/rentify/login/signin`,signInCredential).then(response=>
    
    {
console.log('response data'+response.data[0]+'status'+response.status);
return response.data;
    }
     ).catch(error=>
    {
        throw error;
    });


}
export {loginBuyer,addPost,updatePost,deletePost,seePost,sellerDetail,postForBuyer,signIn,updateLike};