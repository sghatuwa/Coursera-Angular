// (function (){
//   'use strict';
//
//   angular.module('LunchCheck', [])
//   .controller('LunchCheckController', LunchCheckController);
//   LunchCheckController.$inject = ['$scope'];
//
//   function LunchCheckController($scope){
//     var menu = $scope.lunchMenu;
//     $scope.checkMenu = function (){
//       var menu = $scope.lunchMenu;
//       if(!menu)
//         $scope.message = "Please enter data first";
//       else {
//         var arrayOfStrings = menu.split(",");
//         var count = 0;
//         for(var i=0; i< arrayOfStrings.length; i++) {
//           if(arrayOfStrings[i].trim())
//             count ++;
//         }
//         if(count <= 3)
//           $scope.message = "Enjoy!";
//         else {
//           $scope.message = "Too much!";
//         }
//       }
//     };
//   };
// })();

!function(){"use strict";function e(e){e.lunchMenu;e.checkMenu=function(){var n=e.lunchMenu;if(n){for(var c=n.split(","),t=0,u=0;u<c.length;u++)c[u].trim()&&t++;3>=t?e.message="Enjoy!":e.message="Too much!"}else e.message="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
