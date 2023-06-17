import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext'
import { BookComponent } from '../components/BookComponent'

import "./Home-search.css"

export const Search = () => {
  const {handleSearch, FilterSearchBooks} = useContext(BookContext)
  return (
    <div>
        <div className='link-container'>
            <NavLink to="/" className="link">Home</NavLink>
        </div>
        <div className='search-input-container search-desc'>
          <p>Search all the Books here</p>
        </div>
        <div className='search-input-container'>
          <input className='search-input' type="text" name="search" id="search" onChange={(e) => handleSearch(e.target.value)} placeholder='search items' />
        </div>
        <div>
          <BookComponent books={FilterSearchBooks} />
        </div>
    </div>
  )
}
