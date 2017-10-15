(function () {
    angular
        .module("tilr_contact", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider

            // route for the home page
                .when('/home', {
                    templateUrl: '/modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                })

                // route for the about page
                .when('/login', {
                    templateUrl: 'modules/login/login.html',
                    controller: 'UserController',
                    controllerAs: 'userCtrl'
                })

                // route for the contact page
                .when('/register', {
                    templateUrl: 'modules/login/register.html'
                })
                .otherwise({redirectTo: '/login'});
        });
})();