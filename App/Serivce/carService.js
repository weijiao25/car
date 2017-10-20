app.factory('carServer',function($http){
    var ser={
        get:function(){
            return $http.get('./Data/data.json').then(function(result){

                return result.data;
            })
        }

    };
    return ser;
});
