import React from 'react'
import ImageList from '../ImageList/ImageList'

const Gallery = () => {
  return (
    <div className="flex text-center mt-4 ">
        <h1 className="text-3xl font-bold ml-4">Gallery</h1>
        <ImageList/>
    </div>
  )
}

export default Gallery