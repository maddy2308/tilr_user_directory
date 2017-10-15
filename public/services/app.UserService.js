(function () {
    angular.module("tilr_contact").factory('UserService', UserService);

    UserService.$inject = ['$http', '$q'];

    function UserService($http, $q) {
        var deferred;

        return {
            login: login
        };

        function login(username, password) {
            deferred = $q.defer();
            $http.post('/rest/authenticate/', {username: username, password: password})
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