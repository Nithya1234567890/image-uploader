import React, { useContext, useState } from 'react'
import Context from '../context/Context';

const Input = () => {
  const [newImage,setNewImage]=useState(null);
  const {images,addImage}=useContext(Context);
  const handleOnChange=(e)=>{
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.onload=(event)=>{
      setNewImage(event.target.result);
    }
    reader.readAsDataURL(file);
  }
  const upload=()=>{
    console.log('upload');
    if(newImage){
      addImage(newImage);
      setNewImage(null);
      console.log(newImage);
    }
    else{
      console.log("couldn't upload file");
      alert("Please Choose Image");
    }
  }
  return (
    <div className='text-center'>
      <input className='m-2' type="file" onChange={handleOnChange}/>
      <button className='m-3 border-2 p-3 font-bold bg-sky-500 text-white rounded-md hover:text-sky-500 hover:bg-white hover:border-2 hover:border-sky-500' onClick={upload}>Upload</button>
    </div>
  )
}

export default Input