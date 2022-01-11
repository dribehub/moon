const bangsMap = new Map([
    ['wikipedia', 'w'],
    ['r/unixporn', 'r'],
    ['letterboxd', 'unxprn'],
    ['netflix', 'nf'],
    ['imdb', 'imd'],
    ['rotten tomatoes', 'rt'],
    ['spotify', 'spy'],
    ['stack overflow', 'ov'],
    ['google translate', 'gt-english'],
]);

function populateBangs() {
    const root = document.createElement('div');
    root.id = 'bangs';
    const bangs = document.createElement('ul');
    bangs.className = 'accent';
    const descriptions = document.createElement('ul');
    descriptions.className = 'text';
    root.appendChild(bangs);
    root.appendChild(descriptions);
    for (let [key, val] of bangsMap) {
        const bangElement = document.createElement('li');
        bangElement.innerHTML = `!${val}`;
        bangs.appendChild(bangElement);
        const descElement = document.createElement('li');
        descElement.innerHTML = key;
        descElement.addEventListener("click", e => document.getElementById("input").value = `!${val} `);
        descriptions.appendChild(descElement);
    }
    document.getElementById('search').insertAdjacentElement('afterend', root);
}

populateBangs();