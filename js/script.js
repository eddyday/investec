var investec = angular.module('investec', ['ngRoute']);

// configure our routes
investec.config(function ($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })

    // route for the about page
    .when('/about', {
      templateUrl: 'pages/info.html',
      controller: 'aboutController'
    })

    // route for the contact page
    .when('/whyus', {
      templateUrl: 'pages/info.html',
      controller: 'whyusController'
    })
    .otherwise({
      templateURL: 'pages/home.html'
    });
});

// create the controller and inject Angular's $scope
investec.controller('homeController', function ($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

investec.controller('aboutController', function ($scope) {
  $scope.title = 'About Us';
  $scope.text1 = 'Click & Invest offers you simplified advice which is a form of restricted advice. Restricted advice means that we will only advise you on investment management, and will not advise you on other retail investment products such as life policies.';
  $scope.text2 = 'Simplified advice means that we will not take into account your overall current financial situation, or any investments you may already hold. It is based solely on the information that you have provided to us, and the amount of money you have told us you would like to invest.';
  $scope.img = '/images/isa.png'
});

investec.controller('whyusController', function ($scope) {
  $scope.title = 'Why Us?';
  $scope.text1 = 'By being part of Investec Wealth & Investment, we have access to a 20 strong in-house Research Team who thoroughly research the markets, and work closely with our Investment Team to ensure that your money is being invested in the right places for you and your investment goals.'
  $scope.img = '/images/3-2-zebra-png.png'
});