(function () {
    'use strict';

    angular
        .module('angularApp')
            .controller('Item', Item);

    Item.$inject = ['$stateParams', 'AppService'];


    function Item($stateParams, AppService) {

        var vm = this;

       function init(){

           vm.selectedItem = {
               id:$stateParams.itemId,
               name:$stateParams.name
           }
           getItem();
       }

        function getItem() {
            vm.question =  AppService.getQuestion($stateParams.itemId);
            if(vm.question.fnExecute===true){
                vm.question.function();
            }
        };

       vm.submit = function(){
           vm.question.function(vm.param1);
       }


        init();
    }

})();


