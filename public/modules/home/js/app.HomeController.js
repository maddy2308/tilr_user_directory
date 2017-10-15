(function () {
    angular
        .module("tilr_contact").controller('HomeController', HomeController);

    HomeController.$inject = ['$window', '$location', 'ContactService'];

    function HomeController($window, $location, contactService) {
        var self = this;

        self.token = $window.sessionStorage.getItem('jwt_token');
        self.myContacts = [];

        self.getContacts = getContacts();

        if (!self.token || self.token.length <= 0) {
            $location.path("/login");
        }

        function getContacts () {
            contactService.getContacts(self.token).then(function(data) {
                self.mycontacts = data;
            }, function(error) {
                alert(error);
            })
        }

    }
})();