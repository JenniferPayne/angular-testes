(function() {

  var app = angular.module("gitHubViewer", []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.tempo = response.data;
      
      eval($scope.tempo.toString());

      console.log($scope.tempo);
    };


    var onError = function(reason) {
      $scope.error = "Deu Ruim";
    };


      $http.get("http://selo.cptec.inpe.br/IBGE/cidade/json/240720")
      .then(onUserComplete, onError);      


  };
  
  app.controller("MainController", ["$scope", "$http", MainController]);

}());