import React, { useState } from 'react';



function Product(props) {
  const [text, setText] = useState('My first React JS application');

 const handleEvent=(event)=>{
   console.log(text);
    setText(event.target.value);

 }


  return (
    <>
      <h1>
        {props.title} {text}
      </h1>
      <textarea  onChange={handleEvent} value={text}></textarea>
    </>
  );
}

export default Product;
