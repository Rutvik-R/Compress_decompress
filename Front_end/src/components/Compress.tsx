import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { getFiles, uploadFile } from "../services/FileUploadService_compress";
import FileDownload from "js-file-download"
import "./css/compress.css"
import ParticlesContainer from "./ParticlesBackgroundHome"

const Compress	= () => {
	
	const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [downloadButton, setDownloadButton] = useState(1);
    const [fileName , setFileName] = useState("");
    
    const [responseText , setReasponseText] = useState("");
    
    const [fileInfos, setFileInfos] = useState([]);

    const onDrop = (files) => {
        if (files.length > 0) {
            setSelectedFiles(files);
            setMessage('');
            setReasponseText('Please Upload it ....');
            setDownloadButton(1);
        }
    };

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);
        setReasponseText("Waiting .....")
        setDownloadButton(1);
        uploadFile(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((res) => {
            	
            	setReasponseText(res.data);
            	setDownloadButton(0);
                let last_index = (currentFile.name).lastIndexOf('.');
                setFileName((currentFile.name).substring(0,last_index));
                setProgress(0);
                setMessage("uploaded");
                setCurrentFile(undefined);
            })
            .catch(() => {
                setProgress(0);
                setMessage("Not uploaded");
                setCurrentFile(undefined);
            });

        setSelectedFiles(undefined);
    };

    useEffect(() => {
        getFiles().then((Response) => {
            setFileInfos(Response.data);
            setDownloadButton(1);
        });
    }, []);

    
    const download = (e) => {
    	FileDownload(responseText , fileName  + "-compress.bin");
    }


		return (
			<div className="App">
                <ParticlesContainer />
				<div className="header">Compress</div>

				<div className="footer">
				<div className="file">
					{currentFile && (
                        <div className="progress mb-3">
                            <div
                                className="progress-bar progress-bar-info progress-bar-striped"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progress + "%" }}
                                >
                                {progress}%
                            </div>
                        </div>
                    )}
					<Dropzone onDrop={onDrop} multiple={false}>
                		{({ getRootProps, getInputProps }) => (
                   			<section>
            		            <div {...getRootProps({ className: "dropzone" })}>
            		                <input {...getInputProps()} />
            		                {selectedFiles && selectedFiles[0].name ? (
            		                    <div className="selected-file">
            		                        {selectedFiles && selectedFiles[0].name}
            		                    </div>
            		                ) : (
            		                    "Drag and drop file here, or click to select file"
            		                )}
            		            </div>
            		            
            		        </section>
            		    )}
            		</Dropzone>
			    </div>
				<div className='Upload'>
				    <aside className="selected-file-wrapper">
                        <button
                            className="btn btn-success"
                            disabled={!selectedFiles}
                            onClick={upload}
                        >
                            Upload
                        </button>
                        <div className="alert alert-light" role="alert">
                		  {message}
            		    </div>
                    </aside>
				</div>
				<button disabled={downloadButton} onClick={(e) => {download(e)}} > Download </button>
				<div className="file-data-res">
                    {!downloadButton?`Compressed File length : ` + responseText.length: responseText}
                </div>
			</div>
		</div>

		);
}

export default Compress