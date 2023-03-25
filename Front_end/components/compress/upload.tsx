import axios from "axios";

export const upload = async (file: any) => {

    let formData = new FormData();
    formData.append("file" , file);

    let res =  axios.post('/api/compress/file' , formData , {
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
    })
    return res;
}