angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})


.controller('CalculatorCtrl', function($scope) {
  clear();

  $scope.clear = clear;
  $scope.inputDigit = inputDigit;
  $scope.inputOperator = inputOperator;
  $scope.calculate = calculate;


  function clear() {
    $scope.operand = 0;
    $scope.expression = '';
    $scope.lastInputIsOperator = false;
    $scope.equalToPressed = false;
    $scope.tempExpression = '';
  }

  function inputDigit(digit) {
    if ($scope.lastInputIsOperator || ($scope.operand === 0 && digit !== 0) || ($scope.equalToPressed)) {
      //$scope.tempExpression = '';
      $scope.operand = parseInt(digit, 10);
      $scope.equalToPressed = false;
      $scope.tempExpression = $scope.expression;
    } else {
      $scope.operand = ($scope.operand * 10) + parseInt(digit, 10);
    }
    $scope.lastInputIsOperator = false;
    console.log($scope.operand);
  }

  function inputOperator(operator) {
    console.log($scope.operand);
    $scope.expression = $scope.expression + ' ' + $scope.operand + ' ' + operator;
    $scope.tempExpression = $scope.expression;
    $scope.lastInputIsOperator = true;
  }


  function calculate() {
    $scope.expression = $scope.expression + ' ' + $scope.operand;
    $scope.tempExpression = $scope.expression;

    console.log($scope.expression);
    console.log($scope.tempExpression);
    
    
    $scope.operand = eval($scope.expression);
    //$scope.expression = $scope.operand;
    $scope.lastInputIsOperator = false;
    $scope.equalToPressed = true;
    $scope.expression = '';
  }  

});
