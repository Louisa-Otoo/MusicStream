import express from 'express';
import morgan from 'morgan';
import dbConnection from './db.js';
import userRoute from './routes/userRoute.js';
import songRoute from './routes/songRoute.js';
import playlistRoute from './routes/playlistRoutes.js'
import dotenv from 'dotenv';
dotenv.config()


const app = express();
const PORT = process.env.PORT;


app.use(morgan('dev'));
app.use(express.json());
app.use(userRoute);
app.use(songRoute);
app.use(playlistRoute);


dbConnection()

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})