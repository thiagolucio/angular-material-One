'use strict';
(function () {
    angular.module('users').controller('UserController', userController)
   /**
    * Main UserController
    * @param $scope
    * @param $mdSidenav
    * @param avatarService
    * @constructor
    */
    function UserController(userService, $mdSidenav, $mdBottom)
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUsersList;
    self.share = share;

    //Load all registered users
    userService
        .loadAllUsers()
        .then(function (users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

});