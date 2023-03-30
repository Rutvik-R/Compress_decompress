import axios from "axios";

export const upload_file = async (file: any) => {

    let formData = new FormData();
    formData.append("file" , file);

    let res =  axios.post('/api/decompress/file' , formData , {
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
    })
    return (await res).data;
}

export const upload_text = async (file: any) => {

    let formData = new FormData();
    formData.append("file" , file);

    let res =  axios.post('/api/decompress/file' , formData , {
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
    })
    return (await res).data;
}
