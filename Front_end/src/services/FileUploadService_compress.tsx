import http from "../http-common";


export const uploadFile = (file , onUploadProgress) => {
    let formData = new FormData();

    formData.append("file" , file);

    let res = http.post("/file/compress/upload" , formData , {
        
        headers : {
            "Content-type" : "multipart/form-data" ,
        },
        onUploadProgress,
    });
    return  res;
};

export const getFiles = () => {
    return http.get("/files");
}