import React from 'react'
import { Button, Textarea } from '@nextui-org/react';

export default function WriteYourOwn() {

    return (
        <div className="min-w-fit w-[90%] min-h-fit ml-[5%] h-[70%] flex mt-[2%]">
            <div className="w-[70%] h-full min-h-fit">
                <Textarea
                    rows={22}
                    cols={222}
                    status="secondary"
                    helperColor="success"
                    autoComplete='on'
                    placeholder='Write  hear...'
                    className='h-full w-full resize-none rounded-lg shadow caret-black'
                ></Textarea>
            </div>
            <div className="w-[30%] min-w-fit ml-[9%] h-full min-h-fit ">
                <Button size={'lg'} className='mt-[15%]' color="primary" shadow>Text size</Button>
                <Button size={'lg'} className='mt-[15%]' color="secondary" shadow>Upload</Button>
                <Button size={'lg'} className='mt-[15%]' color="success" shadow>Download</Button>
                <Button size={'lg'} className='mt-[15%]' color="gradient" shadow>Compress file size</Button>
            </div>
        </div>
    )
}
