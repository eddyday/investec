var investec = angular.module('investec', ['ngRoute','ngAnimate']);

// configure our routes
investec.config(function ($routeProvider, $locationProvider) {
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
  $scope.pageClass='page-home';
  $scope.img = '/images/isa.png';
});

investec.controller('aboutController', function ($scope) {
  $scope.pageClass='page-about';
  $scope.title = 'About Us';
  $scope.text1 = 'Click & Invest offers you simplified advice which is a form of restricted advice. Restricted advice means that we will only advise you on investment management, and will not advise you on other retail investment products such as life policies.';
  $scope.text2 = 'Simplified advice means that we will not take into account your overall current financial situation, or any investments you may already hold. It is based solely on the information that you have provided to us, and the amount of money you have told us you would like to invest.';
  $scope.img = '/images/isa.png';
});

investec.controller('whyusController', function ($scope) {
  $scope.pageClass='page-why';
  $scope.title = 'Why Us?';
  $scope.text1 = 'By being part of Investec Wealth & Investment, we have access to a 20 strong in-house Research Team who thoroughly research the markets, and work closely with our Investment Team to ensure that your money is being invested in the right places for you and your investment goals.';
  $scope.text2 = "We'll never be out of touch, from monthly video updates on the performance of your investments, through to talking to our dedicated Support Team, we're available 365 days a year, online, via our App or on the phone. We're proud of our heritage and the service we offer, which is why it's at the heart of everything we do.";
  $scope.img = '/images/3-2-zebra-png.png';
});

$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
  });
});