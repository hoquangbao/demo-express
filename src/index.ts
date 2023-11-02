import express from 'express';
import { promises as fsPromise } from 'fs';
import csv from 'csvtojson';
import { json } from 'stream/consumers';

const app = express();
const port = 3000;

const csvFile = 'C:/Users/pc/Documents/Demo-Server/users.csv';
const exportFile = 'user.json'

app.use('/convert', (req, res) =>{
    res.send('converting');
    csv()
      .fromFile(csvFile)
      .then((jsonObj) => {
        console.log(jsonObj);
        let json = jsonObj.map((item: {first_name: string; last_name: string; phone:string}) =>{
            let first = item.first_name;
            let last = item.last_name;
            let phoneNo = item.phone;
            if(phoneNo === "")
                phoneNo = "Missing data"
            return {first, last, phoneNo}
        })
        fsPromise.writeFile(exportFile, JSON.stringify(json))
      });
})

app.listen(port, () =>{
    console.log(`server start at http://localhost:${port}`)
})