let isSearchModeActive = true;
let highlighted;

const Label = {
    findMode: `Press ${hl("Esc")} to switch to ${hl('Find Mode')}`,
    searchMode: `Press ${hl("Esc")} to switch to ${hl('Search Mode')}`
}

function findBookmarks() {
    const pattern = $('#input').val();
    if (pattern === '') return;

    let matched;

    function isBetterMatch(link) {
        if (!link.id.includes(pattern)) 
            return false;
        if (!matched) 
            return true;
        if (link.id === pattern) 
            return true;

        const matchedStartsWith = matched.id.startsWith(pattern);
        const linkStartsWith = link.id.startsWith(pattern);
        if (matchedStartsWith != linkStartsWith) 
            return linkStartsWith;

        const diff = a => a.id.length - pattern.length;
        return diff(matched) > diff(link);
    }

    $('#links > ul > li :not(.accent)').each(function() {
        const link = $(this)[0];
        if (isBetterMatch(link))
            matched = link;
    });

    return matched;
}

/**
 * Removes the previous highlight, and if doHighlight,
 * highlights the best match found in bookmarks.
 */
function toggleHighlight(doHighlight) {
    if (highlighted !== undefined) {
        highlighted.removeClass('accent');
        highlighted = undefined;
    }
    
    if (doHighlight) {
        const bm = $(findBookmarks());
        if (bm !== undefined) {
            bm.addClass('accent');
            highlighted = bm;
            $('#form').attr('action', bm.attr('href'));
        }
    }
}

function toggleFindMode() {
    if (isSearchModeActive) { // then, activate find mode
        isSearchModeActive = false;
        $('#label').html(Label.searchMode);
        $('#input').attr('placeholder', 'find');
        $('#input').keyup(() => toggleHighlight(true));
        $('#input').removeAttr('name');
    } else { // then, activate search mode
        isSearchModeActive = true;
        toggleHighlight(false);
        $('#label').html(Label.findMode);
        $('#input').attr('placeholder', 'search');
        $('#input').off('keyup');
        $('#input').attr('name', 'q');
        $('#form').attr('action', 'https://duckduckgo.com/');
    }
}

function initInput() {
    const label = $('<label>', {class: 'text', id: 'label'}).html(Label.findMode);
    label.insertAfter($('#input'));
    $('<br>').insertAfter($('#input'));
    $('<br>').insertAfter($('#input'));
}