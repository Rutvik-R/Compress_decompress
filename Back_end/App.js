const express = require('express')
const upload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const Buffer = require('buffer');

const compress = require('./build/Release/compress');
const decompress = require('./build/Release/decompress');

const port = 5000

const app = express();

app.use(upload())
app.use(cors())
// app.cors()

app.get('/' , (req , res) => {
    var options = {
        root : path.join(__dirname)
    };

    res.sendFile("./text_files/main" , options , (err) => {console.log(err)})
})

app.post('/file/compress/upload' , (req , res) => {

    if(req.files.file){

        let file = req.files.file

        let file_name = file.name;

        console.log( file_name , file.size , "compress")

        file.mv('./text_files/main.txt' , function (err) {
            if(err){
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            }
            else{
                
        let status = compress();    
            
        if (status == 0 ){
            
            var options = {
                root : path.join(__dirname)
            };
            
            res.status(200).sendFile('./text_files/main-compress.bin'  , options , (err)=>{
                if(err){
                    console.log(err);
                } else{
                    console.log("Done")
                }
            })
        } else{
            res.send(400).send("Not compressed")
        }
            }
        })
        

            
    } else{
        res.status(400).send("File not found")
    }
})



app.post('/file/decompress/upload' , (req , res) => {

    if(req.files.file){
        let file = req.files.file

        let file_name = file.name;

        console.log( file_name , file.size , "decompress")

        file.mv('./text_files/main-compress.bin' , function (err) {
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
    
                res.status(200).sendFile('./text_files/main-compress-decompress.txt' , options , (err)=>{
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

app.get('/files' , (req , res) => {
    res.status(200);
})


app.listen( port , (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Server started on port " , port , " .....")
    }
})


