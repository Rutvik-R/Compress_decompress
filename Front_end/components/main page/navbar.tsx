import React from 'react'

export default function Navbar() {
  return (
    <div className='h-20 top-0 w-full p-3 flex bg-transparent justify-between items-center pr-16'>
      <div className="h-full w-[300px]"><img src='/png/logo-white.png' className='object-cover h-full w-full mix-blend-screen'></img></div>
      <ul className='flex space-x-4 text-white text-md'>
        	<li><a href='/'>Home</a></li>
            <li><a href='/compress'>Compress</a> </li>
            <li><a href='/decompress'>Decompress</a></li>
            <li><a href='/about'>About</a></li>
      </ul>
    </div>
  )
}
