import React from 'react'
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='border-3 border-black w-52 h-screen bg-gray-700 text-white ' id='navbar'>
      <div className='text-4xl flex items-center justify-center pt-10 cursor-pointer'>
        <header>Logo</header>
      </div>
      <div className='flex flex-col text-xl gap-11 text-center pt-[3rem]'>


<ul  id='btns'>
<Link to ='/'>
<li className='font-bold w-52 h-12 p-2 '><FaHome className='text-3xl ml-7 absolute'/>Home</li>
</Link>

<Link to = '/user'>
<li className='font-bold  w-52 h-12 p-2'><FaUser className='text-2xl ml-9 absolute'/>User</li>
</Link>
<Link to ='/blog'>
<li className='font-bold  w-52 h-12 p-2 '><FaBlog className='text-2xl ml-9 absolute'/>Blog</li>
</Link>
</ul>


  </div>


  <div className='text-2xl font-bold flex flex-col text-center pt-[33rem]'>
  <FaCircleUser className='text-4xl ml-[5rem] mb-2'/>
  <Link to ='/login'>
  <button className='hover:text-gray-300'> Sign In</button>
  </Link>
  </div>
    </div>
  )
}

export default Navbar
