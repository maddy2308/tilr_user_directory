(function () {
    module.exports = function () {
        const contactModel = require("../models/Contact");
        return {
            getAllContacts: getAllContacts,
            //getContact: getContact,
            createContact: createContact
            //updateContact: updateContact,
            //deleteContact: deleteContact
        };

        function getAllContacts (req, successHandler, errorHandler) {
            contactModel.find({}, function(error, data) {
                handleResponse(error, data, successHandler, errorHandler);
            });
        }


        function createContact(req, successHandler, errorHandler) {
            // create a sample user
            var nick = {
                first_name: 'Jane',
                last_name: 'Doe'
            };

            return new contactModel(nick).save(function (error, data) {
                handleResponse(error, data, successHandler, errorHandler);
            });
        }

        function handleResponse(error, data, successHandler, errorHandler) {
            if (error) {
                errorHandler(error);
            } else {
                successHandler(data);
            }
        }
    }
})();