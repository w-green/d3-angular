describe('main controller', function() {
	beforeEach(angular.mock.module('myApp'));
	
	var scope;

	beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('MainCtrl', {$scope: scope});
    }));

    it('should have name equal to data', function() {
    	expect(scope.data[0].name).toBe('A name')
    });

});