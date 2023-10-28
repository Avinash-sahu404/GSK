$(document).ready(function() {
    // Function to change the nav-bar on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('.fixed-nav-bar').addClass('scrolled');
            $('.the-bass').addClass('scrolled');
        } else {
            $('.fixed-nav-bar').removeClass('scrolled');
            $('.the-bass').removeClass('scrolled');
        }
    });

    // Drop Down Function
    $('#menuButton').on('change', function() {
        if ($('#menuButton').is(':checked')) {
            $('.the-bass').addClass('dropped');
        } else {
            $('.the-bass').removeClass('dropped');
        }
    });
});
// navbar fixed code 
$(document).ready(function(){
    $(".menu-button").click(function(){
    $(".menu-bar").toggleClass( "open" );
    })
    })