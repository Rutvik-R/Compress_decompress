import React from 'react'
import Link from 'next/link'

export default function Overview() {
    return (
        <div className="h-full min-h-fit w-full border-2 overflow-scroll scrollbar-hide">
            <div className="h-fit w-[90%] mx-[5%] flex p-0">
                <div className="w-2/5 border-black"><a href='https://github.com/Rutvik-R/Compress_decompress' target='__blank'><img src='/file-sruct-backend.png' className='my-[5%] mx-[10%]  h-4/5 w-4/6 object-fill boxShadow'></img></a></div>
                <div className=" border-black h-fit w-1/2">
                    <div className="my-[7%] mx-6 text-5xl text-black font-semibold">About Algorithm</div>
                    <div className="text-xl h-fit mx-6 text-black font-normal">
                        <p><b>Huffman coding</b> is a popular technique used for file compression, especially for text files. It is a lossless compression technique that assigns unique binary codes to each character in the file based on their frequency of appearance.</p>
                        <br></br>
                        <p>The Huffman coding algorithm starts by analyzing the input text file and creating a frequency table of all the characters present in the file. It then builds a binary tree, where each leaf node represents a character and its associated frequency of appearance. The algorithm then combines the two nodes with the lowest frequencies and creates a new node representing their combined frequency. This process is repeated until all nodes are combined into a single root node.</p>
                    </div>
                    <div className='w-[200px] h-fit py-2 mx-5 mt-7 mb-20 border-2 border-zinc-50 flex justify-center items-center text-center text-white bg-sky-900 text-xl font-semibold rounded-md boxShadow'><a href='\about'className='h-full w-full'>Find out more...</a></div>
                </div>
            </div>
        </div>
    )
}
