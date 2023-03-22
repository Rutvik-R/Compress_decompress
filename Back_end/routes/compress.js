const router = require("express").Router();
const compress = require('./../build/Release/compress');

router.post("/file", (req, res) => {

    const { file } = req.files;
    if (!file) res.status(404).send("File not found");
    else {

        const fileData = file.data.toString();
        
        let start = performance.now();

        const compress_data = compress.main(fileData);

        const time = performance.now() - start;

        if (compress_data) {
            res.status(200).send({compress_data , "time" : time});
        } else {
            res.status(501).send("Not compressed")
        }
    }
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