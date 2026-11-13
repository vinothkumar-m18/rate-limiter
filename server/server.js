import express from 'express';
const port = process.env.PORT;

const app = express();
app.get('/api/data', (req, res)=>{
    res.status(200).json({
        status:'success',
        message:'backend reached'
    });
});
app.listen(port, ()=>{
    console.log(`server is listening on port${PORT}`);
})