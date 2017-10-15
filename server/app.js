module.exports = function (app) {

    var authService = require("./service/AuthenticateService")(app);

    var contactDAO = require("./dao/ContactDAO")(app);
    require("./service/ContactService")(app, authService, contactDAO);

    var userDAO = require("./dao/UserDAO")(app);
    require("./service/UserService")(app, userDAO);

};
