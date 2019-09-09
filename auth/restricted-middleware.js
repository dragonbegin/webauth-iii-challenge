const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (token){
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken)=> {

      if(err){
       res.status(401).json({message: 'what the hek'});
      }else{
        req.decodedJwt = decodedToken;
        next();
      }
    })
   } else{
      res.status(401).json({message: 'no soup for you'});
    }

  };