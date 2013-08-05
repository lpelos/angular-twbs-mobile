condominioApp.config(["$routeProvider", function($routeProvider){ $routeProvider.

  when("/", {
    redirectTo: "/claims"
  }).

  when("/claims", {
    templateUrl: "templates/claims/index.html",
    controller: "ClaimsIndexCtrl"
  }).

  when("/claims/:claimId", {
    templateUrl: "templates/claims/show.html",
    controller: "ClaimsShowCtrl"
  }).

  otherwise({
    redirectTo: "/claims"
  });

}]);