angular
  .module('ecabinet')
  .component('listEpisode', {
    templateUrl: 'list/listEpisode/listEpisode.html',
    controller:  ListEpisodeCtrl,
    bindings:    {
    	episode: '<'
    }
  });

function ListEpisodeCtrl() {
  var ctrl = this;
}
