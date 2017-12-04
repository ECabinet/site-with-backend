angular
  .module('ecabinet')
  .component('review', {
    templateUrl: 'episode/review/review.html',
    controller:  ReviewCtrl,
    bindings:    {
    	review: '<'
    }
  });

function ReviewCtrl() {
  var ctrl = this;
}
