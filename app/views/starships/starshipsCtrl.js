angular.module('starwars').controller('starshipsCtrl', function($scope, starshipsSrvc){
    $scope.name = 'starshipsCtrl';
    $scope.data = starshipsSrvc.staticData;
})