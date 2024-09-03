import React from 'react'
import "./Topbar.css"
import { BiSearchAlt } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
const Topbar = () => {
  return (
    <div className='flex space-x-[700px] h-[2rem]' id='topbar'>


        <div className='flex h-[51px]' id='search-cover'>
      <div id='searchbar' className='' >
        <input type="text" placeholder='Search for Users or Blogs' className='border-none' />
      </div>

      
      <div className='w-[70px] h-[50px] border-collapse cursor-pointer' id='search-icon'>
        <BiSearchAlt className='text-3xl ml-5 mt-2  text-white ' />
      </div>
        </div>


        <div>
           <div>
           <button class="bg-black border-2 border-black rounded-[10px] box-border text-white cursor-pointer inline-block font-sans font-semibold text-[16px] leading-normal m-0 min-h-[50px] outline-none px-2 py-3 text-center no-underline transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] select-none transform-gpu disabled:pointer-events-none hover:shadow-lg hover:shadow-black/25 hover:-translate-y-0.5 active:shadow-none active:translate-y-0 w-[150px]">
           <div className='flex justify-center'>

           <MdAccountCircle className='text-3xl'/>
           <h1 className='pl-3 mt-1'>Account </h1>
           </div>
           </button>

           </div>
        </div>
    </div>
  )
}

export default Topbar
