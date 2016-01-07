/* global require */

'use strict';

var Drag = require('./lib/drag');
var angular = require('angular');

var angularDrag = angular.module('angular-drag', []);

angularDrag.directive('drag', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            var dragNode = elem[0];
            var dragHandle = dragNode.querySelector('[drag-handle]');

            if (!dragHandle) {
                new Drag(dragNode);
            }
        }
    };
});

angularDrag.directive('dragHandle', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            var dragNode = elem[0];

            while (!dragNode.hasAttribute('drag')) {
                dragNode = dragNode.parentNode;
            }

            elem.on(Drag.START, function(event) {
                new Drag(dragNode, event);
                event.preventDefault();
            });
        }
    };
});