$(function() {


// Toggle menu
$('#open-menu').on("click", (event) => {
    event.preventDefault();

    console.log($(this));
    
    $('.nav__menu').addClass('show');
});

$('#close-menu').on("click", (event) => {
    event.preventDefault();

    $('.nav__menu').removeClass('show');
});

});