import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {BookContext} from '../contexts/BookContext'
import { BookComponent } from '../components/BookComponent'
import "./Home-search.css"

export const Home = () => {
    const {handleSelect,state} = useContext(BookContext)
    return (
        <div>
            <div className='link-container'>
                <NavLink to="/search" className="link">Search</NavLink>
            </div>
            <div>
                <h1 className='shelf-heading'>Currently Reading</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "cr")} />
            </div>
            <hr />
            <div>
                <h1  className='shelf-heading'>Want to Read</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "wtr")} />
            </div>
            <hr />
            <div>
                <h1  className='shelf-heading'>Read</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "r")} />
            </div>
        </div>
    )
}
