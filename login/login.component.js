angular
  .module('ecabinet')
  .component('login', {
    templateUrl: 'login/login.html',
    controller:  LoginCtrl,
    bindings:    {
    }
  });

function LoginCtrl() {
  var ctrl = this;
}
