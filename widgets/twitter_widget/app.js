"use strict";
/* eslint-disable */
const TwitterApp = angular.module("TwitterWidget", ["ui.router"]);


TwitterApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('twIndex', {
            url: "/",
            templateUrl: "./widgets/twitter_widget/partials/default.html",
            controller: "DefaultCtrl"
        });
});
