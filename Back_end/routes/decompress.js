const router = require("express").Router();

const decompress = require('./../build/Release/decompress');
const fs = require('fs')
const Buffer = require('buffer');
const path = require('path')

router.post('/file' , (req , res) => {

    if(req.files.file){
        let file = req.files.file

        let file_name = file.name;

        console.log( file_name , file.size , "decompress")

        file.mv('./../text_files/main-compress.bin' , function (err) {
            if(err){
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            } else{
                
                
            let status = decompress();    
                
            if(status != 0) res.status(400).send("Not compressed")
    
            else{
   
                var options = {
                    root : path.join(__dirname)
                };
    
                res.status(200).sendFile('./../text_files/main-compress-decompress.txt' , options , (err)=>{
                    if(err){
                        console.log(err);
                    } else{
                        console.log("Done")
                    }
                })
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