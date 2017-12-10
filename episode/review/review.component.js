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

  ctrl.$onInit = $onInit;

  function $onInit() {
    var array = [];
    for (var i = 0; i < ctrl.review.rating; i++) {
      array.push(i);
    }
    ctrl.starCount = array
  }
}
