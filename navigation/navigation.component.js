angular
  .module('ecabinet')
  .component('navigation', {
    templateUrl: 'navigation/navigation.html',
    controller:  NavigationCtrl,
    bindings:    {
    }
  });

function NavigationCtrl(podcastFactory, $http, GLOBAL_VARIABLES, $state) {
	var ctrl = this;

	ctrl.loggedIn = loggedIn;
  ctrl.logout = logout;
  ctrl.isAdmin = isAdmin;

	function loggedIn() {
		return podcastFactory.authenticated();
	}

  function logout() {
    return podcastFactory.logout();
  }

  function isAdmin() {
    return podcastFactory.isAdmin();
  }
}
