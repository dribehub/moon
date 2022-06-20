const bookmarksMap = new Map([
    ['social', [
        {'last.fm': 'https://last.fm/'},
        {'tumblr': 'https://tumblr.com/'},
        {'reddit': 'https://reddit.com/'},
        {'twitter': 'https://twitter.com'},
        {'instagram': 'https://instagram.com/'},
        {'netflix': 'https://netflix.com/browse'},
        {'telegram': 'https://web.telegram.org/'},
        {'whatsapp': 'https://web.whatsapp.com/'},
        {'letterboxd': 'https://letterboxd.com/'},
    ]],
    ['reddit', [
        {'vim': 'https://reddit.com/r/vim/'},
        {'tp': 'https://reddit.com/r/twinpeaks/'},
        {'vimporn': 'https://reddit.com/r/vimporn/'},
        {'aoc': 'https://reddit.com/r/adventofcode/'},
        {'unixporn': 'https://reddit.com/r/unixporn/'},
        {'linux': 'https://reddit.com/r/linuxmasterrace/'},
        {'startpages': 'https://reddit.com/r/startpages/'},
        {'tpcj': 'https://reddit.com/r/TwinPeaksCircleJerk/'},
    ]],
    ['code', [
        {'dev.to': 'https://dev.to/'},
        {'leet': 'https://leetcode.com/'},
        {'github': 'https://github.com/'},
        {'aoc': 'https://adventofcode.com/'},
        {'visualgo': 'https://visualgo.net/en/'},
    ]],
    ['extra', [
        {'b': ''},
        {'bo': ''},
        {'boo': ''},
        {'book': ''},
        {'bookm': ''},
        {'bookma': ''},
        {'bookmar': ''},
        {'bookmark': ''},
    ]]
]);

function getSortedMap() {
    const sortedMap = new Map(JSON.parse(JSON.stringify([...bookmarksMap])));
    let isEven = false;
    const len = obj => Object.keys(obj)[0].length;
    for (let [, bookmarks] of sortedMap) {
        for (let i = 0; i < bookmarks.length; i++) {
            for (let j = i + 1; j < bookmarks.length; j++) {
                const isAscending = len(bookmarks[i]) < len(bookmarks[j]);
                if (isEven === isAscending)
                    [bookmarks[i], bookmarks[j]] = [bookmarks[j], bookmarks[i]];
            }
        }
        isEven = !isEven;
    }
    return sortedMap;
}

function initBookmarks(sorted) {
    if (document.getElementById('links') != null)
        document.getElementById('links').remove();
    const nav = document.createElement('nav');
    nav.id = 'links';
    for (let [ctg, bookmarks] of sorted ? getSortedMap() : bookmarksMap) {
        const list = document.createElement('ul');
        const header = document.createElement('li');
        header.className = 'accent';
        header.innerHTML = ctg;
        list.appendChild(header);
        for (let bookmark of bookmarks) {
            const el = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = Object.values(bookmark)[0];
            anchor.innerHTML = highlightSymbols(Object.keys(bookmark)[0]);
            anchor.id = Object.keys(bookmark)[0];
            el.appendChild(anchor);
            list.appendChild(el);
        }
        nav.appendChild(list);
    }
    document.getElementById('img').insertAdjacentElement('afterend', nav);
}