var app = angular.module('gitApp', []);

app.controller('gitController', ['$scope', '$http', function($scope, $http) {
  $scope.users = {};
  $scope.userImage = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
  //create a function to make a call to git and populate an object with data of result
  $scope.searchGit = function() {
    $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + $scope.searchString
    }).then(success, error);
  };

  var success = function (response) {
    console.log('Success!', response);

    $scope.searchString = '';

    $scope.users = {};
    $scope.userImage = response.data.avatar_url;
    $scope.userName = response.data.login;
    $scope.users.followers = response.data.followers;
    $scope.users.following = response.data.following;
    $scope.users.publicRepos = response.data.public_repos;
    $scope.users.createdAt = response.data.created_at;
  }

  var error = function (response) {
    console.log('User not found!');

    $scope.searchString = '';
    
    $scope.userImage = 'http://clarify.io/wp-content/uploads/2015/07/github-octobiwan.jpg';
    $scope.users = {};
    $scope.userName = '';
    $scope.users.ThisUserDoesNotExist = '';
  }
}]);