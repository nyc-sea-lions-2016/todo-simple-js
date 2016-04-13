function Task(args) {
  args = args || {};
  this.description = args.description;
  this.dueAt = new Date(args.dueAt);
  this.done = args.done;
}

function TaskList(list) {
  this.list = list || [];
}

TaskList.prototype.maxId = function() {
  // var max = 0;
  // for (var i =0 ; i< this.list.length; i++) {
  //   console.log(max);
  //   console.log(this.list[i].id);
  //    max = Math.max(max, this.list[i].id);
  // }
  // return max;

  return this.list.reduce(function(a,b){
    return Math.max(a, b.id);
  }, 0);
}

TaskList.prototype.addTask = function(task) {
  task.id = 1 + this.maxId();
  this.list.push(task);
};

Task.prototype.timeLeft = function() {
  return this.dueAt.getTime() - new Date().getTime();
}

TaskList.prototype.removeTask = function(targetId) {
  this.list = this.list.filter(function(t){
    return targetId != t.id;
  });
};
