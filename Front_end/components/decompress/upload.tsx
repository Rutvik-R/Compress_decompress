import axios from "axios";

export const upload = (file: any) => {

    let formData = new FormData();
    formData.append("file" , file);

    let res =  axios.post('/api/decompress/file' , formData , {
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
    })
    console.log(res)
    return res;
}