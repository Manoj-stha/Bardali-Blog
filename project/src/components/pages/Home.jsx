import React from 'react'
import Navbar from '../global/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className='flex'>
        <div>

      <Navbar/>
        </div>
        <div className='flex space-x-64'>

        <div className='border-2 border-black p-16 mt-48 ml-52 rounded-xl shadow-xl w-96 h-56 text-center' id='box'>
            <header className='text-xl font-bold'>
                Total Number of Users
            </header>
        </div>

        <div className='border-2 border-black p-16 mt-48 ml-52 rounded-xl shadow-xl w-96 h-56 text-center' id='box'>
            <header className='text-xl font-bold'>
                Total Number of Blogs
            </header>
        </div>
      
      
        </div>
    </div>
  )
}

export default Home
