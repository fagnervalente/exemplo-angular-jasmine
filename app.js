'use strict';

angular.module('myApp',[])
.config(function(){})
  .factory('myService', function($http, $q){

  	var service = {};

  	service.pais = 'Brasil';
  	
  	service.getEstados = function(){
  		var deferred = $q.defer();

	  	$http.get('estados.json')
    		.success(function(data) {
          		// The promise is resolved once the HTTP call is successful.
      			deferred.resolve(data);
    		})
    		.error(function() {
          		// The promise is rejected if there is an error with the HTTP call.
      			deferred.reject();
    		});

	    // The promise is returned to the caller
	  	return deferred.promise;
  	};

    return service;

  })
.run(function ($rootScope) {});



angular.module('myApp')
  .controller('MainCtrl', function ($scope, myService) {
  	$scope.estados = [];
  	$scope.title = 'Estados';

  	console.log(myService.getEstados);

  	myService.getEstados().then(function(res){
      	$scope.estados = res;
      	console.log(res);
    })
    .catch(function(err) {
      	console.log(err);
  	});

  });