import React from 'react'
import Button from '../global/Button'
import Navbar from '../global/Navbar'

const User = () => {
  return (
    <div className='flex'>
        <div>
            <Navbar/>
        </div>
        <div className='flex ml-[95rem] mt-16 h-14'>

      <Button title='Add User'/>
      
        </div>
    </div>
  )
}

export default User
