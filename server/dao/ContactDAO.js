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
            var _userId = req.decoded['_id'];
            contactModel.find({'_user': _userId }, function(error, data) {
                if (error) {
                    errorHandler(error);
                } else {
                    successHandler(data);
                }
            });
        }


        function createContact(req, successHandler, errorHandler) {
            var contact = req.body['new_contact'];
            var decoded = req.decoded;
            contact['_user'] = decoded['_id'];
            return new contactModel(contact).save(function (error, data) {
                if (error) {
                    errorHandler(error);
                } else {
                    successHandler("contact saved successfully");
                }
            });
        }
    }
})();