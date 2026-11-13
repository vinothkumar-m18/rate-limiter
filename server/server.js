import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path:'./server/.env'});

const PORT = process.env.PORT;
const app = express();
app.get('/api/data', (req, res)=>{
    res.status(200).json({
        status:'success',
        message:'backend reached'
    });
});
app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`);
})