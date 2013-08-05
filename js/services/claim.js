condominioApp.factory("Claim", ['$resource', function($resource) {

  return $resource("http://192.168.1.11\\:3000/api/2/claims/:claimId", {}, {

    jsonp: {
      method: "JSONP",
      params: { callback: "JSON_CALLBACK" }
    },

    jsonpQuery: {
      method: "JSONP",
      params: { callback: "JSON_CALLBACK" },
      isArray: true
    }
  });

}]);