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
                console.log(scope);
                angular.forEach(scope.images, function(v){
                    iElement.append(angular.element('<div class="grid-item"><img src='+v+' /></div>'));
                });
            },
            controller: ['$scope', '$http', function($scope) {
                console.log($scope);
                var grid = document.querySelector('.grid');
                var msnry = new Masonry( grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });
                
                imagesLoaded( grid ).on('done', function() {
                    console.log("done!")
                    msnry.layout();
                });
            }]
        };
    });
}());