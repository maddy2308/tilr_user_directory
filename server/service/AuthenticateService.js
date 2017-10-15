module.exports = function (app) {

    const jwt = app.get('jwt_library');
    const secret = app.get('superSecret'); // this should be a environment variable

    app.post('/rest/authenticate', authenticateUser);

    return {
        ensureToken : ensureToken
    };


    function authenticateUser(req, res) {
        // this is probably not the best way. We do not want to keep this authenticate user here in contact service.
        // Also storing passwords as is, is not a good thing. We should hash it before storing
        var username = req.body['username'];
        var password = req.body['password'];
        const userModel = require("../models/User");

        userModel.findOne({
            username: username,
            password: password
        }, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.send({
                    success: false,
                    message: 'Authentication failed. Username or password didn\'t match.'
                });
            } else if (user) {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    _id: user._id
                };
                var token = jwt.sign(payload, secret);

                // return the information including token as JSON
                res.send({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        });
    }

    function ensureToken (req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }
};

