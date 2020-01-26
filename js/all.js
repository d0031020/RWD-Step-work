$(document).ready(function() {
    $('.up img').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    });
    $('#click').click(function(e) {
        e.preventDefault();
        $('.list ul').toggle();
    });
});