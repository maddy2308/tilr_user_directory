(function () {
    angular
        .module("tilr_contact").controller('UserController', UserController);

    UserController.$inject = ['$location', '$window', 'UserService'];

    function UserController($location, $window, userService) {
        var self = this;

        self.login = login;

        function login() {
            userService.login(self.username, self.password).then(function (resp) {
                if (resp.success) {
                    $window.sessionStorage.setItem('jwt_token', resp.token);
                    // this is not the best way. rather it should be configured as some kind of state define mechanism
                    $location.path('/home');
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