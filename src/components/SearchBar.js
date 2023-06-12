import React, { useState } from 'react'
import './SearchBar.css';

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit} >
                <label>Enter Search Term</label>
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            </form>
        </div>
    )
}

export default SearchBar