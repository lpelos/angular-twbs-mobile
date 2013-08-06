$(function() {
  FastClick.attach(document.body);
});

condominioApp = angular.module("condominioApp", ["ngResource"])
  .run(function($rootScope, $window) {
    $rootScope.defaultForwardTransition = 'animate-slide-left',
    $rootScope.defaultBackwardTransition = 'animate-slide-right';

    $rootScope.backTransition = null,
    $rootScope.transitionClass = null,
    $rootScope.stateHistory = [];

    // Back transitions stores the inverse of a transition
    $rootScope.backTransitions = {
      "animate-slide-left": "animate-slide-right",
      "animate-slide-right": "animate-slide-left",
      "animate-slide-bottom": "animate-slide-top",
      "animate-slide-top": "animate-slide-bottom"
    };

    // Call this function to set a transition when changing pages
    $rootScope.setTransition = function(animation) {
      $rootScope.transitionClass = animation;
    }

    $rootScope.$on("$locationChangeSuccess", function (event, next, current) {
      // Back transition is the opposite of the current transition
      $rootScope.backTransition = $rootScope.backTransitions[$rootScope.transitionClass];

      // url slug : shortening the url to stuff that follows after "#"
      next = next.slice(next.lastIndexOf('#') + 1, next.length);
      $rootScope.stateHistory.push(next);

      // We need to reset the transition after the animations
      // That's the solution for now, deal with it
      $window.setTimeout(function(){
        $rootScope.setTransition(null);
      }, 300);
    });

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      next = next.slice(next.lastIndexOf('#') + 1, next.length);

      // Is it a history back?
      if (next == $rootScope.stateHistory[$rootScope.stateHistory.length - 2]) {
        $rootScope.stateHistory.pop();

        // Didn't choose a transition?
        if (!$rootScope.transitionClass) {
          $rootScope.setTransition($rootScope.backTransition || $rootScope.defaultBackwardTransition);
          return true;
        }
      }

      $rootScope.setTransition($rootScope.transitionClass || $rootScope.defaultForwardTransition);
    });
  });
