import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div>
            <NavLink to="/search">Search</NavLink>
        </div>
    </div>
  )
}
