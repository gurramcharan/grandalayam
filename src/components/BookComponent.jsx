import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export const BookComponent = ({books}) => {
    const {handleSelect} = useContext(BookContext)
    return (
        <div>
            {books
                .map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <select
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
