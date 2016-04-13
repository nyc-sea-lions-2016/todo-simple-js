function Controller(todoList, view) {
  this.todoList = todoList;
  this.view = view;
}

Controller.prototype.index = function() {
  this.view.drawList(this.todoList);
}

Controller.prototype.addTask = function(params) {
  var t = new Task(params);
  this.todoList.addTask(t);
  this.view.drawList(this.todoList); 
}

var l = new TaskList();
var v = new View();
var controller = new Controller(l, v);
v.controller = controller;


// Below is test driver code so that we don't start with an empty list....
l.addTask(new Task({description:'Buy milk', dueAt:'2016-04-13', done:false}));
l.addTask(new Task({description:'Buy dog food', dueAt:'2016-04-13', done:false}));
l.addTask(new Task({description:'Get a job', dueAt:'2016-05-31', done:false}));
console.log(l);
v.drawList(l);



