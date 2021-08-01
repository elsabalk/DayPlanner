var textAreaBlock = $("textarea");
var saveButton = $("#saveBtn");

// Render current date
var currentDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// Get current hour
var currentHour = moment().format("H");
console.log("Your current hour is:" + currentHour);

// Start
$(document).ready(function () {

  // For each based on textarea tag
    textAreaBlock.each(function () {
        
      // Grab id from textarea tag
        var textareaId = this.id;        
        var textareaVal = localStorage.getItem('itemArr['+textareaId+']');
        $("#"+textareaId).val(textareaVal);

        // Compare current hour with storage ids to color code calendar
        var textHour = $("#input_" + textareaId).val();

        // Logic to append class based on current time vs input id block
        if (parseInt(textHour) < parseInt(currentHour)) 
        {
            $("textarea#" + textareaId).addClass("past");
        } 
        else if (parseInt(textHour) == parseInt(currentHour)) 
        {
            $("textarea#" + textareaId).addClass("present");
        } 
        else if (parseInt(textHour) > parseInt(currentHour)) 
        {
            $("textarea#" + textareaId).addClass("future");
        }
    });
});

// Save button that takes in an id and stores to local storage
function saveBtn(id){
  var txtarea = $("#"+id).val();
  localStorage.setItem('itemArr['+id+']', txtarea);  
  location.reload();  
}