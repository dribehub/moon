const bangsMap = new Map([
    ['w', 'wikipedia'],
    ['r', 'reddit'],
    ['yt', 'youtube'],
    ['lb', 'letterboxd'],
    ['nf', 'netflix'],
    ['rt', 'rotten/tomatoes'],
    ['ov', 'stack/overflow'],
    ['imd', 'imdb'],
    ['spy', 'spotify'],
    ['unxprn', 'r/unixporn'],
    ['tumblr', 'tumblr'],
    ['gt-english', 'google/translate']
]);

function initBangs() {
    const root = $('<div>', {id: 'bangs'});
    const bangs = $('<ul>', {class: 'accent'});
    const descs = $('<ul>', {class: 'text'});
    root.append(bangs);
    root.append(descs);
    
    for (let [key, val] of bangsMap) {
        const bang = $('<li>').html(uhl('!') + key);
        const desc = $('<li>').html(highlightSymbols(val));
        desc.click(() => $('#input').val(`!${key} `));
        bangs.append(bang);
        descs.append(desc);
    }
    
    root.insertAfter($('#form'));
}