module.exports = function (app, contactDAO) {

    app.get('/rest/contact/:contactID', getContact);
    app.get('/rest/contacts', getAllContacts);
    app.post('/rest/contact', createContact);
    app.patch('/rest/contact', updateContact);
    app.delete('/rest/contact', deleteContact);

    function getContact(req, res) {
        var docId = req.params['contactID'];
    }

    function getAllContacts(req, res) {
        return contactDAO.getAllContacts(req,function(response) {
            res.send(response);
        }, function(error) {
            res.send(error);
        });
    }

    function createContact(req, res) {
        return contactDAO.createContact(req, function(response) {
            res.send(response);
        }, function(error) {
            res.send(error);
        });
    }

    function updateContact (req, res) {
        console.log("in update Contact method");
    }

    function deleteContact (req, res) {
        console.log("in delete Contact method");
    }

};
