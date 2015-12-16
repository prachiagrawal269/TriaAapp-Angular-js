// angular module
// "$scope" here is like a bridge between controllers and templates

angular.module('flapperNews', [])

.controller('MainCtrl',[

'$scope', function($scope){
  $scope.test = 'Hello World';

  $scope.posts = [
  /*{ title: 'post 1', upvotes: 5},
    { title: 'post 2', upvotes: 2}
    */
  ] ;

  // function that allows addition of posts by the user.
  $scope.addPost = function(){

    if(!$scope.title || $scope.title === ''){return ;}

    $scope.posts.push({title: $scope.title , upvotes: 0});
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

  $scope.decrementUpvotes = function(post){

    if(post.upvotes==0) {return ;}
    post.upvotes -= 1;
  };

}
]);
