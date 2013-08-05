condominioApp.controller("ClaimsShowCtrl", ["$scope", "$routeParams", "Claim", function($scope, $routeParams, Claim) {

  var claimId = $routeParams.claimId;
  Claim.jsonp({claimId: claimId}, function(claim) {
    $scope.claim = claim;
  });

}]);