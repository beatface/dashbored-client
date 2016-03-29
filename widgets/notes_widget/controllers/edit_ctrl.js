"use strict";

NotesApp.controller('EditNoteCtrl', ['$scope', '$http', '$state', 'NoteFactory', function($scope, $http, $state, NoteFactory) {

    let thisNote = NoteFactory.getNote();

    $scope.noteTitle = thisNote.title;
    $scope.noteContent = thisNote.content;

    $scope.updateNote = (title, note) => {
        $http.post(`http://127.0.0.1:3153/notes/${thisNote.id}`, { "title": title, "content": note })
        .then(function(success) {
            console.log(`The note got posted!`, success.data);
        },
        function(err) {
            console.log("Something went wrong: ", err.data);
        });
    };

}]);

NotesApp.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
