import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TXT", "BIN", "GIF"];

function DragDrop() {
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};

	upload(file )

	return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}  onDrop={(e)=> {console.log(e)}} />
	// <button >he,ddm,</button>
	);
}

export default DragDrop;