import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('server working at port ' + port)
})

app.listen(port, () =>{
    console.log(`server start at http://localhost:${port}`)
})