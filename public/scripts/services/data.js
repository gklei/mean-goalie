'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.getTodos = function(cb) {
    $http.get('/mock/tasks.json').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
  };
  
});
