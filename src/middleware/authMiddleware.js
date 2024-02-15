const jwt = require("jsonwebtoken");
const crypto = require('crypto');

function authToken(req, res, next) {
        const token = req.header('Authorization');
        if (!token)
                return res.status(401).json({
                        error: "Not Allow Authorization"
                });
        const secretKey = crypto.randomBytes(10).toString('hex');
        console.log(secretKey);

        jwt.verify(token, secretKey, (err, user) => {
                if (err)
                        return res.status(403).json({
                                error: 'Forbidden'
                        });
                req.user = user;
                next();
        });
}
module.exports = { authToken };