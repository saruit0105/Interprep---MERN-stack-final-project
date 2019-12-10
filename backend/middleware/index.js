const loggedOut = (req, res, next) => {
  if (req.session && req.session.userId) {
    return res.redirect("/profile");
  }
  return next();
};

const requiresLogin = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    let err = new Error("You need to be logged in to view this page");
    err.status = 401;
    next(err);
  }
};

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
