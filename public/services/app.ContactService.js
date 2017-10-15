(function () {
    angular.module("tilr_contact").factory('ContactService', ContactService);

    ContactService.$inject = ['$http', '$q'];

    function ContactService($http, $q) {
        var deferred;

        return {
            getContacts: getContacts,
            addContact: addContact,
            deleteContact: deleteContact
        };

        function getContacts(token) {
            deferred = $q.defer();
            $http({method: 'GET', url: '/rest/contacts/', headers: {'x-access-token' : token}})
                .then(successfulProcess).catch(failedProcess);
            return deferred.promise;
        }

        function addContact(contactDetails, token) {
            var contact = {
                new_contact: {
                    "first_name": contactDetails['firstName'],
                    "last_name": contactDetails['lastName'],
                    "email": contactDetails['email'],
                    "address": contactDetails['address'],
                    "date_of_birth": contactDetails['dob'],
                    "phone": contactDetails['phone']
                }
            };
            deferred = $q.defer();
            $http({method: 'POST', url: '/rest/contact', headers: {'x-access-token' : token}, data : contact})
                .then(successfulProcess).catch(failedProcess);
            return deferred.promise;
        }

        function deleteContact(contactID, token) {
            deferred = $q.defer();
            $http({method: 'DELETE', url: '/rest/contact/' + contactID, headers: {'x-access-token' : token}})
                .then(successfulProcess).catch(failedProcess);
            return deferred.promise;
        }

        function successfulProcess(response) {
            deferred.resolve(response.data);
        }

        function failedProcess(error) {
            deferred.reject(error);
        }

    }

})();