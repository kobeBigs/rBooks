var app = angular.module("rBooks", ["firebase"]);

app.controller("pgCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://shining-fire-6623.firebaseio.com/books");
    //create a synchronised array
    $scope.books = $firebaseArray(ref);
    
    /**add new books automatically
    $scope.books.$add({
        title: "The Beautiful Ones Are Not Yet Born",
        author: "Ayi Kwei Armah",
        blurb: "This novel is a treatment of the theme of corruption wrought by poverty. It is the story of an upright man resisting the temptations of easy bribes and easy satisfactions and winning for his honesty nothing but scorn even from those he loves.",
        cover: "https://books.google.com.gh/books/content?id=adDP11OQ-7oC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7327dDs3bMRrt3RRGPGwVFBd9dHQvWtzzth62bp84-9513vJ74T1-1NIj7cxczrqZDW9GQbSsc8WWMe3joIOuXRI2DBCsV5czC4d5AGC75oGO2n6wWrUwgtrTxoywXKg3G2knYn"
        });
    **/
    
    var rev = new Firebase("https://shining-fire-6623.firebaseio.com/comments");
    
    $scope.comments = $firebaseArray(rev);
    
    $scope.addComment = function() {
        $scope.comments.$add({
        text: $scope.newCommentText
        });
    };
});