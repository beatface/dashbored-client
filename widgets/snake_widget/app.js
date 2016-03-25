"use strict";
/* eslint-disable */
const SnakeApp = angular.module("SnakeWidget", ["ui.router"]);


SnakeApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('twIndex', {
            url: "/",
            templateUrl: "./widgets/snake_widget/partials/game.html",
            controller: "SnakeCtrl"
        });
});
