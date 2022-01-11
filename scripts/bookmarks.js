const bookmarksMap = new Map([
    ['social', [
        {'tumblr': 'https://tumblr.com/'},
        {'reddit': 'https://reddit.com/'},
        {'twitter': 'https://twitter.com'},
        {'last.fm': 'https://last.fm/user/'},
        {'netflix': 'https://netflix.com/browse'},
        {'telegram': 'https://web.telegram.org/'},
        {'whatsapp': 'https://web.whatsapp.com/'},
        {'instagram': 'https://instagram.com/'},
        {'letterboxd': 'https://letterboxd.com/'}
    ]],
    ['reddit', [
        {'startpages': 'https://reddit.com/r/startpages/'},
        {'unixporn': 'https://reddit.com/r/unixporn/'},
        {'vimporn': 'https://reddit.com/r/vimporn/'},
        {'linux': 'https://reddit.com/r/linuxmasterrace/'},
        {'tpcj': 'https://reddit.com/r/TwinPeaksCircleJerk/'},
        {'vim': 'https://reddit.com/r/vim/'},
        {'aoc': 'https://reddit.com/r/adventofcode/'},
        {'tp': 'https://reddit.com/r/twinpeaks/'}
    ]],
    ['code', [
        {'aoc': 'https://adventofcode.com/'},
        {'leet': 'https://leetcode.com/'},
        {'github': 'https://github.com/'},
        {'visualgo': 'https://visualgo.net/en/'},
        {'dev.to': 'https://dev.to/'}
    ]],
    ['extra', [
        {'bookmark': ''},
        {'bookmar': ''},
        {'bookma': ''},
        {'bookm': ''},
        {'book': ''},
        {'boo': ''},
        {'bo': ''},
        {'b': ''}
    ]]
]);

function sortMap() {
    let isEven = false;
    for (let [, bookmarks] of bookmarksMap) {
        for (let i = 0; i < bookmarks.length; i++) {
            for (let j = i + 1; j < bookmarks.length; j++) {
                const len = obj => Object.keys(obj)[0].length;
                const isAscending = len(bookmarks[i]) < len(bookmarks[j]);
                if (isEven && isAscending || !isEven && !isAscending)
                    [bookmarks[i], bookmarks[j]] = [bookmarks[j], bookmarks[i]];
            }
        }
        isEven = !isEven;
    }
}

function populateLinks() {
    const nav = document.createElement('nav');
    nav.id = 'links';
    for (let [ctg, bookmarks] of bookmarksMap) {
        const list = document.createElement('ul');
        const header = document.createElement('li');
        header.className = 'accent';
        header.innerHTML = ctg;
        list.appendChild(header);
        for (let bookmark of bookmarks) {
            const el = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = Object.values(bookmark)[0];
            anchor.innerHTML = Object.keys(bookmark)[0];
            el.appendChild(anchor);
            list.appendChild(el);
        }
        nav.appendChild(list);
    }
    document.getElementById('img').insertAdjacentElement('afterend', nav);
}

sortMap();
populateLinks();
