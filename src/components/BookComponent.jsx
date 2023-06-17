import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import "./BookComponent.css"

export const BookComponent = ({books}) => {
    const {handleSelect} = useContext(BookContext)
    return (
        <div className='book-main-container'>
            {books
                .map((item) => (
                    <div key={item.id} className='book-container'>
                        <div>
                            <img src={item.img} alt={item.name} className='book-img' />
                        </div>
                        <h3 className='book-name'>{item.name}</h3>
                        <p className="book-author">{item.author}</p>
                        <select className='book-shelf'
                            value={item.shelves}
                            onChange={(e) => handleSelect(e.target.value, item.id)}>
                            <option value="cr">Currently Reading</option>
                            <option value="r">Read</option>
                            <option value="wtr">Want to Read</option>
                            <option value="n">None</option>
                        </select>
                    </div>
                ))}
        </div>
    )
}
