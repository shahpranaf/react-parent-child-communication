import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api';

function App() { 
  const [imageList, setImageList] = useState([]);

  const handleSearch = async (searchTerm) => {
    if(searchTerm.trim() === "") return;

    try {
      const imageList = await searchImages(searchTerm);
      console.log("LIST",imageList)
      setImageList(imageList);
    }
    catch(err) { console.log(err) }
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <ImageList imageList={imageList} />
    </div>
  )
}

export default App