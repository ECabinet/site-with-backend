/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
    var username = req.param("username");
    var password = req.param("password");
    
    Users.findByUsername(username).done(function(err, usr) {
        if (err) {
            res.send(500, { error: "DB Error" });
        } else {
            if (usr) {
                var hasher = require("password-hash");
                if (hasher.verify(password, usr.password)) {
                    req.session.user = usr;
                    res.send(usr);
                } else {
                    res.send(400, { error: "Wrong Password" });
                }
            } else {
                res.send(404, { error: "User not Found" });
            }
        }
    });
}
};

