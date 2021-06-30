const bcrypt = require("bcrypt");
const User = require("../models/auth.modle");

///User SignUp
exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;
  let saltRounds = 10;
    
  try {
   let hashedPass = await bcrypt.hash(password, saltRounds) 
   const user = new User({
    username,
    email,
    password: hashedPass,
  });
    const userdata = await user.save();
     console.log(userdata);
    return res.status(200).json({ success: true, message: "Register Successfully " })
  } catch (error) {
    return  res.status(400).json({ success: false, message: "Try again" });
  }
};
