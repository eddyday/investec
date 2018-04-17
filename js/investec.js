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
      templateUrl: 'pages/why.html',
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
  $scope.text1 = 'We provide financial products and services, imbued with a personal approach, to a select client base in three principal markets: the UK and Europe, Southern Africa and Asia-Pacific. Investec was founded in South Africa in 1974. We entered the UK in 1992, and have since expanded through a combination of substantial organic growth and strategic acquisitions.';
  $scope.text2 = 'Today Investec employs more than 9,900 people worldwide and is publicly traded in London and Johannesburg. Our divisions include Corporate & Institutional Banking, Private Banking, Wealth & Investment and Asset Management.';
  $scope.img = '/images/zebra_contrast.png';
});

investec.controller('whyusController', function ($scope) {
  $scope.pageClass='page-why';
  $scope.title = 'Our Culture';
  $scope.text1 = 'Our culture enables extraordinary people to perform in Out of the Ordinary ways. It is the passion and dedication of our people that enables us to deliver superior client service and value for stakeholders.';
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