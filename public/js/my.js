var app = angular.module("defApp", []);

app.controller("defCtrl", function ($scope, $http) {
    $scope.screenName = "SoftServeCareer";

    $scope.FindBtUserName = function () {
        $http.post('http://localhost:8000/getTwitts/', {
                screenName: $scope.screenName
            })
            .then(function successCallback(res) {
                $scope.TimeLine = res.data;
            }, function errorCallback(res) {
                console.log("Error!!! " + res.data);
            });
    }

});
