$(document).on({
    click: function() {
        $('#input').focus();
    },
    keydown: function(e) {
        if (e.key === 'Escape')
            toggleFindMode();
    }
});

initClockbox();
initBookmarks(true);
initInput();
initBangs();