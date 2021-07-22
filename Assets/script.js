var saveButton = document.querySelector(".saveBtn");
var renderTxtArea1 = document.querySelector("#firstRow");
var apptConfirmation = document.querySelector("#saveConfirmation");
var txtBoxHourCount = $('.hour');
var txtBoxHourCount2 = $('.hour').attr("value");
var descriptionTextArea = $('.description');




// List all textareas ids
var sevenAmArea = $('#sevenAm');
var eightAmArea = $('#eightAm');
var nineAmArea = $('#nineAm');
var tenAmArea = $('#tenAm');
var elevenAmArea = $('#elevenAm');
var twelvePmArea = $('#twelvePm');
var onePmArea = $('#onePm');
var twoPmArea = $('#twoPm');
var threePmArea = $('#threePm');
var fourPmArea = $('#fourPm');
var fivePmArea = $('#fivePm');
var sixPmArea = $('#sixPm');

var currentDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text(currentDate);

var currentHour = moment().format('h A');
console.log("Hi this is the current hr " + currentHour);


//Returns all values

$( '.hour').each(function(index) {
  console.log($( this ).text() );
 
  if(currentHour > $( this ).text())
 
  {
  sevenAmArea.removeClass("past future").addClass("present");
 
 
  }
 
  //swap out for currentHr
  var tempa= "7 AM"
  if(tempa != $( index ).text())
  {
       nineAmArea.removeClass("past future").addClass("present");
 
  }
 
  if(tempa == $( index ).text())
  {
       nineAmArea.removeClass("past future").addClass("present");
 
  }
 
 
 
  if(tempa == $( index ).text())
  {
 
   $(index).children(".description").removeClass("present future").addClass("past");
     
    console.log( index + ": " + $( this ).text() + "We found it");
 
  }
   
 
});



// Loops to get count
for (var i = 0; i < txtBoxHourCount.length; i++) {


   if (i == currentHour){


    $('#7 AM').removeClass("past future").addClass("past");
  }




  //   else if (temp == currentHour)
  //   {
     
  //     $('.description').removeClass("past future").addClass("present")[i];
  //   }

  //  else
  //   {
  //     $('.description').removeClass("present future").addClass("past")[i];

  //   }
  }
 




  // if (currentHour == 1){
  //   eightAmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 2){
  //   nineAmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 3){
  //   tenAmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 4){
  //   eleventAmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 5){
  //   twelvePmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 6){
  //   onePmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 7){
  //   twoPmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 8){
  //   threePmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 9){
  //   fourPmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 10){
  //   fivePmArea.removeClass("past future").addClass("present");}

  // if (currentHour == 11){
  //   sixPmArea.removeClass("past future").addClass("present");}



  //   if (currentHour < 0){
  //     sevenAmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 1){
  //     eightAmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 2){
  //     nineAmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 3){
  //     tenAmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 4){
  //     eleventAmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 5){
  //     twelvePmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 6){
  //     onePmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 7){
  //     twoPmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 8){
  //     threePmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 9){
  //     fourPmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 10){
  //     fivePmArea.removeClass("present future").addClass("past");}
 
  //   if (currentHour < 11){
  //     sixPmArea.removeClass("present future").addClass("past");}
 


  //     if (currentHour > 0){
  //       sevenAmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 1){
  //       eightAmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 2){
  //       nineAmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 3){
  //       tenAmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 4){
  //       eleventAmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 5){
  //       twelvePmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 6){
  //       onePmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 7){
  //       twoPmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 8){
  //       threePmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 9){
  //       fourPmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 10){
  //       fivePmArea.removeClass("present past").addClass("future");}
   
  //     if (currentHour > 11){
  //       sixPmArea.removeClass("present past").addClass("future");}
   
 



  // if (i < currentHour) {
    //   $('#firstRow').removeClass("present future").addClass("past");
    //   $('#secondRow').removeClass("present future").addClass("past");
    //   $('#thirdRow').removeClass("present future").addClass("past");
    //   $('#fourthRow').removeClass("present future").addClass("past");
    //   $('#fifthRow').removeClass("present future").addClass("past");
    //   $('#sixthRow').removeClass("present future").addClass("past");
    //   $('#seventhRow').removeClass("present future").addClass("past");
    //   $('#eighthRow').removeClass("present future").addClass("past");
    //   $('#ninthRow').removeClass("present future").addClass("past");
    //   $('#tenthRow').removeClass("present future").addClass("past");
    //   $('#eleventhRow').removeClass("present future").addClass("past");
    //   $('#twelfthRow').removeClass("present future").addClass("past");
   
    // }else if ( i === currentTime){
    //   $('#firstRow').removeClass("past future").addClass("present");
    //   $('#secondRow').removeClass("past future").addClass("present");
    //   $('#thirdRow').removeClass("past future").addClass("present");
    //   $('#fourthRow').removeClass("past future").addClass("present");
    //   $('#fifthRow').removeClass("past future").addClass("present");
    //   $('#sixthRow').removeClass("past future").addClass("present");
    //   $('#seventhRow').removeClass("past future").addClass("present");
    //   $('#eighthRow').removeClass("past future").addClass("present");
    //   $('#ninthRow').removeClass("past future").addClass("present");
    //   $('#tenthRow').removeClass("past future").addClass("present");
    //   $('#eleventhRow').removeClass("past future").addClass("present");
    //   $('#twelfthRow').removeClass("past future").addClass("present");
   

    // }else{
    //   $('#firstRow').removeClass("past present").addClass("future");
    //   $('#secondRow').removeClass("past present").addClass("future");
    //   $('#thirdRow').removeClass("past present").addClass("future");
    //   $('#fourthRow').removeClass("past present").addClass("future");
    //   $('#fifthRow').removeClass("past present").addClass("future");
    //   $('#sixthRow').removeClass("past present").addClass("future");
    //   $('#seventhRow').removeClass("past present").addClass("future");
    //   $('#eighthRow').removeClass("past present").addClass("future");
    //   $('#ninthRow').removeClass("past present").addClass("future");
    //   $('#tenthRow').removeClass("past present").addClass("future");
    //   $('#eleventhRow').removeClass("past present").addClass("future");
    //   $('#twelfthRow').removeClass("past present").addClass("future");

    // }

 saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var txtArea = document.querySelector(".description").value;
    localStorage.setItem("txtAreaKey", txtArea);
    apptConfirmation.innerHTML = "Appointment updated in local storage!";
    renderLastTxtArea();
});




function renderLastTxtArea() {
    var getStr = localStorage.getItem("txtAreaKey");
    rendertxtArea1.value = getStr;
  }
