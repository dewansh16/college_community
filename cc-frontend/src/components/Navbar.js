import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-20 backdrop-blur-sm fixed z-10 w-full bg-nav ">
      <div className="md:w-4/5  mx-auto items-center justify-between px-12 flex h-full">
          {/* Logo */}
          <div className="flex justify-between bg-black p-3 rounded-xl">
            <Link className="text-2xl text-white font-bold" to="/">CC</Link>
          </div>
          {/* Search Field */}
          <div className="md:ml-16 hidden md:block max-w-xs">
            <div className="p-3 mt-1 relative">
              <div className="absolute pl-6 inset-x-0 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 mt-2 text-gray-500 " />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="px-2 block w-full py-1 pl-10 border rounded bg-gray-50 text-base  focus:ring-0"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center justify-end space-x-3">
            <PlusCircleIcon className="navIcons" />
            <MenuIcon className="w-6 md:hidden" />
            <button className='btn-cyan'>
              Login
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar
