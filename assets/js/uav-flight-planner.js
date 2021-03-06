//* Global Variables *//
   var jsfileversion = "0502";
   var dlat = 51.477976; // * Default Latitude, centring on Greenwich, will be used if the Latitude control is left blank*//
   var dlng = 0.000001; // * Default Longitude, centring on Greenwich, will be used if the Longitude control is left blank*//
   var originalFlSummary; // * Global Variable Used in Multiple Functions *//
   var i; // * Global Variable Used in Multiple Functions *//

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

//* Function aiming to consolidate onload scripts into a single place, keeping the HTML cleaner *//
function domLoaded() {

   document.getElementById('navbarNavDropdown').className = 'noshow navbar-collapse collapse';

   //* Global Variables drawn from DOM
   originalFlSummary = document.getElementById("pln-flsummary").innerHTML;

   //* Event Listeners *//
   //* Event Listener for Get Started Button *//
   document.getElementById("pln-cta-primary").addEventListener("click", function (event) {
      showMenuComponent("FlightParameters");
   });

   //* Event Listener for Drone Safety Map Button *//
   document.getElementById("pln-dronesafety").addEventListener("click", function (event) {
      droneSafetyMap();
      instrDisplay("pln-step-three", 2);
      instrDisplay("pln-step-four", 2);
      instrDisplay("pln-step-five", 2);
      instrDisplay("pln-step-six", 1);
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

      //* Click Event listeners for Competencies *//
      var inputBoxes = document.getElementsByClassName("pln-comp");

      for (i = 0; i < inputBoxes.length; i++) {
         inputBoxes[i].addEventListener('click', function () {paramUpdate(1, this); });
      }

      //* Click Event listeners for Drone Categories *//
      var inputCompBoxes = document.getElementsByClassName("pln-dronecat");

      for (i = 0; i < inputCompBoxes.length; i++) {
         inputCompBoxes[i].addEventListener('click', function () { paramUpdate(2, this); });
      }

      //* Click Event listeners for selectors *//
      var inputCheckBoxes = document.getElementsByClassName("pln-param-input");

      for (i = 0; i < inputCheckBoxes.length; i++) {
         inputCheckBoxes[i].addEventListener('click', function () {
            if (this.checked) { this.checked = false; }
            else { this.checked = true; }

         });
      }

      //* Hover Event Listeners for Boxes *//
      var fcBox = document.querySelectorAll(".pln-flightcat, .pln-dronecat");
      for (i = 0; i < fcBox.length; i++) {
         fcBox[i].addEventListener('mouseover', function () { paramHlight(this); });
      }

      //* Event Listener for Flight Parameters reset *//
      document.getElementById("pln-param-reset").addEventListener('click', function () { paramReset(); });

      //* Event Listener for Flight Parameters review Location Button *//
      document.getElementById("pln-next-location").addEventListener("click", function (event) {
         showMenuComponent("Location");
      });

   //* Event Listener for Step Four Next Button *//
      document.getElementById("pln-stepfour-next").addEventListener("click", function (event) {
         instrDisplay("pln-step-four", 2);
         instrDisplay("pln-step-five", 1);
         document.getElementById("pln-stepfour-next").style.display="none";
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
   var menuElements = document.getElementsByClassName('MenuButton');

   for (i = 0; i < menuElements.length; i++) {
      menuElements[i].style.textDecoration = '';
   }

   var y = document.getElementById(sect + 'Button');
   y.style.textDecoration = 'underline';
   document.getElementById('navbarNavDropdown').className='navbar-collapse show';
   document.getElementById('JSSerNo').textContent = '.' + jsfileversion;
   window.history.pushState("", "UAV Flight Planner Home", "#" + sect + "-Top");
   document.getElementById(sect).scrollIntoView();
}

function GetMap(lat, long) {
   var map = new Microsoft.Maps.Map('#pln-osmap', {});

   //* Center the map on the user's location. *//

   if (lat == undefined) { lat = 51.4779760; }  //* Replace empty value for latitude *//
   if (long == undefined) { long = 0.000001; }  //* Replace empty value for longitude *//

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

   if (latid == null || latid == undefined || latid == "") { latid = 51.477976; }
   if (longid == null || longid == undefined || longid == "") { longid = 0.000001; }

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
      document.getElementById("pln-stepfour-next").style.display="block";
      instrDisplay("pln-step-four", 1);
   });
}

function droneSafetyMap() {

   //* Take Lat and Long from form*//
   var lat = document.getElementById("pln-latitude").value;
   var lng = document.getElementById("pln-longitude").value;

   //* Set lat and lng to default values if null*//
   if (lat == undefined || lat == null || lat == "") { lat = dlat; }
   if (lng == undefined || lng == null || lng == "") { lng = dlng; }

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
   window.open(url, '_blank', winsize);
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

   //*Highlight Steps*//
   if (step == 1) {
      instrDisplay("pln-step-two", 1);
      instrDisplay("pln-step-one", 2);
   } else if (step == 2) {
      instrDisplay("pln-step-two", 2);
      instrDisplay("pln-result-a", 1);
      document.getElementById("pln-next-location").style.display = "inline";
   }

   //* Reset Flight Categories *//
   flightCatReset();

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

   //* Select case for each drone type, only one drone type can be selected at a time*//
   if (selectedDrone == 0) {

      //* Rule 1 - C0 no camera - each category as a separate line for easy maintenance*//
      if (rtm.checked == true) {
         allFly();
         topFlightCat(1);
      }
      else {
         noFly();
         topFlightCat();
      }
   } else if (selectedDrone == 1) {

      //* Rule 2 - C0 Camera - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true) {
         allFly();
         topFlightCat(1);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 2) {

      //* Rule 3 - C1 Certified - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 1); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 1); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(2);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 3) {

      //* Rule 4 - A1 Transition - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true && a2coc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 1); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 1); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(2);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true && gvc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(6);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 4) {

      //* Rule 5 - C2 Certified in Low Speed Mode - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true && a2coc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 1); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(3);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true && gvc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(6);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 5) {

      //* Rule 6 - C2 Certified - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true && a2coc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(4);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true && gvc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(6);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 6) {

      //* Rule 7 - A2 Transition - each category as a separate line for easy maintenance*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true && a2coc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true && gvc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(1);
      }
      else {
         noFly();
      }
   } else if (selectedDrone == 7 || selectedDrone == 8) {

      //* Rule 8 - C3 - each category as a separate line for easy maintenance, NB under current rules C3 and C4 can be combined, this may change*//
      if (rtm.checked == true && opid.checked == true && flyid.checked == true && gvc.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(5);
      }
      else if (rtm.checked == true && opid.checked == true && flyid.checked == true) {
         flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 0); //* A1 - Fly Over Stay Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 0); //* A1 - Fly Over Pass Over*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 0); //* A2 - 5m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 0); //* A2 - 30m*//
         flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 0); //* A2 - 50m*//
         flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
         topFlightCat(6);
      }
      else {
         noFly();
      }
   } else {

      noFly();
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
      elem.style.color = "#de8f00";
      elem.style.textDecoration = "";
   }
}

