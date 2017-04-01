var User = require('../models/user');
var users = { 
  getUser: function(req, res) {
    User.findOne(function(error, response) {
      if (error) throw error;
        res.send(response);//should be one object
     });
  }, 
  saveUser: function(req, res) {
    User.remove(function(error, response) {
      if (error) return handleError(error);
      //purge the collection in the database
      //create a new user and upload it
      var newUser = new User(req.body);
      newUser.save(function(error, response) {
        if (error) throw error;
        res.sendStatus(201);//show save is success and return 201. typically we would return saved object but we want to showcase get/post
     });
    });
  }
};
 
module.exports = users;