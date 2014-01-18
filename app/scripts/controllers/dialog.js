'use strict';

angular.module('sheetApp')
	.controller('DialogCtrl', function ($scope, ngDialog) {
		$scope.items = $scope.dialog.items;
		$scope.item = $scope.dialog.item;
		$scope.mode = $scope.dialog.mode;
		$scope.deleteText = 'Delete';

		// General

		$scope.remove = function () {
			if ($scope.deleteText === 'Delete') {
				$scope.deleteText = 'Confirm?';
			} else {
				var index = $scope.items.indexOf($scope.item);
				$scope.items.splice(index, 1);
				ngDialog.close();
			}
		};

		$scope.confirmRemove = function () {
			var index = $scope.items.indexOf($scope.item);
			$scope.items.splice(index, 1);
			ngDialog.close();
		};

		$scope.close = function () {
			ngDialog.close();
		};

		$scope.dismiss = function () {
			var index = $scope.items.indexOf($scope.item);
			$scope.items.splice(index, 1);
			ngDialog.close();
		};

		// Spell Related

		$scope.prepare = function () {
			$scope.item.prepared++;
		};

		$scope.cast = function () {
			if ($scope.item.cast < $scope.item.prepared) {
				$scope.item.cast++;
			}
		};

		$scope.clearCounts = function () {
			$scope.item.prepared = 0;
			$scope.item.cast = 0;
		};
	});
