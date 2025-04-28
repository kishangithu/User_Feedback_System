import React from 'react'

export const Navbar = ({currentPage}) => {
  return (
    <div className="bg-gray-800 text-white py-4 shadow-md">
        <h2 className='text-center text-3xl font-bold'>
            User Feedback System
        </h2>
        <nav className='flex justify-center mt-4'>
            <ul className='flex gap-8'>
                <li className={`${currentPage==='Home'?"font-bold text-gray-400":""} hover:cursor-pointer hover:text-blue-300 transition duration-200`}><a href="/">Feedback Form</a></li>
                <li className={`${currentPage==='Dashboard'?"font-bold text-gray-400":""} hover:cursor-pointer hover:text-blue-300 transition duration-200`}><a href="/dashboard">Dashboard</a></li>
            </ul>
        </nav>
    </div>
  )
}