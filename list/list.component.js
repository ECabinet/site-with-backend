angular
  .module('ecabinet')
  .component('list', {
    templateUrl: 'list/list.html',
    controller:  ListCtrl,
    bindings:    {
    }
  });

function ListCtrl(podcastFactory) {
  var ctrl = this;

  ctrl.episodes = podcastFactory.getAll();
}
