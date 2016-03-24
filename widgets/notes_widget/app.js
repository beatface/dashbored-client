"use strict";
/* eslint-disable */
const NotesApp = angular.module("NotesWidget", ["ui.router"]);

NotesApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "./widgets/notes_widget/partials/show_all.html",
            controller: "ShowNotesCtrl"
        })
        .state('add', {
            url: "/notes/add",
            templateUrl: "./widgets/notes_widget/partials/add.html",
            controller: "AddNotesCtrl"
        })
        .state('show-one', {
            url: "/notes/:id",
            templateUrl: "./widgets/notes_widget/partials/show_one.html",
            controller: "ShowOneCtrl"
        })
        .state('edit', {
            url: "/notes/:id/edit",
            templateUrl: "./widgets/notes_widget/partials/edit.html",
            controller: "EditNoteCtrl"
        });
});
