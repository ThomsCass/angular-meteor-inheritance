angular
    .module('event')
    .controller('accueilController', accueilController);

accueilController.$inject = ['$reactive', '$scope', '$mdDialog'];

function accueilController($reactive, $scope, $mdDialog) {

    $reactive(this).attach($scope);
    var vm = this;

    vm.showAdd = showAdd;

    vm.subscribe('evenements');

    vm.helpers({
        evenements: () => Evenements.find({})
    });

    function showAdd(ev) {
        $mdDialog.show({
                controller: DialogController,
                controllerAs: 'vm',
                clickOutsideToClose: true,
                templateUrl: 'client/accueil/add.html',
                targetEvent: ev

            })
            .then(function (event) {
                Meteor.call('insertEvent', event);
                Meteor.call('insertVille', event.ville);
            }, function () {

            });
    }

    function DialogController($mdDialog) {

        $reactive(this).attach($scope);
        let vm = this;
        vm.subscribe('villes');

        vm.helpers({
            ville: () => Villes.find({}),
        });

        vm.cancel = function () {
            $mdDialog.cancel();
        };
        vm.answer = function (event) {
            $mdDialog.hide(event);
        };

    }
}