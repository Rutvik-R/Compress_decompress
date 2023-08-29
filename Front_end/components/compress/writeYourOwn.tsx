import React, { useState } from 'react'
import { Button, FormElement, Textarea , Text } from '@nextui-org/react';
import { upload_text } from './upload';
import fileDownload from 'js-file-download';

export default function WriteYourOwn() {

    const [text , setText] = useState(''); 
    const [showSize , setShowSize] = useState(0);
    const [showCompressSize , setCompressShowSize] = useState(0);
    const [showTime , setShowTime] = useState(0);
    const [Compressed_data , setcompressed_data] = useState("");
    const [done_file_name , setDone_file_name] = useState("");
    const [time , setTime] = useState(-1);

    const sleep = (ms: number | undefined) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<FormElement>) => {
        setText(e.target.value);
    }

    const onUpload = async () => {
        const res = await upload_text(text);
        setcompressed_data(res.data);    
        setDone_file_name("Your text");
        setTime(res.time);
        await sleep(5000).then(() => setDone_file_name(""))
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
    
    const onShowTime = async () => {
        if(showTime) setShowTime(0);
        else{
            setShowTime(1);
            await sleep(5000);
            setShowTime(0);
        }
    }

    return (
        <div className="min-w-fit w-[90%] min-h-fit ml-[5%] h-[70%] flex mt-[2%]">
            {done_file_name ? <div className="absolute p-2 bottom-[20px]  h-[120px] min-w-[10%] w-fit opacity-70 hover:opacity-100 right-[5%] bg-green-100  rounded-lg text-center boxShadow font-semibold animate-bounce z-50" >
                <Text className='rounded-md items-center grid-cols-3'>
                        {done_file_name} is successfully compressed <hr></hr>
                        Time Taken : {time.toFixed(2)} milliseconds <hr />
                        <Button className='bg-orange-200 border-2 mx-auto mt-4 rounded-md hover:bg-orange-400 hover:boxShadow' onClick={onDownload}>download</Button>
                </Text>
            
            </div> : ""
            }
            <div className="w-[70%] h-full min-h-fit">
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
            <div className="w-[30%] min-w-fit ml-[9%] h-full min-h-fit ">
                <Button size={'lg'} className='mt-[2%]' color="primary" onPress={onShowSize} shadow>{showSize?text.length : "Text size"}</Button>
                <Button size={'lg'} className='mt-[15%]' color="secondary" onPress={onUpload} shadow>Upload</Button>
                <Button size={'lg'} className='mt-[15%]' color="success" onPress={onDownload} disabled={!Compressed_data} shadow>Download</Button>
                <Button size={'lg'} className='mt-[15%]' color="gradient" onPress={onShowCompressSize} disabled={Compressed_data == ""} shadow>{showCompressSize?Compressed_data.length : "Compress text size"}</Button>
                <Button size={'lg'} className='mt-[15%]' color="primary" onPress={onShowTime} disabled={time == -1} shadow>{showTime?`${time.toFixed(2)} milliseconds` : "Compress time"}</Button>
            </div>
        </div>
    )
}
