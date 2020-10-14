$("#modeBtn").on('click', function () {
    $('html').attr('theme', function (index, attr) {
        return attr == 'light-mode' ? null : 'light-mode';
    });
});