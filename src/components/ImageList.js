import React from 'react'
import ImageShow from './ImageShow'

import './ImageList.css';

function ImageList({imageList}) {
  return (
    <div className='image-list'>
       { imageList && imageList.map(image => <ImageShow key={image?.id} image={image} />) }
    </div>
  )
}

export default ImageList