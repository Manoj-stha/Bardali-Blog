import React from 'react'
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { TbHome } from "react-icons/tb";;
import { FiUser } from "react-icons/fi";
import { TbBrandBlogger } from "react-icons/tb";
import './Navbar.css'
import { LuSettings } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import img1 from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='border-3 border-black w-52 h-screen bg-gray-700 text-gray-700 ' id='navbar'>

      <Link to ='/'>
      <div className='text-4xl flex items-center justify-center pt-[20px] cursor-pointer'>
         <img src={img1} alt="" className='w-[10rem]'/>
      </div>
      </Link>
      <div className='flex flex-col text-xl gap-11 text-center pt-[3rem]'>


<ul  id='btns'>
<Link to ='/'>
<li className='font-bold w-52 h-12 p-2 '><TbHome className='text-2xl ml-9 mt-[2px] absolute'/>Home</li>
</Link>

<Link to = '/user'>
<li className='font-bold  w-52 h-12 p-2'><FiUser className='text-2xl ml-9 absolute'/>User</li>
</Link>
<Link to ='/blog'>
<li className='font-bold  w-52 h-12 p-2 '><TbBrandBlogger className='text-2xl ml-9 absolute'/>Blog</li>
</Link>
</ul>


  </div>


    <ul className='text-lg font-bold flex flex-col text-center pt-[33rem] gap-2 cursor-pointer'>

    <li className='flex gap-4 items-center pl-5  h-8' id='btn'>
    <LuSettings className='text-2xl'/>
    <h4>Settings</h4>
    </li>

    <li className='flex gap-4 items-center pl-5 h-8' id='btn'>
      <IoDocumentTextOutline className='text-2xl'/>
      <h4>Documentation</h4>
    </li>
    </ul>

  {/* <FaCircleUser className='text-4xl ml-[5rem] mb-2'/>
  <Link to ='/login'>
  <button className='hover:text-gray-300'> Sign In</button>
  </Link> */}
    </div>
  )
}

export default Navbar
