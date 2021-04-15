// Global Variables
var jsfileversion="0003";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
var x = document.getElementById(sect);
x.style.display = 'block';

var elements = document.getElementsByClassName('MenuButton');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.textDecoration = '';
    }

var y = document.getElementById(sect + 'Button');
y.style.textDecoration = 'underline';

document.getElementById('JSSerNo').textContent='.'+jsfileversion;
}

