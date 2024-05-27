
import {React} from 'react';
import AllPost from './AllPost' ;
import DoPost from './DoPost' ;
import  {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './SellerHomec.css';

const SellerHome=( )=>{

 
 //const  {data ,setData}=useContext(DataContext);

  // const doAnyPost=( )=>{
 
  //   setConRendering('doPost');
  // }
  // const goAllPost=()=>{

  //   setConRendering('allPost');
  // }

  // const goSellerHome=(value)=>{
  //   setConRendering(value);

  // }
//  if(conRender==='goHome'){
//   return (

//  <div>
//  <h1> Welcome To the Seller Home </h1>

//  <button  onClick={goAllPost}> See Post

//  </button>
//  <button  onClick={doAnyPost}> Do Post

// </button>

//  </div>

//   );
//   }
// else if(conRender==='allPost')
// {
//   return (

// <div>

// <AllPost  goToHome={goSellerHome}/>

// </div>


//   );
// }

// else if(conRender==='doPost')
// {
//   return (

// <div>

// <DoPost goToHome={goSellerHome} />

// </div>


//   );
// }



return (
<Router>
<header className="header">
		<div className="container-seller">
		
			
			<ul className="menu">
				<li> <Link to="/addpost">Add Post</Link></li>
				<li> <Link to="/seepost">See Post</Link></li>
			
			</ul>
		</div>
		
	</header>
  <div className="container-seller">
    <h5 className="heading">Welcome To The Rentify App</h5>
  </div>
  <Routes>

            <Route path="/addpost" element={<DoPost  />} />
            <Route path="/seepost" element={<AllPost />} />
          </Routes>
  </Router>
);



}
export default SellerHome ;

