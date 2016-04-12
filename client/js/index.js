// Create the 'core' module and make it depend on 'lbServices'
// 'lbServices' is the module that your 'services.js' file exports
angular.module('core', ['lbServices']).
  // The $user service represents the currently logged in user 
  // and the `User` argument is defined in the lbServices module generated for you
  factory('$user', function(User) {
    var userService = {};
 
    // This function reloads the currently logged in user
    userService.load = function() {
      User.findById({ id: 'me' }, function(v) {
        userService.data = v;
      });
    };
 
    userService.load();
 
    return userService;
  }).
  // Declare the user menu directive
  directive('userMenu', function() {
    return {
      templateUrl: 'templates/user_menu.html',
      controller: function($scope, $user) {
        // Expose the $user service to the template HTML
        $scope.user = $user;
      }
    };
  });
  
var myApp = angular.module('core');
  
myApp.controller('ProdutoController', function($scope, Product) {
    $scope.produtos = [];
    
    Product.find({}, function (data) {
        $scope.produtos = data;
    })
}); 

myApp.controller('CategoriaController', function($scope, Category) {
    $scope.categorias = [];
    
    Category.find({}, function (data) {
        $scope.categorias = data;
    })
});
  