function flightCatReset() {
   //* Reset Flight Categories to status 2 *//
   var fcats = document.getElementsByClassName("pln-flightcat");

   var i;
   for (i = 0; i < fcats.length; i++) {
      flightCatMarker(fcats[i], 2);
   }
}

function paramReset() {
   //* Reset Flight Parameters *//

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
   //* Set all flight categories to permitted *//
   flightCatMarker(document.getElementById("pln-flightcat-a1-so"), 1); //* A1 - Fly Over Stay Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a1-po"), 1); //* A1 - Fly Over Pass Over*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-5"), 1); //* A2 - 5m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-30"), 1); //* A2 - 30m*//
   flightCatMarker(document.getElementById("pln-flightcat-a2-50"), 1); //* A2 - 50m*//
   flightCatMarker(document.getElementById("pln-flightcat-a3"), 1); //* A3 - 50m and 150m from congested areas*//
   topFlightCat(1);
}

function noFly() {
   //* Set all flight categories to NOT permitted *//
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
   var i;
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

   //* On the basis of permitted flight categories fully describe the most exact flight category at the top of the location page *//

   var flSummary = document.getElementById("pln-flsummary");
   if (flightcat == 1) {
      //* A1 - Fly Over - Stay Over *//
      flSummary.innerHTML = "<p>You can fly close to and over people, and maintain a position over people.  There is no minimum separation, avoid flying over crowds and ensure you have the land owner's permission.</p>";
   } else if (flightcat == 2) {

      //* A1 - Fly Over - Pass Over *//

      flSummary.innerHTML = "<p>You can fly over people, but only to pass over them. There is no minimum separation, avoid flying over crowds and ensure you have the land owner's permission.</p>";
   } else if (flightcat == 3) {

      //* A2 - Close to People - 5m *//

      flSummary.innerHTML = "<p>You must fly in low speed mode and remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 5 metres, from uninvolved people. Avoid flying over crowds and ensure you have the land owner's permission.</p>";
   } else if (flightcat == 4) {

      //* A2 - Close to People - 30m *//

      flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 30 metres, from uninvolved people.  Ensure you have the land owner's permission.</p>";
   } else if (flightcat == 5) {

      //* A2 - Close to People - 50m *//

      flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 50 metres, from uninvolved people.  Ensure you have the land owner's permission.</p>";
   } else if (flightcat == 6) {

      //* A3 - Far from people - 50m *//

      flSummary.innerHTML = "<p>You must remain at least the same horizontal distance as the height of your aircraft (1:1 rule), down to a minimum of 50 metres, from uninvolved people and be over 150 metres from any congested area.  Ensure you have the land owner's permission.</p>";
   } else {

      //* Any other case *//
      flSummary = originalFlSummary;
   }
}

function instrDisplay(instrid, status) {
   //* Display the status of each instruction *//

   //* Status for instructions/steps not yet reached *//
   if (status == 0) {
      document.getElementById(instrid).style.backgroundColor = "#ffffff00";
      document.getElementById(instrid).style.fontWeight = "200";
      document.getElementById(instrid).style.borderStyle = "none";
   //* Status for instructions/steps that are active *//
   } else if (status == 1) {
      document.getElementById(instrid).style.backgroundColor = "#bbd2e2cc";
      document.getElementById(instrid).style.fontWeight = "900";
      document.getElementById(instrid).style.borderStyle = "solid";
      document.getElementById(instrid).style.borderColor = "#007bff";
      document.getElementById(instrid).style.borderWidth = "3px";
      //* Status for instructions/steps that ahve been passed in the process *//
   } else if (status == 2) {
      document.getElementById(instrid).style.backgroundColor = "#ffffff00";
      document.getElementById(instrid).style.fontWeight = "900";
      document.getElementById(instrid).style.borderStyle = "solid";
      document.getElementById(instrid).style.borderColor = "#007bff";
      document.getElementById(instrid).style.borderWidth = "1px";
   }

   else { }
}

function helpVideo() {
     //* Open Help Video in popup *//
     var win = window.open('', '_blank', "top=20,left=50,width=660,height=370");
     win.document.body.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/au0WZ7WSiQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}