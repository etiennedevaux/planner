// Global Variables
var jsfileversion="0084";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
var x = document.getElementById(sect);
x.style.display = 'block';

var elements = document.getElementsByClassName('menu_span');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.textDecoration = '';
    }

var y = document.getElementById(sect + 'Span');
y.style.textDecoration = 'underline';

document.getElementById('JSSerNo').textContent='.'+jsfileversion;
}

/* Derived from The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  */
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
        });}

function GetMap() {
        var map = new Microsoft.Maps.Map('#pln-osmap', {});

        

            //Center the map on the user's location.
var loc = new Microsoft.Maps.Location(51.477976,0);
            map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey, center: loc , zoom: 15,  });

//Add a pushpin at the user's location.
            var pin = new Microsoft.Maps.Pushpin(loc);
            map.entities.push(pin);
       
    }

function initialize() {
        const loc = { lat: 51.477976 ,  lng: 0, };
        const map = new google.maps.Map(document.getElementById("pln-satview"), {
          center: loc,
          zoom: 15,
          mapTypeId: 'hybrid'
        });
        }

function droneSafetyMap(lat, long) {

var ht=document.getElementById("pln-osmap").offsetHeight;
var wd=document.getElementById("pln-osmap").offsetWidth;
var url="https://dronesafetymap.com/#loc=" + lat + "," + long + "," + "15";

//* Check to see if the Map is already open and close if it is*//
closePopupIfOpen('win');

var winsize="top=50,left=50,width=" + wd + ",height=" + ht;
var win=window.open(url,'_blank',winsize);

}

//*Taken from https://stackoverflow.com/questions/3311293/javascript-bring-window-to-front-if-already-open-in-window-open*//
function closePopupIfOpen(popupName){
  if(typeof(window[popupName]) != 'undefined' && !window[popupName].closed){
    window[popupName].close();
  }
}

function recentreMaps() {
alert(document.getElementById("plnLatitude").value);
}

alert (document.getElementById("plnPostcode").value);

function domLoaded() {

//* Add Event Handlers *//

alert ("Hello");
document.getElementById("plnPostcode").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert(document.getElementById("plnPostcode").value);
    }
});

}

