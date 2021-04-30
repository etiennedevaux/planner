// Global Variables
var jsfileversion="0161";

//Global Variables
var dlat=51.477976;
var dlng=0.000001;

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

function GetMap(lat, long) {
        var map = new Microsoft.Maps.Map('#pln-osmap', {});

        

            //Center the map on the user's location.

if(lat == undefined){lat=51.4779760;}
if(long == undefined){long=0.000001;}


//* var loc = new Microsoft.Maps.Location(51.4779760,0.000001);*//
var loc = new Microsoft.Maps.Location(lat,long);
            map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey, center: loc , zoom: 15,  });

//Add a pushpin at the user's location.
            var pin = new Microsoft.Maps.Pushpin(loc);
            map.entities.push(pin);
       
    }

function initialize() {

var latid=document.getElementById("pln-Latitude").value;
var longid=document.getElementById("pln-Longitude").value;

if(latid == null | latid == undefined | latid == "") {latid=51.477976;}
if(longid == null | longid == undefined | longid == "") {longid=0.000001;}

        const loc = { lat: latid ,  lng: longid };

        const map = new google.maps.Map(document.getElementById("pln-satview"), {
          center: loc,
          zoom: 15,
          mapTypeId: 'hybrid'
        });

//* Add event listeners for map adjustments *//
document.getElementById("pln-Recenter").addEventListener("click", function(){gmapRecenter(map)});
        }

function droneSafetyMap(lat, long) {

//* Take Lat and Long from form*//
var lat=document.getElementById("pln-Latitude").value;
var lng=document.getElementById("pln-Longitude").value;

//* Set lat and lng to default values if null*//
if(lat == undefined | lat == null | lat == "" ) {lat=dlat;}
if(lng == undefined | lng == null | lng == "" ) {lng=dlng;}

//* Match dimensions of popup to div on page *//
var ht=document.getElementById("pln-osmap").offsetHeight;
var wd=document.getElementById("pln-osmap").offsetWidth;
var url="https://dronesafetymap.com/#loc=" + lat + "," + lng + "," + "15";

//* Check to see if the Map is already open and close if it is*//
closePopupIfOpen('win');

//* Open Drone Safety Map in popup *//
var winsize="top=50,left=50,width=" + wd + ",height=" + ht;
var win=window.open(url,'_blank',winsize);

}

//*Taken from https://stackoverflow.com/questions/3311293/javascript-bring-window-to-front-if-already-open-in-window-open*//
function closePopupIfOpen(popupName){
  if(typeof(window[popupName]) != 'undefined' && !window[popupName].closed){
    window[popupName].close();
  }
}

function recenterMaps() {
 GetMap(document.getElementById("plnLatitude").value,document.getElementById("plnLongitude").value);
}

alert (document.getElementById("plnPostcode").value);

//* Function aiming to consolidate all onload scripts into a single place, keeping the HTML cleaner *//
function domLoaded() {

//* Add Event Handlers *//
    document.getElementById("pln-Postcode").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {

        getPostcodeData(document.getElementById("pln-Postcode").value);
    }
});

}

function getPostcodeData(postcode) {

postcode=postcode.replaceAll(/\s/g,'');
postcode=postcode.toUpperCase();

const baseURL = "https://api.getthedata.com/postcode/" + postcode;


    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var rsp=JSON.parse(this.responseText);
            document.getElementById("pln-Latitude").value=rsp.data.latitude;
document.getElementById("pln-Longitude").value=rsp.data.longitude;
        }
    };

    xhr.open("GET", baseURL );
    xhr.send();
}

//* Function to recentre the Google Map in accordance with co-ordinates in the parameters section, also resets the zoom to 15*//
function gmapRecenter(map) {
    var latnew=Number(document.getElementById("pln-Latitude").value);
    const lngnew=Number(document.getElementById("pln-Longitude").value);
    const loca={ lat: latnew ,  lng: lngnew };
    map.setCenter(loca);
    map.setZoom(15)

   //* Also recentre Bing Map at the same time
   GetMap(document.getElementById("pln-Latitude").value,document.getElementById("pln-Longitude").value);
}

