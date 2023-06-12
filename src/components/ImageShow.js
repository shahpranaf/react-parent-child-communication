import React from 'react'

function ImageShow({image}) {
    const {urls} = image;
  return (
    <div>
        <img src={urls?.thumb} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow