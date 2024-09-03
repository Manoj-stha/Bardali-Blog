import React from 'react'
import Navbar from '../global/Navbar'
import Button from '../global/Button'
import Topbar from '../global/Topbar'
import { GoSearch } from "react-icons/go";
import { GoFilter } from "react-icons/go";
import { IoAdd } from "react-icons/io5";


const Blog = () => {
  return (
    <div className='flex'>
        <div>
        <Navbar />
      </div>

      <div className="border rounded-xl w-full shadow-md">

      <div className=" w-full p-10 " id="bar">
          <Topbar className="w-full" />
        </div>

        <div className="flex flex-col gap-2 p-10">
          <header className="text-3xl font-bold">Blog management</header>
          <p className="text-sm">
            Manage your team member's Blog and their account permission here.
          </p>
        </div>
        <div className="flex pl-10 space-x-[45rem] h-[50px]">
          <header className="text-2xl font-bold w-[200px]">All Blogs </header>
          <div className="flex gap-5">
            <div className="flex border rounded-lg w-[20rem]  ">
              <GoSearch className="text-2xl m-3 text-gray-500 " />
              <input type="text" placeholder="Search" className="w-[20rem]" />
            </div>

            <div>
              <button class="flex items-center bg-white border border-black/10 rounded-md shadow-sm shadow-black/5 box-border text-black/85 cursor-pointer inline-flex font-sans font-semibold text-[16px] leading-[1.25] justify-center m-0 min-h-[3rem] px-[calc(1.5rem-1px)] py-[calc(.875rem-1px)] relative no-underline transition-all duration-250 select-none align-baseline w-auto hover:border-black/15 hover:shadow-lg hover:shadow-black/10 hover:text-black/65 hover:-translate-y-px focus:border-black/15 focus:shadow-lg focus:shadow-black/10 focus:text-black/65 active:bg-gray-100 active:border-black/15 active:shadow active:shadow-black/10 active:text-black/65 active:translate-y-0">
                <div className="flex gap-2">
                  <GoFilter className="text-xl" />
                  <h1>filter </h1>
                </div>
              </button>
            </div>

            <div>
              <button class="bg-black border-2 border-gray-800 rounded-[10px] box-border text-white cursor-pointer inline-block font-sans font-semibold text-[16px] leading-normal m-0 min-h-[50px] outline-none px-4 py-1 text-center no-underline transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] select-none transform-gpu disabled:pointer-events-none hover:shadow-lg hover:shadow-black/25 hover:-translate-y-0.5 active:shadow-none active:translate-y-0 w-[150px]">
                <div className="flex">
                  <IoAdd className="text-2xl" />
                  <h1>Add Blog </h1>
                </div>
              </button>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Blog
