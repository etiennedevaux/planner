// Global Variables
var jsfileversion="0033";

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

