import React from 'react'

export default function Main_compress_info() {
    return (
        <div className="h-fit w-full border-2 overflow-scroll scrollbar-hide">
            <div className="h-full w-[90%] mx-[5%] flex p-0">
                <div className="h-full w-1/2 "><img src='/compress_png.png' className='my-[5%] mx-[10%]  h-4/5 w-4/6 object-fill'></img></div>
                <div className=" border-black h-fit w-1/2">
                    <div className="my-[7%] mx-6 text-5xl text-black font-semibold">Compression</div>
                    <div className="text-xl mx-6 text-black font-normal">
                        <p>Text compression is a useful tool for managing and sharing data efficiently. It can be used for file transfer, data storage, email attachments, backup and restore, and data analysis, among other applications.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
