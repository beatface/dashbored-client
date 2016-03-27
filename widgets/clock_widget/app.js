"use strict";
/* eslint-disable */
const ClockApp = angular.module("ClockWidget", ["ui.router"]);


ClockApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('clockIndex', {
            url: "/",
            templateUrl: "./widgets/clock_widget/partials/clock.html",
            controller: "ClockCtrl"
        });
});
