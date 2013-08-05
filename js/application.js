condominioApp = angular.module("condominioApp", ["ngResource"])

  .animation("slide-in", function() {
    return {
      setup: function(element) {
        element.css({marginLeft: "100%"});
        var memo = undefined; //this value is passed to the start function
        return memo;
      },
      start: function(element, done, memo) {
        element.animate({
          marginLeft: "0"
        }, function() {
          done();
        })
      }
    }
  })

  .animation("slide-out", function() {
    return {
      setup: function(element) {
        element.css({marginLeft: "0"});
      },
      start: function(element, done) {
        element.animate({
          marginLeft: "-100%"
        }, function() {
          done();
        })
      }
    }
  })

  .animation("slide-back-in", function() {
    return {
      setup: function(element) {
        element.css({marginLeft: "-100%"});
        var memo = undefined; //this value is passed to the start function
        return memo;
      },
      start: function(element, done, memo) {
        element.animate({
          marginLeft: "0"
        }, function() {
          done();
        })
      }
    }
  })

  .animation("slide-back-out", function() {
    return {
      setup: function(element) {
        element.css({marginLeft: "0"});
      },
      start: function(element, done) {
        element.animate({
          marginLeft: "100%"
        }, function() {
          done();
        })
      }
    }
  });