import React, { useState } from 'react'
import { Button, FormElement, Textarea } from '@nextui-org/react';
import { upload_text } from './upload';
import fileDownload from 'js-file-download';

export default function WriteYourOwn() {

    const [text , setText] = useState(''); 
    const [showSize , setShowSize] = useState(0);
    const [showCompressSize , setCompressShowSize] = useState(0);
    const [Compressed_data , setcompressed_data] = useState("");
    const sleep = (ms: number | undefined) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<FormElement>) => {
        setText(e.target.value);
    }


    const onUpload = async () => {
        const res = await upload_text(text);
        setcompressed_data(res.data);    
        console.log(res.data)
    }

    const onDownload = () => {
        fileDownload(Compressed_data , 'text-compress.bin')
    }

    const onShowSize = async () => {
        if(showSize) setShowSize(0);
        else{
            setShowSize(1);
            await sleep(5000);
            setShowSize(0);
        }
    }

    const onShowCompressSize = async () => {
        if(showCompressSize) setShowSize(0);
        else{
            setCompressShowSize(1);
            await sleep(5000);
            setCompressShowSize(0);
        }
    }

    return (
        <div className="min-w-fit w-[90%] min-h-fit h-[70%] flex mt-[2%]">
            <div className="w-[30%] min-w-fit ml-[9%] h-full min-h-fit ">
                <Button size={'lg'} className='mt-[15%]' color="primary" onPress={onShowSize} shadow>{showSize?text.length : "Text size"}</Button>
                <Button size={'lg'} className='mt-[15%]' color="secondary" onPress={onUpload} shadow>Upload</Button>
                <Button size={'lg'} className='mt-[15%]' color="success" onPress={onDownload} disabled={!Compressed_data} shadow>Download</Button>
                <Button size={'lg'} className='mt-[15%]' color="gradient" onPress={onShowCompressSize} disabled={Compressed_data == ""} shadow>{showCompressSize?Compressed_data.length : "Compress text size"}</Button>
            </div>
            <div className="w-[70%] mr-[5%] h-full min-h-fit">
                <Textarea
                    rows={22}
                    cols={222}
                    status="secondary"
                    helperColor="success"
                    autoComplete='on'
                    placeholder='Write  hear...'
                    className='h-full w-full resize-none rounded-lg shadow caret-black'
                    onChange={e => onChangeText(e)}
                ></Textarea>
            </div>
        </div>
    )
}
