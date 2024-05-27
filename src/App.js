
import './App.css';
import {React,useState} from 'react';
import LoginForm from './components/LoginForm' ;
import SignInForm from './components/SignInForm' ;

import './components/Homec.css' ;
import BuyerHome from './components/BuyerHome' ;
import SellerHome from './components/SellerHome' ;
import DataProvider from './components/DataProvider' ;



const App = () => {
const [isLogIn,setIsLogIn]=useState('login');
const[userId,setUserId]=useState('') ;

const handleSignIn=()=>{
    setIsLogIn('signIn');
}
const handleSignUp=(value)=>{
    setIsLogIn(value);
}

const handleUserId=(value)=>{
  setUserId(value);
}

 const handleSignUpButton=()=>{
  setIsLogIn('login');
}


  if(isLogIn==='login'){
return(
 
  
  <>
    
     <LoginForm afterLogin={handleSignIn} />
     
      <button className="sign-in-home" onClick={handleSignIn}>Sign In</button>
      </>
     
      

      
); 
    
}
  else if(isLogIn==='signIn'){

  return(
 
      < div >
        
        <SignInForm  onSignIn={handleSignUp} userId={handleUserId} />
<button className="sign-up-button" onClick={handleSignUpButton}>Sign Up</button>


      </div>
      
    ); 
  }

else if(isLogIn==='buyer'){
  return(
<>
<h1 className="buyerheading">Welcome To Rentify App</h1>

<BuyerHome buyerId={userId} />

        
         
      </>
  )
}
else if(isLogIn==='seller')
{
  return(
  <div >
          
          <DataProvider  userId={userId}>
           <SellerHome   />
          </DataProvider>
         
         
      </div>
  )
}

  }

export default App;
