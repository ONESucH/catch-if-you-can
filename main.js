var body = document.getElementsByTagName('body')[0];
var circle = document.createElement('div');

body.onmouseover = body.onmouseout = body.onmousemove = drob;

function drob(event) {
    var drowX = event.clientX, // координаты мыши
        drowY = event.clientY;

    console.log('drowX', drowX);
    console.log('drowY', drowY);
    console.log('Ищем', event.target);

    circle.style.background = 'orange';

    if ( event.target === circle ) {
        event.target.style.background = 'red';
        event.target.style.margin = drowX + drowY - drowX / 2  + 'px';
    } else {
        return false;
    }
}




body.appendChild(circle);
