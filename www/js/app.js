angular.module('BloodBank', ['ionic', 'ionic-material', 'ionMdInput', 'ionic.contrib.frost'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	  $ionicConfigProvider.tabs.position('top');

  $stateProvider
  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  .state('menu.home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'TodoCtrl'
  })

	.state('home.rooms', {
    url: '/rooms',
    templateUrl: 'templates/rooms.html',
    controller: 'InsideCtrl'
  });

  $urlRouterProvider.otherwise('/login');
})

.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    if (!AuthService.isAuthenticated()) {
      console.log(next.email);
      if (next.email !== 'login' && next.email !== 'register') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
});
