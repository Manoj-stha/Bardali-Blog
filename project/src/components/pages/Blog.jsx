import React from 'react'
import Navbar from '../global/Navbar'
import Button from '../global/Button'

const Blog = () => {
  return (
    <div className='flex'>
        <div>
            <Navbar/>
        </div>
        <div>

        <div className='flex ml-[95rem] mt-16 h-14'>
        <Button title='Add Blog'/>    
        </div>      
        </div>
    </div>
  )
}

export default Blog
