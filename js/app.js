var app = angular.module("rBooks", ["firebase"]);

app.controller("pgCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://shining-fire-6623.firebaseio.com/messages");

  // create a synchronised array
  $scope.messages = $firebaseArray(ref);

  // add new items to the array
  $scope.addMessage = function(){
      $scope.messages.$add({
        text: $scope.newMessageText
      });
  };

});
