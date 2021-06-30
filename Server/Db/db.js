const mongoose= require('mongoose');
require('dotenv').config();

const Url = process.env.MONGO_URL

const DbConnect =async ()=>{
    const Db =await mongoose.connect(Url,{
        useCreateIndex:true,
        useFindAndModify:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log(`Connect to ${Db.connection.host}`);
}

module.exports =DbConnect