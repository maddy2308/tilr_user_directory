module.exports = function (app) {
    var userDAO = require("./dao/UserDAO")();
    require("./service/UserService")(app, userDAO);
};
