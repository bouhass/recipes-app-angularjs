var recipesApp = angular.module('recipesApp', ['ngRoute']);


recipesApp.factory('simpleFactory', function () {
        var factory = {}
        var ingredients = [
            {name: 'bergamot', profile: 'citrusy'},
            {name: 'jasmin', profile: 'floral'},
            {name: 'vetiver', profile: 'woody'}
        ];
        factory.getIngredients = function () {
            return ingredients;
        }
        return factory;
    });

recipesApp.controller('SimpleController', function ($scope, simpleFactory) {
        $scope.ingredients = simpleFactory.getIngredients();

        $scope.addIngredient = function () {
            $scope.ingredients.push({
                name: $scope.newIngredient.name,
                profile: $scope.newIngredient.profile
            });
        };
    });

recipesApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'fragments/view1.html'
        })
        .when('/view2',
        {
            controller: 'SimpleController',
            templateUrl: 'fragments/view2.html'
        })
        .otherwise({ redirectTo: '/'});
});
