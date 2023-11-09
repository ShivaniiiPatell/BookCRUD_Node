const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if(!token){
            return res.status(401).send({
              msg: 'Please Login Again'
          });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(401).send({
                msg: 'No user found'
            });
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authMiddleware;
