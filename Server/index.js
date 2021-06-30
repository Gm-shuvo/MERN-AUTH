const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const DbConnect = require('./Db/db')

require('dotenv').config();

//Initialize Express Server
const app = express();

//Database Connect
DbConnect()

//Add Middleware
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: 'https://localhost:8080'
}
));

//Add all Routes
app.use('/api',authRoutes);

//Add 404 route
app.use((req, res, next) =>{
    res.status(404).json({success:false, message:'page not found'})
})

PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server up on running port ${PORT}`);
});