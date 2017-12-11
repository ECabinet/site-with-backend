angular
  .module('ecabinet')
  .component('navigation', {
    templateUrl: 'navigation/navigation.html',
    controller:  NavigationCtrl,
    bindings:    {
    }
  });

function NavigationCtrl(podcastFactory) {
	var ctrl = this;

	ctrl.loggedIn = loggedIn;

	function loggedIn() {
		return podcastFactory.authenticated();
	}
}
