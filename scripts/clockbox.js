const weekdays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

function syncClockbox() {
    const util = new Date();
    let hours = util.getHours();
    let minutes = util.getMinutes();
    let seconds = util.getSeconds();
    if (hours <= 9) hours = `0${hours}`;
    if (minutes <= 9) minutes = `0${minutes}`;
    if (seconds <= 9) seconds = `0${seconds}`;
    const day = util.getDay();
    const month = util.getMonth();
    const date = util.getDate(); 
    const year = util.getFullYear();

    const setHighlighted = (id, html) => $(id).html(highlightSymbols(html));
    setHighlighted('#clockbox', `It's ${hours}:${minutes}:${seconds} past midnight`);
    setHighlighted('#datebox', `on ${weekdays[day]}, ${months[month]} ${date}, ${year}`);
}

function initClockbox() {
    const root = $('<div>', {class: 'clock-box'})
        .append($('<div>', {id: 'clockbox'}))
        .append($('<div>', {id: 'datebox'}));
    $(document.body).prepend(root);
    (f => {f(); setInterval(f, 1000);})(syncClockbox);
}