import  { Component } from "react" ;


export default class NewsItems extends Component{
    render(){
let {title,description,imageUrl}=this.props ;
    

        return(
        <div>
        <h1>{title}</h1>
        <p>{description}</p>
       <img   src={imageUrl} alt="imageurl1"/>
        </div>
        )  
    }
}