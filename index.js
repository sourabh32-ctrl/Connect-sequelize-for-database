import express from 'express';
import {connection} from "./db.js";



const app = express();
connection();
app.listen(3000, () => {
    console.log('server is running at 3000');
});