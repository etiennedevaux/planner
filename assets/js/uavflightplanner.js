//* Global Variables *//
var jsfileversion = "0489";
var dlat = 51.477976;
var dlng = 0.000001;
var originalFlSummary;


//* Derived from The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  *//
function aaMapShow() {
   $(function () {
      aa.initialize({
         "target": "pln-osmap",
         "baseUrl": "https://dronesafetymap.com",
         "postCode": "CV31 3PE",
         "authDetails": {
            "apiKey": "fQWxiLdadwrolw8O3W8EJIDxgWeDkHNuwMc5mYL60"
         }
      });
   });
}


//* Function aiming to consolidate all onload scripts into a single place, keeping the HTML cleaner *//
function domLoaded() {

   document.getElementById('navbarNavDropdown').className='noshow navbar-collapse collapse';

   //* Global Variables drawn from DOM
   originalFlSummary = document.getElementById("pln-flsummary").innerHTML;

   //* Event Listeners *//
   //* Event Listener for Get Started Button *//
   document.getElementById("pln-cta-primary").addEventListener("click", function (event) {
      showMenuComponent("FlightParameters");
   });

   //*Event Listeners for Location Page*//
   document.getElementById("pln-postcode").addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
         getPostcodeData(document.getElementById("pln-postcode").value);
      }
   });


   document.getElementById("pln-postcode").addEventListener("blur", function (event) {
      event.preventDefault();
      getPostcodeData(document.getElementById("pln-postcode").value);
   });

   //*Event Listeners for Flight Parameters Page*//

   

     //* Click Event listeners for competency options *//
   var inputBoxes = document.getElementsByClassName("pln-comp");

   for (var i = 0; i < inputBoxes.length; i++) {
      inputBoxes[i].addEventListener('click', function () { paramUpdate(1, this); });
   };

   //* Click Event listeners for competency options *//
   var inputBoxes = document.getElementsByClassName("pln-dronecat");

   for (var i = 0; i < inputBoxes.length; i++) {
      inputBoxes[i].addEventListener('click', function () { paramUpdate(2, this); });
   };

   //* Click Event listeners for selector *//
   var inputBoxes = document.getElementsByClassName("pln-param-input");

   for (var i = 0; i < inputBoxes.length; i++) {
      inputBoxes[i].addEventListener('click', function () {
         if(this.checked){this.checked=false;}
         else {this.checked=true;}

      });
   };

   //* Hover Event Listeners for Boxes *//
   var fcBox = document.querySelectorAll(".pln-flightcat, .pln-dronecat");
   for (var i = 0; i < fcBox.length; i++) {
      fcBox[i].addEventListener('mouseover', function () { paramHlight(this); });
   };

   //* Event Listener for Flight Parameters reset *//
   document.getElementById("pln-param-reset").addEventListener('click', function () { paramReset(); });

   //* Event Listener for Flight Parameters review Location Button *//
   document.getElementById("pln-next-location").addEventListener("click", function (event) {
      showMenuComponent("Location");
   });

   //* Event Listener for Drone Safety Map from within instructions *//
   document.getElementById("pln-dsmap-1").addEventListener("click", function (event) {
      droneSafetyMap();
   });

   //* Event Listener for Step Four Next Button *//
   document.getElementById("pln-stepfour-next").addEventListener("click", function (event) {
      instrDisplay("pln-step-four", 2);
      instrDisplay("pln-step-five", 1);
   });




   //* End of Event Listeners

   //* Styling for first instruction step one on the Parameters page * //
   instrDisplay("pln-step-one", 1);

   //* Styling for third instruction step three on the Location Page * //
   instrDisplay("pln-step-three", 1);

   //* Styling for the Flight Summary on the Location Page * //
   instrDisplay("pln-flsummary", 2);
}


function showMenuComponent(sect) {
   var elements = document.getElementsByClassName('MenuComponent');

   for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
   }
   var x = document.getElementById(sect);
   x.style.display = 'block';

   var elements = document.getElementsByClassName('MenuButton');

   for (var i = 0; i < elements.length; i++) {
      elements[i].style.textDecoration = '';
   }

   var y = document.getElementById(sect + 'Button');
   y.style.textDecoration = 'underline';

   document.getElementById('JSSerNo').textContent = '.' + jsfileversion;
   window.history.pushState("", "UAV Flight Planner Home", "#" + sect + "-Top");
   document.getElementById(sect).scrollIntoView();
}


