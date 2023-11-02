import express from 'express'
import students from './api/student';
import teachers from './api/teacher';
import csv from 'csvtojson'

const csvFilePath='../src/user.csv'
const routes = express.Router();

routes.get('/', (req, res) => {
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        console.log(jsonObj);
      });
})

routes.use('/teachers', teachers)
routes.use('/students', students)

export default routes;