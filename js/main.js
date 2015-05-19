angular.module('demo', []);

angular
    .module('demo')
    .controller('DemoController', function($scope) {

    $scope.values = [];

    for (var i = 1; i <= 100; i++) {
        $scope.values.push(i);

        j = i - 1;

        if (i %  3 == 0) { $scope.values[j] = 'Buzz'; }
        if (i %  5 == 0) { $scope.values[j] = 'Fizz'; }
        if (i % 15 == 0) { $scope.values[j] = 'FizzBuzz'; }
    };
});