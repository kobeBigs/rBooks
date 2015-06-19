var app = angular.module("rBooks", ["firebase"]);

app.controller("pgCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://shining-fire-6623.firebaseio.com/books");
    //create a synchronised array
    $scope.books = $firebaseArray(ref);
});