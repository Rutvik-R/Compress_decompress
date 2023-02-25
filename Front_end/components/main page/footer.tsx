import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="h-full w-full border-2">
            <div className="py-5 h-fit min-h-fit bg-zinc-800 w-full flex mx-0 my-0">
                <div className="w-[80%] h-full mx-[10%]">
                    <div className="h-1/3 my-[1%] flex">
                        <div className="w-1/2 text-white align-middle mx-[10%] text-center flex"><img src='/person.png' className='h-[23px] w-[23px] object-fill mx-[2%]' /> Rutvik Ranpariya</div>
                        <div className="w-1/2 text-white align-middle mx-[10%] text-center flex"><img src='/git.png' className='h-[23px] w-[23px] invert object-fill mx-[2%]' /><a href='https://github.com/Rutvik-R' target='_blank'>Rutvik_R</a></div>
                    </div>
                    <div className="h-1/3 flex ">
                        <div className="w-1/2 text-white align-middle mx-[10%] text-center flex"><img src='/email.webp' className='h-[36px] w-[33px] object-fill mx-[1%]' /><a href='mailto:rutvikranpariya1221@gmail.com' target='_blank'>rutvikranpariya1221@gmail.com</a></div>
                        <div className="w-1/2 text-white align-middle mx-[10%] text-center flex"><img src='/linkedin.png' className='h-[23px] w-[23px] object-fill mx-[2%]' /><a href='https://www.linkedin.com/in/rutvik-ranpariya-702b8b226/' target='_blank'>Rutvik Ranpariya</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
