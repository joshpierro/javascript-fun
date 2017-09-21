/* -------Filters------- */
(function () {

    // format a js date
    angular
        .module('angularApp')
            .filter('dateFormat', function ($filter) {

                return function(input) {
            if (input == null) {
                return "--";
            }
            var date = $filter('date')(new Date(input), 'MM/dd/yyyy');

            return date;

        };
    });


})();