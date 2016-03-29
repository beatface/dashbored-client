"use strict";

ClockApp.controller('ClockCtrl', ["$scope", "$interval", "$timeout", function($scope, $interval, $timeout) {

    var mins_angle = 0;

    (function setup() {
        initLocalClock();
        moveSecondHands();
        setUpMinuteHands();
    })();

    function initLocalClock() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        // Create an object with each hand and it's angle in degrees
        const hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6)
            },
            {
                hand: 'seconds',
                angle: (seconds * 6)
            }
        ];
        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            var currentHand = hands[j].hand;
            currentHand === 'hours' ? $scope.hours_style = 'rotateZ('+ hands[j].angle +'deg)' : null;
            currentHand === 'minutes' ? $scope.minutes_style = 'rotateZ('+ hands[j].angle +'deg)' : null;
            currentHand === 'seconds' ? $scope.seconds_style = 'rotateZ('+ hands[j].angle +'deg)' : null;

            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (hands[j].hand === 'minutes') {
                mins_angle = hands[j + 1].angle;
            }
        }
    } // end initLocalClock


    function moveSecondHands() {
        var secs_angle;
        $interval(function() {
            if (secs_angle === undefined) {
                secs_angle = 6;
            } else {
                secs_angle += 6;
            }
            $scope.secs_container_style = 'rotateZ('+ secs_angle +'deg)';
      }, 1000);
    }

    //  Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
    function setUpMinuteHands() {
      if (mins_angle > 0) {
        // Set a timeout until the end of the current minute, to move the hand
        var delay = (((360 - mins_angle) / 6) + 0.1) * 1000;
        $timeout(function() {
            moveMinuteHand();
        }, delay);
      }
    }

    function moveMinuteHand() {
        var mins_container_angle;
        $scope.mins_container_style = 'rotateZ(6deg)';
        $interval(function() {
            if (mins_container_angle === undefined) {
                mins_container_angle = 12;
            } else {
                mins_container_angle += 6;
            }
            $scope.mins_container_style = 'rotateZ('+ mins_container_angle +'deg)';
        }, 60000);
    }


}]);

angular.bootstrap(document.getElementById("clock-widget"), ['ClockWidget']);
