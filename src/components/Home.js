import {React} from 'react';
import  {Router,Route,Routes} from './react-router'
import SignInForm from './SignInForm' ;
import LoginForm from './LoginForm' ;
import './Homec.css' ;



const Home=()=>{


return (

<div class="main_container">

<h1>Welcome to the Rentify App</h1>

<Router>

<h1 class="heading">Please Create Account</h1>
<button class="signup_button">
    <Link to="/signIn">Sign In</Link>
</button>
<h1 class="heading">If Already Account Exist</h1>

<button class="signup_button">
    <Link to="/signUp">Sign UP</Link>
</button>


<Routes>

    <Route path="/signIn"  element={<LoginForm />}/>
   <Route path="/signUp"  element={<SignInForm /> }/>
    
</Routes>

</Router>



</div>


    )



}
export default Home;