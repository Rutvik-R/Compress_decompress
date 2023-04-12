import React from 'react'
import Navbar from './navbar'
export default function Main() {
    return (
        <div className="h-fit min-h-screen w-fit min-w-full top-0 overflow-scroll gradientMain">
            {/* <Navbar /> */}
            <div className='h-20 min-h-fit top-0 min-w-full w-fit p-[10px] flex bg-transparent justify-between items-center pr-16'>
                <div className="h-full w-[300px]"><img src='/png/logo-white.png' className='object-cover h-full w-full mix-blend-screen'></img></div>
                <ul className='flex space-x-4 text-white text-md'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/compress'>Compress</a> </li>
                    <li><a href='/decompress'>Decompress</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
            <div className="flex h-fit w-full min-h-[80px] align-middle">
                <div className="h-full min-h-fit px-[40px] w-[49%] mx-[10px] align-middle my-10 justify-items-center left-0 items-center">
                    <div className="my-[7%] text-5xl text-white font-semibold">Small Files, Better Space</div>
                    <div className="text-xl  text-white font-normal"> Compressing a text file is a common practice used to reduce the file size and make it easier to transfer or store. Text files are typically smaller in size compared to other file formats such as images or videos, but they can still take up significant storage space when dealing with large amounts of data.</div>
                    <div className="space-x-5 my-10 flex">
                        <a href='\compress' className='w-fit min-w-[45%] border-2 h-12 border-zinc-50 flex items-center justify-center text-blue-900 bg-white text-xl font-semibold rounded-md'>Compress</a>
                        <a href='\decompress' className='w-fit min-w-[45%] border-2 border-sky-900 text-white h-12 flex items-center justify-center text-xl font-semibold bg-blue-900 rounded-md'>Decompress</a>
                    </div>
                </div>
                <div className="w-[50%] "><a href='https://github.com/Rutvik-R/Compress_decompress' target='__blank'><img src='/code.png' className='object-none object-left-top h-[110%] w-[500%] my-[6%] boxShadow' ></img></a></div>
            </div>
            {/* <div className="h-20 w-full absolute bottom-0 items-center align-middle"><img src='/down1.png' className='h-4/5 w-full object-contain animate-bounce'></img></div> */}
        </div>
    )
}
