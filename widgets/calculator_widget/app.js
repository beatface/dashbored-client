"use strict";
/* eslint-disable */
const CalculatorApp = angular.module("CalculatorWidget", ["ui.router"]);


CalculatorApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('calIndex', {
            url: "/",
            templateUrl: "./widgets/calculator_widget/partials/calculator.html",
            controller: "CalculatorCtrl"
        });
});
