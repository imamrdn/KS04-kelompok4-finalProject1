const {verifyToken} = require('../helper/jwt');

function verify(req, res, next) {
	const authHeader = req.headers.x-access-token;
	if (authHeader) {
		if(jwt.verifyToken(authHeader)){
            const {id, email} = verifyToken(authHeader)
            req.user = {id, email}
            next()
        } else {
            return res.status(403).json("Token is not valid!");
        }
	} else {
		return res.status(401).json("You are not authenticated");
	}
}
module.exports = verify;
