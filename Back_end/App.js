const express = require('express')
const upload = require('express-fileupload')
const cors = require('cors')

const compress_route = require('./routes/compress');
const decompress_route = require('./routes/decompress');

const port = process.env.PORT || 5000

const app = express();

app.use(upload())
app.use(cors())
app.get('/' , (req , res) => {
    res.status(200).send("Working..........") 
})

app.use("/api/compress" , compress_route );
app.use("/api/decompress" , decompress_route);

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


