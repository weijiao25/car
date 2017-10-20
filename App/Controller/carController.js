app.controller('carController',['$scope','carServer',function($scope,carServer){
    carServer.get().then(function(res){
        $scope.obj=res;
        console.log(res);
    })

}]);
