var app=angular.module('app',['ui.router']);

app.config(function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.hashPrefix('');
    $stateProvider
        .state("car",{
            url:"/car",
            templateUrl:"./App/View/_car.html"
        });
    $urlRouterProvider.otherwise("/serve")
});
