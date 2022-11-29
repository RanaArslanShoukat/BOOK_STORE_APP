import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container d-flex justify-content-center mt-5 pt-5'>
        <NavLink className='btn btn-dark' to={"/books"} style={{fontSize:"40px"}}>Check All Books</NavLink>
    </div>
  )
}

export default Home
