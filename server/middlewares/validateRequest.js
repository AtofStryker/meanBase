module.exports = function(req, res, next) { 
  // in most web application, we would use middleware to grab tokens or attempt to authenticate users
  // if a web token is successful, let them pass
  //if a users login is successful, let them pass and return a token with an experation date
  //otherwise, deny acccess. In our case, everyone has access to this API
  next(); //proceed to next middle (likely a router)
};