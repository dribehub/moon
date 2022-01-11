var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function GetClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h <= 9) h = "0" + h;
    if (m <= 9) m = "0" + m;
    if (s <= 9) s = "0" + s;
    document.getElementById('clockbox').innerHTML = `${h}:${m}:${s}`;
}

function GetDate() {
    var date = new Date();
    var w = date.getDay();
    var m = date.getMonth();
    var d = date.getDate(); 
    var y = date.getFullYear();
    document.getElementById('datebox').innerHTML = `${weekdays[w]}, ${months[m]} ${d}, ${y}`;
}

function createClockbox() {
    const root = document.createElement('div');
    root.className = 'clock-box';
    let div = document.createElement('div');
    div.id = 'clockbox';
    root.appendChild(div);
    div = document.createElement('div');
    div.id = 'datebox';
    root.appendChild(div);
    document.body.insertAdjacentElement('afterbegin', root);
}

createClockbox();
GetClock();
setInterval(GetClock, 1000);
GetDate();
setInterval(GetDate, 1000);
