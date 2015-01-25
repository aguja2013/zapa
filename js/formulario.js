var $form = $('#formulario'),
	$nombre = $('#nombre'),
	$email = $('#email'),
	$button = $('#button-i');
	// $submit = $('#contrae');



function expanderSuscripcion(){
	$form.slideToggle(1000);
	$button.fadeOut(500);
	
}
// function contraerSuscripcion(){
	// $form.slideToggle(1000);
	// $button.fadein(500);
	
// }
	
$button.click( expanderSuscripcion );
// $submit.click( contraerSuscripcion );