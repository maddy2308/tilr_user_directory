module.exports = function (app) {
    var contactDAO = require("./dao/ContactDAO")();
    require("./service/ContactService")(app, contactDAO);
};
