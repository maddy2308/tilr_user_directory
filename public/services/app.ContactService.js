(function () {
    angular.module("tilr_contact").factory('ContactService', ContactService);

    ContactService.$inject = ['$http', '$q'];

    function ContactService($http, $q) {
        var deferred;

        return {
            getContacts: getContacts
        };

        function getContacts(token) {
            deferred = $q.defer();
            $http({method: 'GET', url: '/rest/contacts/', headers: {'x-access-token' : token}})
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