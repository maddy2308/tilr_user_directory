(function () {
    module.exports = function () {
        const contactModel = require("../models/Contact");
        return {
            //getAllContacts: getAllContacts,
            //getContact: getContact,
            createContact: createContact
            //updateContact: updateContact,
            //deleteContact: deleteContact
        };

        function createContact(req, successHandler, errorHandler) {
            // create a sample user
            var nick = {
                first_name: 'Jane',
                last_name: 'Doe'
            };

            return new contactModel(nick).save(function (error, data) {
                if (error) {
                    errorHandler(error);
                } else {
                    successHandler(data);
                }
            });
        }
    }
})();