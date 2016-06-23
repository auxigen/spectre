(function () {
    "use strict";
    angular.module("Spectre").directive('masonry', function () {
        return {
            restrict: 'E',
            scope: {
                images: "="
            },
            templateUrl: 'modules/masonry/templates/masonry.main.template.html',
            link: function(scope, iElement, iAttrs) {
                ///*
                var html = '<div class="grid-sizer"></div>';
                angular.forEach(scope.images, function(v){
                    html += '<div class="grid-item"><img src='+v+' /></div>'
                });
                
                iElement.find('div').html(html);
                //*/
                
            },
            controller: ['$scope', '$http', function($scope) {
                
                var grid = document.querySelector('.grid');
                var msnry = new Masonry( grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });
                
                imagesLoaded( $scope.images ).on('always', function(instance) {
                    console.log(instance, msnry)
                    msnry.layout();
                });
            }]
        };
    });
}());