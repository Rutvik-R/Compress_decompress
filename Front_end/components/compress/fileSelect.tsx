import React, { useState, useEffect, Component } from 'react'
import Dropzone from 'react-dropzone'
import { Popover, Button, Text, Table, Loading } from "@nextui-org/react";
import { upload } from './upload';
import fileDownload from 'js-file-download';

type node = {
    key: number,
    name: string,
    size_main: number,
    status: string,
    size_compressed: number,
    type: string,
    main_file: File
    compress_data: string
}

const FileSelect = () => {


    let [total, setTotal] = useState(1)
    const [list, setList] = useState([] as any[]);
    const [done_file_name, setDone_file_name] = useState(null);


    const onDrop = (files: never[] | any) => {
        let newList: any[] = [];

        for (let i = 0; i < files.length; i++) {
            if (files[i].type != 'text/plain') {
                alert(`${files[i].name} please drag only text file`);
                console.log(files[i].name)
                continue;
            }
            let x = {
                key: total,
                name: files[i].name,
                size_main: files[i].size,
                status: 0,
                type: files[i].type,
                main_file: files[i],
                compress_data: null,
                size_compressed: null,
            }
            newList = [...newList, x];
            total++;
        }

        setTotal(total);
        setList(list.concat(newList));
    }

    const sleep = (ms: number | undefined) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const onUpload = async (key: any) => {

        let obj = list[key - 1];
        let res = upload(obj.main_file);
        console.log(res);
        obj.status = 2;

        let newList1: React.SetStateAction<any[]> = [...list];
        newList1[key - 1] = obj;
        setList(newList1);

        // console.log(res);
        obj.compress_data = (await res).data.data;
        obj.size_compressed = obj.compress_data.length;
        obj.status = 1;
        console.log((await res).data.data.length);

        let newList: React.SetStateAction<any[]> = [...list];
        newList[key - 1] = obj;

        setDone_file_name(obj.name);
        await sleep(2500).then(() => setDone_file_name(null))
        setList(newList);
    }

    const onDownload = async (key: any) => {
        let last_index = (list[key - 1].name).lastIndexOf('.');
        fileDownload(list[key - 1].compress_data, list[key - 1].name.substring(0, last_index) + "-compress.bin");
    }

    return (
        <div className={"w-fit min-h-fit min-w-[85%] ml-[7.5%] h-fit mt-[2%]"}>
            <div className={"absolute top-[12px] h-[40px] w-[60%] left-[18%] bg-lime-200 opacity-60  rounded-lg text-center boxShadow font-semibold animate-bounce " + (done_file_name == null ? "hidden" : "")} >
                {done_file_name} is successfully compressed
            </div>
            <div className="">
                <Dropzone multiple={true} onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <section className='border-2 w-full h-20 gradientDropzone'>
                            <div {...getRootProps({ className: "text-center mt-5 w-full h-full" })}>
                                <input {...getInputProps()} className='w-full h-full border-2' />

                                Drag and drop file here, or click to select file

                            </div>

                        </section>
                    )}
                </Dropzone>
            </div>
            <div className="min-h-fit h-[82%] w-fit min-w-full">
                <Table

                    striped
                    bordered
                    shadow={true}
                    color="secondary"

                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="single"
                >
                    <Table.Header>
                        <Table.Column>STATUS</Table.Column>
                        <Table.Column>FILE NAME</Table.Column>
                        <Table.Column>UPLOAD</Table.Column>
                        <Table.Column>DOWNLOAD</Table.Column>
                        <Table.Column>SEE MORE</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {list.map(obj => (
                            <Table.Row key={obj.key}>
                                <Table.Cell>
                                    <div className="">{
                                        !obj.status ? <Loading color="currentColor" type='points-opacity' size="sm" className={"w-[40px] " + (obj.status != 0 ? "hidden" : "")} />
                                            : <img src='/true.png' className={"object-cover w-[40px] pngShadow " + (obj.status != 1 ? "hidden" : "")}></img>
                                    }
                                    </div></Table.Cell>
                                <Table.Cell ><div className="text-lg w-[200px] overflow-x-scroll scrollbar-hide">{obj.name}</div> </Table.Cell>
                                <Table.Cell ><Button className='bg-orange-200 w-[200px] h-[40px] border-2 rounded-md hover:bg-orange-400 hover:boxShadow' disabled={obj.status != 0} onClick={() => onUpload(obj.key)}>upload</Button></Table.Cell>
                                <Table.Cell ><Button className='bg-orange-200 w-[200px] h-[40px] border-2 rounded-md hover:bg-orange-400 hover:boxShadow' disabled={obj.status != 1} onClick={() => onDownload(obj.key)}>download</Button></Table.Cell>
                                <Table.Cell >
                                    <Popover >
                                        <Popover.Trigger>
                                            <Button className='bg-orange-200 w-[200px] h-[40px] border-2 rounded-md hover:bg-orange-400 hover:boxShadow'>see more</Button>
                                        </Popover.Trigger>
                                        <Popover.Content>
                                            <Text className='rounded-md'>
                                                Name : {obj.name} <hr></hr>
                                                Size of file : {obj.size_main} <hr />
                                                file type : {obj.type} <hr />
                                                {obj.status == 1 ?
                                                    `Compress file size : ${obj.size_compressed}`
                                                    : ""}
                                                {obj.status == 1 ? <hr /> : ""}
                                                {obj.status == 1 ?
                                                    `Percentage of compress : ${((1 - obj.size_compressed / obj.size_main) * 100).toFixed(2)}%`
                                                    : ""}
                                            </Text>
                                        </Popover.Content>
                                    </Popover>
                                </Table.Cell>
                            </Table.Row>


                        ))}
                    </Table.Body >
                    <Table.Pagination
                        shadow
                        noMargin
                        align="center"
                        rowsPerPage={4}
                        onPageChange={(page) => console.log({ page })}
                    />
                </Table>
            </div>
        </div>
    )
}


export default FileSelect;