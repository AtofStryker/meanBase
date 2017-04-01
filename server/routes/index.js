var express = require('express');
var router = express.Router();
var user = require('./users.js');

router.get('/api/users/user', user.getUser);
router.post('/api/users/save', user.saveUser);
 
module.exports = router;