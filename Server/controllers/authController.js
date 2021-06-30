const bcrypt = require('bcrypt');
const User = require('../models/auth.modle')

///User SignUp 
exports.registerController =async (req,res) =>{
    const {userName,email,password} = req.body;
    try {
        let saltRounds = 10;
        await bcrypt.hash(password, saltRounds, function(err, hash) {
            const user = new User({
                username,
                email,
                hashed_password:hash,
            })
            try {
                await user.save();
                res.status(200).json({success:true, message:'Register Successfully '})
                
            } catch (error) {
                res.status(500).json({success:false, message:'Something went worng'})
            }
        });
        
        
    } catch (error) {
        res.status(400).json({success:false, message:'Try again'})
    }
   
}
   