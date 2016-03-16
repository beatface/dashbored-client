"use strict";
/* eslint-disable */
const app = angular.module("NotesWidget", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "./notes_widget/partials/show_all.html",
            controller: "ShowNotesCtrl"
        })
        .state('add', {
            url: "/notes/add",
            templateUrl: "./notes_widget/partials/add.html",
            controller: "AddNotesCtrl"
        })
        .state('show-one', {
            url: "/notes/:id",
            templateUrl: "./notes_widget/partials/show_one.html",
            controller: "ShowOneCtrl"
        });
    $urlRouterProvider.otherwise("/");
});
