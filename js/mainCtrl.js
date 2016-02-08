angular.module('christmasPartyApp').controller('mainCtrl', function($scope, mainService) {
    $scope.getUserInfo = function() {
        mainService.getUserInfo()
            .then((info) => {
            console.log('ctrl', info)
            $scope.info = info;
        });
    };
    $scope.getUserInfo();
});