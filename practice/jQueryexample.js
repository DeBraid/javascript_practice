// Lesson 27

// document (a JS object, no "" wrapper) is entire set of HTML (top level in DOM)
// .ready is the event
// function() is what we're listening to (its "bound" to event)
// ALL JQ starts like this
$(document).ready(function(){

});

// submit is the event, not DOM element.  Form is DOM element
// click events are from buttons, 
// forms are from submit events like hitting enter
$("form").submit(function(event){
  event.preventDefault(); //preventD is action

  // input is the class, todo is the id
  // this is why id must be unique!

  var todo_item = $("input#todo").val(); 
  // val get value of input field and stores as vairable

  // below return the jQ object which is selected (the part in HTML)
  // on is current command for jQ (used to be live, before that bind)
  // "click" is our event (the bottom on html page) 
  var new_todo_item = $("<li><input type='checkbox'/>" + todo_item + " </li>").on("click", function() {
    $(this).toggleClass("completed");
  });
  // $(this), exactly the same as self.method_name in Ruby, 
  // refers to the object that is answering or handling the message 
  // in jq it refers to object that is handling the event

  $("ul").append(new_todo_item);

  $("input#todo").val("");
  {);

});



val ("") val () -- diff between getting and setting.  () gets, ("stuff") sets.


























