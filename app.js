var myApp = angular.module('ecabinet', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $sceProvider, $httpProvider) {
  var landingState = {
    name: 'landing',
    url: '/',
    templateUrl: 'landing.html'
  };

  var listState = {
    name: 'podcasts',
    url: '/podcasts',
    component: 'list'
  };

  var episodeState = {
    name: 'episode',
    url: '/podcasts/{podcastId}',
    component: 'episode'
  };

  var mailingState = {
    name: 'mailing',
    url: '/mailing',
    component: 'mailing'
  };

  var loginState = {
    name: 'login',
    url: '/login',
    component: 'login'
  };

  $stateProvider.state(landingState);
  $stateProvider.state(listState);
  $stateProvider.state(episodeState);
  $stateProvider.state(mailingState);
  $stateProvider.state(loginState);

  $urlRouterProvider.otherwise('/');

  $sceProvider.enabled(false);

  $httpProvider.defaults.withCredentials = true;
});
