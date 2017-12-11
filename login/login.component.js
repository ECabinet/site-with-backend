angular
  .module('ecabinet')
  .component('login', {
    templateUrl: 'login/login.html',
    controller:  LoginCtrl,
    bindings:    {
    }
  });

function LoginCtrl($http, GLOBAL_VARIABLES, $state, podcastFactory) {
  var ctrl = this;

  ctrl.login = login;

  function login() {
    $http.post(GLOBAL_VARIABLES.API_URL + '/login', {
      email: ctrl.email,
      password: ctrl.password
    }).then(function successCallback(response) {
        podcastFactory.getProfile();
        $state.go('podcasts');
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
