angular.module('christmasPartyApp').service('mainService', function($http) {
    this.getUserInfo = function() {
        return $http({
            method: 'GET',
            url: 'https://ahojwxfmyizyvfk.form.io/user/submission'
        }).then((info) => {
            console.log('service', info.data)
            return info.data;
        });
    };
});