function GetMap(lat, long) {
   var map = new Microsoft.Maps.Map('#pln-osmap', {});



   //Center the map on the user's location.

   if (lat == undefined) { lat = 51.4779760; }
   if (long == undefined) { long = 0.000001; }


   //* var loc = new Microsoft.Maps.Location(51.4779760,0.000001);*//
   var loc = new Microsoft.Maps.Location(lat, long);
   map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey, center: loc, zoom: 15, });

   //Add a pushpin at the user's location.
   var pin = new Microsoft.Maps.Pushpin(loc);
   map.entities.push(pin);

}


function initialize() {

   var latid = document.getElementById("pln-latitude").value;
   var longid = document.getElementById("pln-longitude").value;

   if (latid == null | latid == undefined | latid == "") { latid = 51.477976; }
   if (longid == null | longid == undefined | longid == "") { longid = 0.000001; }

   const loc = { lat: latid, lng: longid };

   const map = new google.maps.Map(document.getElementById("pln-satview"), {
      center: loc,
      zoom: 15,
      mapTypeId: 'hybrid'
   });

   //* Add event listeners for map adjustments *//
   document.getElementById("pln-recenter").addEventListener("click", function () {
      gmapRecenter(map);
      instrDisplay("pln-step-three", 2);
      instrDisplay("pln-step-four", 1);
   });



}


function droneSafetyMap() {

   //* Take Lat and Long from form*//
   var lat = document.getElementById("pln-latitude").value;
   var lng = document.getElementById("pln-longitude").value;

   //* Set lat and lng to default values if null*//
   if (lat == undefined | lat == null | lat == "") { lat = dlat; }
   if (lng == undefined | lng == null | lng == "") { lng = dlng; }

   //* Match dimensions of popup to div on page *//
   var ht = document.getElementById("pln-osmap").offsetHeight;
   var wd = document.getElementById("pln-osmap").offsetWidth;
   var url = "https://dronesafetymap.com/#loc=" + lat + "," + lng + "," + "15";

   //* Check to see if the Map is already open and close if it is*//
   closePopupIfOpen('win');

   //* Display Final Instruction *//
   instrDisplay("pln-step-five", 2);
   instrDisplay("pln-step-six", 1);

   //* Open Drone Safety Map in popup *//
   var winsize = "top=50,left=50,width=" + wd + ",height=" + ht;
   var win = window.open(url, '_blank', winsize);

}


//*Taken from https://stackoverflow.com/questions/3311293/javascript-bring-window-to-front-if-already-open-in-window-open*//
function closePopupIfOpen(popupName) {
   if (typeof (window[popupName]) != 'undefined' && !window[popupName].closed) {
      window[popupName].close();
   }
}


function recenterMaps() {
   GetMap(document.getElementById("plnLatitude").value, document.getElementById("plnLongitude").value);
}


alert(document.getElementById("plnPostcode").value);


function getPostcodeData(postcode) {

   postcode = postcode.replaceAll(/\s/g, '');
   postcode = postcode.toUpperCase();

   const baseURL = "https://api.getthedata.com/postcode/" + postcode;


   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         var rsp = JSON.parse(this.responseText);
         document.getElementById("pln-latitude").value = rsp.data.latitude;
         document.getElementById("pln-longitude").value = rsp.data.longitude;
      }
   };

   xhr.open("GET", baseURL);
   xhr.send();
}


//* Function to recentre the Google Map in accordance with co-ordinates in the parameters section, also resets the zoom to 15*//
function gmapRecenter(map) {
   var latnew = Number(document.getElementById("pln-latitude").value);
   const lngnew = Number(document.getElementById("pln-longitude").value);
   const loca = { lat: latnew, lng: lngnew };
   map.setCenter(loca);
   map.setZoom(15);

   //* Also recentre Bing Map at the same time
   GetMap(document.getElementById("pln-latitude").value, document.getElementById("pln-longitude").value);
}


function paramUpdate(step, thisbox) {

   //* check the relevant box *//
   if (thisbox.getElementsByTagName("INPUT")[0].checked) { thisbox.getElementsByTagName("INPUT")[0].checked = false; }
   else { thisbox.getElementsByTagName("INPUT")[0].checked = true; }

   

   alert("PU");

   //* Display Reset Button*//
   document.getElementById("pln-param-reset").style.display = "inline";
   var drones = document.getElementsByName("pln-dronecat-radios");
   var selectedDrone;
   for (var i = 0; i < drones.length; i++) {
      if (drones[i].checked) { selectedDrone = i; }
   }

   //* Assign Competency Statuses to variables *//
   var rtm = document.getElementById("pln-comp-rtm-chk");
   var opid = document.getElementById("pln-comp-opid-chk");
   var flyid = document.getElementById("pln-comp-flyid-chk");
   var a2coc = document.getElementById("pln-comp-a2coc-chk");
   var gvc = document.getElementById("pln-comp-gvc-chk");

   //* Eles If case for each drone type, only one drone type can be selected at a time*//

  if (selectedDrone == 0) {

         //* Rule 1 - C0 no camera - each category as a separate line for easy maintenance*//
         if (rtm.checked == true) {
            allFly();
         }
         else {
            noFly();
         }

      }
  

      
}


