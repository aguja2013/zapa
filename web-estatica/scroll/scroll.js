(function($) {
$('.scroll-to').on('click', function(e) {
e.preventDefault();
$('html, body').animate({
scrollTop: $(this.hash).offset().top
}, 500);
});
})(jQuery);