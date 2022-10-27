
const jwt = require('jsonwebtoken');
const repositoryUsers = require('../repository/users')

function verify(req, res, next) {
	const authHeader = req.get("x-access-token")
	if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, users) => {
			if (err) return res.status(401).json({message : "Token is not valid!"})
            req.user = users
            if(!repositoryUsers.selectByEmail(users.email)) return res.status(401).json({message : "Token is not valid!"})
			next()
		});
	} else {
		return res.status(401).json({message : "You are not authenticated"})
	}
}
module.exports = {verify};
