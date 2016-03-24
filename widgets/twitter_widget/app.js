"use strict";
/* eslint-disable */
const TwitterApp = angular.module("TwitterWidget", ["ui.router"]);


TwitterApp.config(function($stateProvider, $urlRouterProvider) {
    console.log('got here');
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "./twitter_widget/partials/default.html",
            controller: "DefaultCtrl"
        });
    $urlRouterProvider.otherwise("/");
});
