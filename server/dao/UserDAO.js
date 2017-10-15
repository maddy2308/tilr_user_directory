(function () {
    module.exports = function () {
        const userModel = require("../models/User");
        return {
            createUser: createUser
        };

        function createUser(req, successHandler, errorHandler) {
            var contact = req.body['new_user'];
            return new userModel(contact).save(function (error, data) {
                if (error) {
                    errorHandler(error);
                } else {
                    successHandler("New User created successfully");
                }
            });
        }
    }
})();