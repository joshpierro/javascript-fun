(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('List', List);

    List.$inject = ['AppData','AppService'];

    function List(AppData,AppService) {
        var vm = this;

        function init(){
            getAllItems();

        }

        function getAllItems() {
            vm.allItems = AppData.getItems();
        }

        init();

    }

})();