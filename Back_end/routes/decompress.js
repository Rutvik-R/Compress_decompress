const router = require("express").Router();

const decompress = require('./../build/Release/decompress');
const fs = require('fs')
const Buffer = require('buffer');
const path = require('path')

router.post('/file' , (req , res) => {

    if(req.files.file){
        let file = req.files.file

        let file_name = file.name;
        const fileData = file.data.toString();
        console.log( file_name , file.size , "decompress")

        file.mv('./text_files/main-compress.bin' , function (err) {
            if(err){
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            } else{
            
            let start = performance.now();
                
            const decompress_data = decompress.main(fileData);    
            
            const time = performance.now() - start;

            if(!decompress_data) res.status(400).send("Not decompress")
            else{
                res.status(200).send({decompress_data , "time" : time});
            }
        }

    })   
    } else{
        res.status(400).send("File not found")
    }
})
  
router.post( "/text" , (req, res) => {
    res.status(403).send("Not Available");
})

module.exports = router;