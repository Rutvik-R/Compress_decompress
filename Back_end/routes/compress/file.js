const router = require("express").Router();

router.post((req, res) => {

    if (req.files.file) {
        let file = req.files.file
        let file_name = file.name;

        console.log(file_name, file.size, "compress")

        file.mv('./text_files/main.txt', function (err) {
            if (err) {
                console.log(err)
                res.status(404).send("Not uploaded \nPlease check your file type");
            }
            else {

                let status = compress();

                if (status == 0) {

                    var options = {
                        root: path.join(__dirname)
                    };

                    res.status(200).sendFile('./text_files/main-compress.bin', options, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Done")
                        }
                    })
                } else {
                    res.send(400).send("Not compressed")
                }
            }
        })

    } else {
        res.status(400).send("File not found")
    }
})



module.exports = router;