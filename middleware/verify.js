var jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.header('authorization');
    try {
        let user = jwt.verify(token.split(' ')[1], process.env.jwtSignature);
        // delete user.iat;
        // delete user.exp;
        // req.user = user;
        next();
    } catch (error) {
        return res.json({ message: 'error', contentError: "Không có quên truy cập" });
    }

}

module.exports = verifyToken;