
const upload = require('express-fileupload')
const bodyParser = require('body-parser')
const router = require("express").Router();
const compress = require('./../build/Release/compress');
const path = require('path')
const fs = require('fs');

router.use(upload());
router.use(bodyParser()) ;
router.post("/file", (req, res) => {
    
    const {file} = req.files

    // if(file){


    //     let file_name = file.name;

    //     console.log( file_name , file.size , "compress")

    //     file.mv('./text_files/main.txt' , function (err) {
    //         if(err){
    //             console.log(err)
    //             res.status(404).send("Not uploaded \nPlease check your file type");
    //         }
    //         else{
                
    //     let status = compress();    
            
    //     if (status == 0 ){
            
    //         var options = {
    //             root : path.join(__dirname)
    //         };
            
    //         // res.status(200).sendFile('./../text_files/main-compress.bin'  , options , (err)=>{
    //         //     if(err){
    //         //         console.log(err);
    //         //     } else{
    //         //         console.log("Done")
    //         //     }
    //         // })

    //         // const compress_data = fs.readFile('./text_files/main-compress.bin' , 'utf8');
    //         // console.log(compress_data);
            res.status(200).send("OK");
    //     } else{
    //         res.send(400).send("Not compressed")
    //     }
    //         }
    //     })  
    // } else{
    //     res.status(400).send("File not found")
    // }
})

router.post("/text", (req, res) => {

    const data = req.body.data;
    
    if (!data) {
        res.status(404).send("Empty data");

    } else {
        let start = performance.now();
        const compress_data = compress.main(data);
        let time = performance.now() - start;
        if (compress_data) {
            res.status(200).send({compress_data , "time" : time});
        } else {
            res.status(501).send("Not compressed")
        }
    }
})

module.exports = router;