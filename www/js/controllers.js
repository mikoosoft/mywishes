angular.module('mywishes.controllers', [])

.controller('DashCtrl', function($scope, Wishlist) {
      $scope.wishlist = Wishlist.my();
    })

.controller('WishesCtrl', function($scope, Wishlist) {
  $scope.wishlist = Wishlist.my();
  $scope.remove = function(wish) {
    Wishes.remove(wish);
  }
})

.controller('WishDetailCtrl', function($scope, $stateParams, Wishlist) {
  $scope.wish = Wishlist.get($stateParams.wishId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AboutCtrl', function($scope) {
  $scope.version = "0.0.1";
})
;
