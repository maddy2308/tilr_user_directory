module.exports = function (app, authService, contactDAO) {

    app.get('/rest/contact/:contactID', getContact);
    app.get('/rest/contacts', authService.ensureToken, getAllContacts);
    app.post('/rest/contact', authService.ensureToken, createContact);
    app.patch('/rest/contact', authService.ensureToken, updateContact);
    app.delete('/rest/contact', authService.ensureToken, deleteContact);

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
