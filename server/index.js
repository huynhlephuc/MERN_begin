import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {CONNECTION_URL, connect} from './db.js'
import studentRouter from './routes/student.js'



// connect to mongodb
const app = express();

app.use('/student', studentRouter);
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  console.log('vcl',CONNECTION_URL )
  connect()
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})


// starting with student Router
