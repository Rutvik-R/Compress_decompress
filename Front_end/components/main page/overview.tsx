import React from 'react'
import Link from 'next/link'

export default function Overview() {
    return (
        <div className="h-full min-h-fit w-full border-2">
            <div className="h-fit w-[90%] mx-[5%] flex p-0">
                <div className="w-2/5 border-black"><img src='/file-sruct-backend.png' className='my-[5%] mx-[10%]  h-4/5 w-4/6 object-fill boxShadow'></img></div>
                <div className=" border-black h-fit w-1/2">
                    <div className="my-[7%] mx-6 text-5xl text-black font-semibold">About Algorithm</div>
                    <div className="text-xl h-fit mx-6 text-black font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</div>
                    <div className='w-[200px] h-fit py-2 mx-5 mt-7 mb-20 border-2 border-zinc-50 flex justify-center items-center text-center text-white bg-sky-900 text-xl font-semibold rounded-md boxShadow'><a href='\about'className='h-full w-full'>Find out more...</a></div>
                </div>
            </div>
        </div>
    )
}
