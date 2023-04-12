import React from 'react'

export default function Main_decompress_info() {
    return (
        <div className="h-full min-h-fit w-full border-2 overflow-scroll">
            <div className="h-fit w-[95%] mx-[5%] flex p-0">
                <div className=" border-black w-fit h-fit min-w-[50%]">
                    <div className="my-[7%] mx-6 text-5xl text-black font-semibold">Decompression</div>
                    <div className="text-xl mx-6 text-black font-normal">
                        <p>Text decompression is an important tool for managing and accessing compressed text files. It is required to access the contents of a compressed file, recover data from corrupted files, and restore archived data for analysis or database management.</p>
                    </div>
                </div>
                <div className="h-full w-fit min-w-[50%] border-black"><img src='/decompress_png.png' className='my-[5%] mx-[10%]  h-4/5 w-4/6 object-fill'></img></div>
            </div>
        </div>
    )
}
