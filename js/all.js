$(document).ready(function() {
    $('.up img').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });
});