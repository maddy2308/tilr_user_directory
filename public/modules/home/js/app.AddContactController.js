(function () {
    angular
        .module("tilr_contact").controller('AddContactController', AddContactController);

    AddContactController.$inject = ['$window', '$uibModalInstance', 'ContactService'];

    function AddContactController($window, $uibModalInstance, contactService) {
        var self = this;

        self.token = $window.sessionStorage.getItem('jwt_token');

        self.ok = function () {
            console.log(self.form);
            contactService.addContact(self.form, self.token).then(function(resp){
                $uibModalInstance.close(resp);
            }, function(err) {
                $uibModalInstance.close("Contact was not saved");
            });
        };

        self.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})();