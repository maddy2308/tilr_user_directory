(function () {
    angular
        .module("tilr_contact").controller('HomeController', HomeController);

    HomeController.$inject = ['$window', '$location', '$uibModal', '$log', 'ContactService'];

    function HomeController($window, $location, $uibModal, $log, contactService) {
        var self = this;

        self.token = $window.sessionStorage.getItem('jwt_token');
        self.myContacts = [];

        self.getContacts = getContacts();
        self.openAddContactDialog = openAddContactDialog;

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

        function openAddContactDialog() {
            var parentElem = angular.element(document.body);
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/modules/home/add_dialog.html',
                controller: 'AddContactController',
                controllerAs: 'addContactCtrl',
                size: 'md',
                appendTo: parentElem
            });

            modalInstance.result.then(function (result) {
                $log.info('Modal ' + result);
                getContacts();
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

    }
})();