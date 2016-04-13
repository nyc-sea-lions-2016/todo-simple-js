function localizedDateFromInput(inp) {
  /*

  Javascript has some funky date handling. If we run

  new Date('2016-02-22')  in New York we get
  Sun Feb 21 2016 19:00:00 GMT-0500 (EST)
  This will change in ES6 to use local time zone.

  new Date('4/3/15') gives a local zone date
  Fri Apr 03 2015 00:00:00 GMT-0400 (EDT)

  BUT in Europe 4/3/15 means 4th March not April 3rd.
  So using local format is dangerous

  BUT if we run
  new Date(2016, 2, 22) we get 
  Tue Mar 22 2016 00:00:00 GMT-0400 (EDT)
  as months are zero-based 
  (hangover from java) though this format does give us
  at least a localized date

  So to get a local timezone date from a string like 2015-04-03
  e.g. from an HTML5 date input is much more complex than we might expect
  */

  var arr = inp.split('-');
  // decrement  month value so that e.g. Jan is 0 rather than 1
  arr[1] = arr[1] -1;
  return new Date(arr[0], arr[1], arr[2]);

}

function View() {
  this.$displayElement = $('#list');
  this.$form = $('form#new_task');
  this.setupHandling();
}

View.prototype.drawList = function(todoList) {
  var tasks  = todoList.list;
  var html = '<ul>';
  tasks.forEach(function(task){
    html += '<li>';
    html += task.description;
    html += '</li>';
  });
  html += '</ul>';
  console.log(html);
  this.$displayElement.html(html);
}

View.prototype.setupHandling = function() {
  var that = this;
  this.$form.on('submit', function(event) {
    event.preventDefault();
    var params = {
      description: $('#description').val(),
      dueAt: localizedDateFromInput($('#due').val()),
      done: $('#done').is(':checked')
    }
    that.controller.addTask(params);
  });

}