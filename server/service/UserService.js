module.exports = function (app, userDAO) {

    app.post('/rest/register', createUser);
    // endpoints for update and deleting a user goes here.

    function createUser(req, res) {
        return userDAO.createUser(req, function(response) {
            res.send(response);
        }, function(error) {
            res.send(error);
        });
    }

    function updateUser (req, res) {
        console.log("in update user method");
    }

    function deleteUser (req, res) {
        console.log("in delete user method");
    }

};
