const jwt= require("jsonwebtoken");

const generateToken= (user)=>{
    return jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET_KEY);
}

module.exports.generateToken= generateToken;