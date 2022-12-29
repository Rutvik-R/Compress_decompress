const express = require('express')
const upload = require('express-fileupload')
const compress = require('./build/Release/compress');
const decompress = require('./build/Release/decompress');

const port = 5000

const app = express();

app.use(upload())


app.get('/' , (req , res) => {
    // console.log(req);
    res.send("Working ..................................")
})

app.post('/file/compress/upload' , (req , res) => {
    if(req.files){
        // console.log(req.files)

        let file = req.files.file

        let file_name = file.name;

        console.log(file , file_name)

        file.mv('./text_files/main.txt' , function (err) {
            if(err){
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            } else{
                
                let status = compress();    
                
                if(status == 0) res.status(200).send("Done")
                else res.status(400).send("Not done")
            
            }

        })
    }
})


app.post('/file/decompress/upload' , (req , res) => {
    if(req.files){
        
        let file = req.files.file

        let file_name = file.name;

        console.log(file , file_name)

        file.mv('./text_files/main-compress.bin' , function (err) {
            if(err){
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            } else{
                
                let status = decompress();    
                
                if(status == 0) res.status(200).send("Done")
                else res.status(400).send("Not done")
            
            }

        })
    }
})

// app.get('/file/compress/get' , (req , res) => {
    
// })


app.listen( port , (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Server started on port " , port , " .....")
    }
})