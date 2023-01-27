import http from "../http-common";


export const uploadFile = (file: string | Blob , onUploadProgress: (event: any) => void) => {
    let formData = new FormData();

    formData.append("file" , file);

    let res = http.post("/file/decompress/upload" , formData , {
        
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