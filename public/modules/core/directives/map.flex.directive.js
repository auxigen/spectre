(function () {
    'use strict';
    angular.module('Spectre')
        .directive('ttLeafletFlexFit', leafletFlexFit);

    leafletFlexFit.$inject = ['$timeout', 'leafletData'];

    
    function compile(tElem, attrs) {
        tElem.attr('flex', '');

        // A hack to get Leaflet to fill the flex container.
        // @link https://github.com/tombatossals/angular-leaflet-directive/issues/950
        leafletData.getMap().then(function (map) {
            $timeout(function () {
                map.invalidateSize();
            });
        });
    }
    function leafletFlexFit($timeout, leafletData) {
        var directive = {
            restrict: 'A',
            compile: compile
        };

        return directive;
    }
}());