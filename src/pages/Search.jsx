import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext'
import { BookComponent } from '../components/BookComponent'

export const Search = () => {
  const {handleSearch, FilterSearchBooks} = useContext(BookContext)
  return (
    <div>
        <div>
            <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <input type="text" name="search" id="search" onChange={(e) => handleSearch(e.target.value)} />
        </div>
        <div>
          <BookComponent books={FilterSearchBooks} />
        </div>
    </div>
  )
}
