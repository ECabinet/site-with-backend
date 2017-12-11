angular
  .module('ecabinet')
  .component('mailing', {
    templateUrl: 'mailing/mailing.html',
    controller:  MailingCtrl,
    bindings:    {
    }
  });

function MailingCtrl($http, $state, GLOBAL_VARIABLES) {
  var ctrl = this;

  ctrl.signup = signup;

  function signup() {
    $http.post(GLOBAL_VARIABLES.API_URL + '/user', {
      fName: ctrl.fName,
      lName: ctrl.lName,
      email: ctrl.email,
      password: ctrl.password,
      phone: ctrl.phone
    }).then(function successCallback(response) {
        $state.go('login');

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