function flightCatMarker(elem, status) {

   //* Display Flights that can be conducted *//
   if (status == 1) {
      elem.style.color = "#209020";
   }

   //* Display Flights that can not be conducted *//
   if (status == 0) {
      elem.style.color = "#995555";
      elem.style.textDecoration = "line-through";
   }

   //* Reset Flights to original *//
   if (status == 2) {
      elem.attributeStyleMap.clear();
   }

}


function flightCatReset() {

   var fcats = document.getElementsByClassName("pln-flightcat");

   var i;
   for (i = 0; i < fcats.length; i++) {
      flightCatMarker(fcats[i], 2);
   }

}


function paramReset() {

   var dcats = document.getElementsByClassName("pln-param-input");

   var i;
   for (i = 0; i < dcats.length; i++) {
      dcats[i].checked = false;
   }

   //* Reset Steps *//

   //* Step One *//
   instrDisplay("pln-step-two", 1);


   //* Step Two *//
   instrDisplay("pln-step-two", 0);

   //* Results *//
   instrDisplay("pln-result-a", 0);
   document.getElementById("pln-next-location").style.display = "none";
   flightCatReset();
}


function allFly() {
   alert("AllFly");
   flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 1); //* A1 - Fly Over Stay Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 1); //* A1 - Fly Over Pass Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 1); //* A2 - 5m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
   flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//

}


function noFly() {
   flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
   flightCatMarker(document.getElementById("pln-flightcat-a3"), 0); //* A3 - 50m and 150m from congested areas*//

   topFlightCat(); //* Revert to original flight summary *//
}


function paramHlight(elem) {

   //* Arrays to define highlight styles, highlighted and original values*//
   var hLStyleJS = ["borderWidth", "backgroundColor", "height", "position", "fontSize", "zIndex"];
   var hLStyleCSS = ["border-width", "background-color", "height", "position", "font-size", "z-index"];
   var hLStyleOldValue = [];
   var hLStyleNewValue = ["3px", "#ffffff", "120px", "relative", "14pt", "12"];


   //* Take current values and apply new values*//
   for (i = 0; i < hLStyleJS.length; i++) {
      hLStyleOldValue.push(window.getComputedStyle(elem).getPropertyValue(hLStyleCSS[i]));
      eval("elem.style." + hLStyleJS[i] + "='" + hLStyleNewValue[i] + "'");
   }
   elem.children[1].style.fontSize = "14pt";

   //* Event Listener to Revert to original values *//
   elem.addEventListener('mouseout', function () {
      for (i = 0; i < hLStyleJS.length; i++) {
         eval("elem.style." + hLStyleJS[i] + "='" + hLStyleOldValue[i] + "'");
      }
      elem.children[1].style.fontSize = "10pt";
   });

}


function topFlightCat(flightcat) {

   var flSummary = document.getElementById("pln-flsummary")
   switch (flightcat) {

      //* A1 - Fly Over - Stay Over *//
      case 1:
         flSummary.innerHTML = "<p>You can fly close to and over people, and maintain a position over people.  There is no minimum separation, avoid flying over crowds and ensure you have the land owner's permission.</p>";
         break;

      //* A1 - Fly Over - Pass Over *//
      case 2:
         flSummary.innerHTML = "<p>You can fly over people, but only to pass over them. There is no minimum separation, avoid flying over crowds and ensure you have the land owner's permission.</p>";
         break;

      //* A2 - Close to People - 5m *//
      case 3:
         flSummary.innerHTML = "<p>You must fly in low speed mode and remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 5 metres, from uninvolved people. Avoid flying over crowds and ensure you have the land owner's permission.</p>";
         break;

      //* A2 - Close to People - 30m *//
      case 4:
         flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 30 metres, from uninvolved people.  Ensure you have the land owner's permission.</p>";
         break;

      //* A2 - Close to People - 50m *//
      case 5:
         flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 50 metres, from uninvolved people.  Ensure you have the land owner's permission.</p>";
         break;

      //* A3 - Far from people - 50m *//
      case 6:
         flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 50 metres, from uninvolved people and be over 150 metres from any congested area.  Ensure you have the land owner's permission.</p>";
         break;

      //* Any other case *//
      default:
         flSummary = originalFlSummary;

   }

}


function instrDisplay(instrid, status) {

   alert("jjjj");
}
