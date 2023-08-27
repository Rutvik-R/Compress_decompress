const express = require('express')
const upload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const compress = require('./build/Release/compress');
const decompress = require('./build/Release/decompress');

const port = process.env.PORT || 5000

const app = express();

app.use(upload())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("Working..........")
})

app.post('/api/compress/file', (req, res) => {

    if (req.files.file) {

        let file = req.files.file

        let file_name = file.name;

        
        file.mv('./text_files/main.txt', function (err) {
            if (err) {
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            }
            else {
                let start_time = performance.now();
                let status = compress();
                let end_time = performance.now();

                console.log("compress" , file_name, file.size , "Time : " , (end_time - start_time) , "milliseconds" , status);
                if (status == 0) {

                    const result = fs.readFileSync('./text_files/main-compress.bin', 'utf8');
                    res.status(200).send({ "data": result , "time" : (end_time - start_time) })

                } else {
                    res.send(400).send("Not compressed")
                }
            }
        })



    } else {
        res.status(400).send("File not found")
    }
})

app.post('/api/compress/text', (req, res) => {
    const {data} = req.body;
    if (data) {

        fs.writeFileSync('./text_files/main.txt', data);

        let start_time = performance.now();
        let status = compress();
        let end_time = performance.now();

        
        console.log("compress" , "TEXT", data.size , "Time : " , (end_time - start_time) , "milliseconds" , status);

        if (status == 0) {

            const result = fs.readFileSync('./text_files/main-compress.bin', 'utf8');
            res.status(200).send({ "data": result , "time" : (end_time - start_time) })

        } else {
            res.send(400).send("Not compressed")
        }
        // }
        // })

    } else {
        res.status(400).send("File not found")
    }
})

app.post('/api/decompress/file', (req, res) => {

    if (req.files.file) {
        let file = req.files.file

        let file_name = file.name;

        console.log(file_name, file.size, "decompress")

        file.mv('./text_files/main-compress.bin', function (err) {
            if (err) {
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            } else {

                let start_time = performance.now();
                let status = decompress();
                let end_time = performance.now();
                
                
                console.log("decompress" , file_name, file.size , "Time : " , (end_time - start_time) , "milliseconds" , status);

                if (status != 0) res.status(400).send("Not compressed")

                else {

                    const result = fs.readFileSync('./text_files/main-compress-decompress.txt', 'utf8');
                    res.status(200).send({ "data": result , "time" : (end_time - start_time) });
                }
            }

        })


    } else {
        res.status(400).send("File not found")
    }
})

app.post('/api/decompress/text', (req, res) => {
    res.status(503).send("Service Unavailable");
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server started on port ", port, " .....")
    }
})


