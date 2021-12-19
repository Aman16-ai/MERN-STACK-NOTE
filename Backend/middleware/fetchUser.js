const jwt = require('jsonwebtoken');
const JWT_SECERT = "auth1223@#7531";

function fetchuser(req,res,next) {
    const token = req.header('auth-token');
    if(!token) {
        console.log("token is not valid");
    }
    const data = jwt.verify(token,JWT_SECERT);
    req.user = data.user;
    next();
}
module.exports = fetchuser;