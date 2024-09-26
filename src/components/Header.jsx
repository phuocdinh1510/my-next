import React from 'react'
import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
          <div className="flex  gap-4">
              <MenuItem title="home" address="/"  Icon={ FaHome}/>
              <MenuItem title="about" address="/about" Icon={ BsFillExclamationCircleFill} />
          </div>
          <div className="">
              <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>Next</span>
              <span className='text-xl hidden sm:inline flex '>Clone</span>
          </div>
    </div>
  )
}
