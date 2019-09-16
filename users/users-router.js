const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware')
 
router.get('/' , restricted , (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  


  router.get('/dept', (req,res)=> {
       Users.find()
      .then(u => {
          res.json(u)
      })
      .catch(err=> res.send(err))
  })
  module.exports = router;
  