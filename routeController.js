;(function() {
	angular.module('app',[]).controller('routeController', function ($scope, $http) {//создаем  модуль и контроллер
		var date = new Date();
		$scope.timeTraker = date;
		$scope.el = {};
		
		$scope.personList_body = [];//массив для данных таблицы 
		//$scope.
		// Данные
		var data =  [
			{
				"name": "разработать программу", 
				"time_for_work": 5, 
				"task_cost": 500, 
				"time_and_cost": 2500 
			},
			{
				"name": "протестировать задачу",
				"time_for_work": 2, 
				"task_cost": 300, 
				"time_and_cost": 600 
			},
			{
				"name": "упростить  сервис",
				"time_for_work": 3, 
				"task_cost": 400,
				"time_and_cost": 1200
			}
		]
		
		// проверка
		var list = localStorage.getItem("personList_body")
		if (!list) {
			$scope.personList_body = data;
			localStorage.setItem("personList_body", angular.toJson(data));
		} else {
			$scope.personList_body = angular.fromJson(list)
		}
		
		
		$scope.select = function(person) {// функция,позволяющая данные,вводимые в поля формы, отображать в соответствующих полях
											//редактируемой строки таблицы
			$scope.selected = person;
		}
		
		// Редактирование - аналог select
		$scope.edit = function(item) { 
			$scope.nowEditingItem = item;
		};
		 
		$scope.$watch("personList_body", function () {
			localStorage.setItem("personList_body", angular.toJson($scope.personList_body))
		}, true);
		
		
		$scope.add = function() { 
			//$scope.personList_body.push(angular.copy($scope.nowEditingItem));
			var item = {}
			$scope.edit(item);
			$scope.personList_body.push(item);
		} 
		
		$scope.del = function(index) {
			$scope.personList_body.splice(index, 1);
			$scope.nowEditingItem = null;
		}
		
		$scope.del_several = function() {
			 $scope.personList_body = $scope.personList_body.filter(function(item) { return item.$deleted !== true })
		}
	 
	});

}());	