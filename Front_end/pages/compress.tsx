import React, { useState } from 'react'
import FileSelect from '../components/compress/fileSelect';
import WriteYourOwn from '../components/compress/writeYourOwn';
import { Button } from '@nextui-org/react';
export default function Compress() {

    const [choice, setChoice] = useState(true);


    
    return (
        <div className="h-fit min-h-screen w-fit min-w-full gradientCompress bg-repeat">
            <div className='h-20 top-0 w-full p-3 flex bg-transparent justify-between items-center pr-16'>
                <div className="h-full w-[300px]"><img src='/png/logo-white.png' className='object-cover h-full w-full mix-blend-screen'></img></div>
                <ul className='flex space-x-4 text-white text-md'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/compress'>Compress</a> </li>
                    <li><a href='/decompress'>Decompress</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
            <div className="w-full  h-fit">
                <div className="w-full text-center text-5xl font-semibold text-white">Compress</div>
                <Button bordered onClick={() => { setChoice(!choice) }} className='w-52 gradientCompressButton h-10 ml-10' >{choice ? 'Write your own' : 'Upload text file'}</Button>
            </div>
            <div className="h-fit min-h-full w-fit min-w-full">
            {
                choice ? <FileSelect /> : <WriteYourOwn/>
            }
            </div>
        </div>
    )
}
