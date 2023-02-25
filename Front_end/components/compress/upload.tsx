import axios from "axios";

export const upload = (file: any) => {

    let formData = new FormData();
    formData.append("file" , file);

    let res =  axios.post('/file/compress/upload' , formData , {
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
    })
    return res;
    console.log(res)
}