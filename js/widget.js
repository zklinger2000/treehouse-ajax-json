//AJAX Request object
var xhr = new XMLHttpRequest();
//setting up state handler
//this is the function's callback
xhr.onreadystatechange = function () {
  //readyState '4' is when browser is done getting response
  if (xhr.readyState === 4) {
    //getting the list of employees into an array
    var employees = JSON.parse(xhr.responseText);
    //creating an <ul> element to store the list
    var statusHTML = '<ul class="bulleted">';
    //looping through the employee array
    for (var i = 0, len = employees.length; i < len; ++i) {
      if (employees[i].inoffice === true) {
        //setting class of each <li> to 'in' or 'out'
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
//Opening the AJAX Request objest and load a file filled with JSON data
xhr.open('GET', 'data/employees.json');
//send the Request to the server
xhr.send();

//AJAX Request object
var roomRequest = new XMLHttpRequest();
//setting up state handler
//this is the function's callback
roomRequest.onreadystatechange = function () {
  //readyState '4' is when browser is done getting response
  if (roomRequest.readyState === 4) {
    //getting the list of rooms into an array
    var rooms = JSON.parse(roomRequest.responseText);
    //creating an <ul> element to store the list
    var statusHTML = '<ul class="bulleted">';
    //looping through the employee array
    for (var i = 0, len = rooms.length; i < len; ++i) {
      if (rooms[i].inoffice === true) {
        //setting class of each <li> to 'in' or 'out'
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
//Opening the AJAX Request objest and load a file filled with JSON data
roomRequest.open('GET', 'data/rooms.json');
//send the Request to the server
roomRequest.send();

