angular.module('myApp.controllers', [])
	.controller('MainCtrl', function($scope) {
	  $scope.data = [
	    {name: 'A name', score: 10},
	    {name: 'B name', score: 90}
	    ];
	})