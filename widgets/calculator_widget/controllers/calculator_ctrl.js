"use strict";

CalculatorApp.controller('CalculatorCtrl', ['$scope', function($scope) {

    $scope.answer = null;
    $scope.output = "";
    var equation = "";
    const operators = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
    };

    $scope.updateOutput = (selection) => {
        equation += selection;
        $scope.output = equation;
    };

    $scope.updateOperator = (operator) => {
        equation += ` ${operators[operator]} `;
        $scope.output = equation;
    };

    $scope.calculate = () => {
        $scope.output = eval(equation);
        equation = '';
    };

    $scope.clear = () => {
        equation = '';
        $scope.output = equation;
    };

}]);

angular.bootstrap(document.getElementById("calculator-widget"), ['CalculatorWidget']);
