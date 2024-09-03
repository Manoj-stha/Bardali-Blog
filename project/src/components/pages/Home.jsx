import React from 'react'
import Navbar from '../global/Navbar'
import './Home.css'
import { LuUserPlus } from "react-icons/lu";
import { LiaBlogSolid } from "react-icons/lia";
import Topbar from '../global/Topbar';

const Home = () => {
  return (
    <div className='flex '>
        <div>

      <Navbar/>
        </div>

<div className='border rounded-xl w-full shadow-md'>

        <div className=' w-full p-10 ' id='bar'>
          <Topbar/>
        </div>

        <div className='flex space-x-64'>

        <div className='border-2 border-black p-8 mt-48 ml-52 rounded-xl shadow-xl w-96 h-56 text-end' id='users'>
            <LuUserPlus id='box_icon' className='absolute mt-10'/>
            <header className='text-2xl font-bold'>
                Total Number of Users
            </header>
        </div>

        <div className='border-2 border-black p-8 mt-48 ml-52 rounded-xl shadow-xl w-96 h-56 text-end' id='blogs'>
          <LiaBlogSolid id='box_icon' className='absolute mt-10'/>
            <header className='text-2xl font-bold'>
                Total Number of Blogs
            </header>
        </div>
      
      
        </div>
</div>
    </div>
  )
}

export default Home
