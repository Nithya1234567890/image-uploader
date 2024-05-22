import React, { useEffect, useState } from 'react'
import Context from './Context'

const ImageContext = (props) => {
    const [images,setImages]=useState([]);
    const addImage=(image)=>{
      setImages((prev)=>[...prev,{imageURL:image,id:Date.now()}])
      localStorage.setItem('images',JSON.stringify([...images,{imageURL:image,id:Date.now()}]))
    }
    const deleteImage=(id)=>{
      setImages(images.filter(prev=>prev.id!==id));
      localStorage.setItem('images',JSON.stringify(images.filter(prev=>prev.id!==id)))
    }
    useEffect(()=>{
      const storedImages=localStorage.getItem('images');
      {storedImages && setImages(JSON.parse(storedImages))}
    },[])
  return (
    <div>
      <Context.Provider value={{images,setImages,addImage,deleteImage}}>
        {props.children}
      </Context.Provider>
    </div>
  )
}

export default ImageContext
