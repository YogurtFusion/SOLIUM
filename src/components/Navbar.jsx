import React from 'react'
import profileIcon from '../assets/icons/Icon.svg'

function Navbar() {
    return (
        <nav className='flex justify-between items-center bg-[#1A1A1A] text-[#F5F5F5]  ' >
            <div className='logo px-8 mx-8 my-2'>
                <img className='w-24  rounded-full' src="https://picsum.photos/500" alt="logo" />
            </div>
            <ul className=' text-[16px]  flex justify-between items-center gap-8 mr-12' >
                <li>Home</li>
                <li>Library</li>
                <li>Genre</li>
                <li><img className='w-10 m-auto' src={profileIcon} alt="" /></li>
            </ul>
        </nav>
    )
}

export default Navbar
