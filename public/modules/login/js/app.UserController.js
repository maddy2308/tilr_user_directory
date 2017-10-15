(function () {
    angular
        .module("tilr_contact").controller('UserController', UserController);

    UserController.$inject = ['$location', 'UserService'];

    function UserController($location, userService) {
        var self = this;

        self.token = '';
        self.login = login;

        function login() {
            userService.login(self.username, self.password).then(function (resp) {
                if (resp.success) {
                    self.token = resp.token;
                    $location.href('#');
                } else {
                    alert(resp.message);
                }
            }, function(err) {
                console.log(err);
                alert("damn error")
            });
        }
    }
})();