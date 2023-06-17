import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {BookContext} from '../contexts/BookContext'
import { BookComponent } from '../components/BookComponent'
// import { allBooks } from '../data/Data'

export const Home = () => {
    const {handleSelect,state} = useContext(BookContext)
    return (
        <div>
            <div>
                <NavLink to="/search">Search</NavLink>
            </div>
            <div>
                <h1>Currently Reading</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "cr")} />
            </div>
            <div>
                <h1>Want to Read</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "wtr")} />
            </div>
            <div>
                <h1>Read</h1>
                <BookComponent books={state.books.filter((item) => item.shelves === "r")} />
            </div>
        </div>
    )
}
