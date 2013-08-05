condominioApp.controller("ClaimsIndexCtrl", ["$scope", "Claim", function($scope, Claim) {

  Claim.jsonpQuery(function(claims) {
    $scope.claimsList = claims;
  });

}]);