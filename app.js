angular.module("cars", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html"
    })
    .state("about", {
      url: "/",
      templateUrl: "./views/about.html"
    })
    .state("collection", {
      url: "/",
      templateUrl: "./views/collection.html"
    })
    .state("services", {
      url: "/",
      templateUrl: "./views/services.html"
    })
    .state("quotation", {
      url: "/",
      templateUrl: "./views/quotation.html"
    })
    .state("contact", {
      url: "/",
      templateUrl: "./views/contact.html"
    })
    ;
  $urlRouterProvider
    .otherwise("/");
    });
