const router = require("express").Router();
const compress = require('./../build/Release/compress');
const fs = require('fs')
const Buffer = require('buffer');
const path = require('path')
// const csvtojson = require("csvtojson");


router.post( "/file" , (req, res) => {
    
    const {file} = req.files;

    if (file) {
        let file_name = file.name;

        console.log(file_name, file.size, "compress")

        const fileData = file.data.toString();

        console.log(fileData);

        file.mv('./text_files/main.txt', async function (err) {
            if (err) {
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            }
            else {

                let status = compress(fileData);

                if (status == 0) {

                    
                    let data = fs.readFileSync('./text_files/main-compress.bin', (err, data) => {
                        console.log(data);
                    })

                    res.status(200).send(data);
                } else {
                    res.status(400).send("Not compressed")
                }
            }
        })

    } else {
        res.status(400).send("File not found")
    }
})

router.post( "/text" , (_req, res) => {
    res.status(403).send("Not Available");
})

module.exports = router;