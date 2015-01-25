
var $manos1     = $('#aparece2, #aparece8'),
    $manos2     = $('#aparece1, #aparece9'),
    $manos3     = $('#aparece3, #aparece7'),
    $manos4     = $('#aparece4, #aparece10'),
    $manos5     = $('#aparece5, #aparece11'),
    $manos6     = $('#aparece6, #aparece6'),
	$h21 	    = $('#h2-1'),
	$h22 	    = $('#h2-2'),
	$h23 	    = $('#h2-3'),
	$h24 	    = $('#h2-4'),
	$h25 	    = $('#h2-5'),
	$h26 	    = $('#h2-6')
	$caract     = $('#button-mas'),
	$sec1 	    = $('.anima'),
	// $sec2 = $('.parte2'),
	$sec3 	    = $('.parte3'),	
	$boton2     = $('.parte3 aside .btn-plan'),
	$nav 	    = $('.parte3 nav'),	
	$identidad  = $('.parte3 nav ul li:first-child'),
	$internet   = $('.parte3 nav ul li:nth-child(2)'),
	$militancia = $('.parte3 nav ul li:nth-child(3)'),
	$art1 		= $('.parte3 article:nth-child(2)'),
	$art2 		= $('.parte3 article:nth-child(3)'),
	$art3 		= $('.parte3 article:nth-child(4)'),
	$planes     = $('.planes'),
	$btnPlanes  = $('.btn-plan'),
	$loMejor    = $('.planes h3'),
	$precios    = $('.precio'),
	$pp1        = $('.precio p:nth-child(2)'),
	$pp2        = $('.precio p:nth-child(3)'),
	$pp3        = $('.precio p:nth-child(4)'),
	$pp4        = $('.precio p:nth-child(5)'),
	$pp5        = $('.precio p:nth-child(6)'),
	$pp6        = $('.precio p:nth-child(7)'),
	$pbuton     = $('.precio button'),
	$formu      = $('.formu'),
	$irhome     = $('.btn-i'),
	$ircaract   = $('.btn-c'),
	$irprecio   = $('.btn-p');

$(function() {
		setTimeout(function() {		
        $manos1.fadeIn(1000);
        },5000);  
		
});
$(function() {
		setTimeout(function() {		
        $manos2.fadeIn(1000);
        },7000);   
});
$(function() {
		setTimeout(function() {		
        $manos3.fadeIn(1000);
        },9000);   
});
$(function() {
		setTimeout(function() {		
        $manos4.fadeIn(1000);
        },11000);   
});
$(function() {
		setTimeout(function() {		
        $manos5.fadeIn(1000);
        },13000);   
});
$(function() {
		setTimeout(function() {		
        $manos6.fadeIn(1000);
        },16000);   
});

$(function() {
		setTimeout(function() {		
        $h21.slideToggle(2000);
        },1000);  
});
$(function() {
		setTimeout(function() {		
        $h22.slideToggle(2000);
        },4000);  
});
$(function() {
		setTimeout(function() {		
        $h23.slideToggle(2000);
        },6000);  
});
$(function() {
		setTimeout(function() {		
        $h24.slideToggle(2000);
        },8000);  
});
$(function() {
		setTimeout(function() {		
        $h25.slideToggle(2000);
        },11000);  
});
$(function() {
		setTimeout(function() {		
        $h26.slideToggle(2000);
        },15000);  
});
$(function() {
		setInterval(function() {
		setTimeout(function() {	
		$caract.fadeTo(1000, 0.7).fadeTo(1000, 1.0);     
		
        },17000);  
		
},200);

});
setInterval(function() {
	$botones1.fadeTo(700, 0.8).fadeTo(1000, 1.0);
});



function agregarSection() {
		$sec3.slideToggle(1500);
		$sec1.slideToggle(1500);
		$nav.slideDown (1500);
		$identidad.css({ "font-size": "3rem", "opacity": 1});
			setTimeout(function() {	
			$boton2.fadeIn (2000);},7000);  
};
// function agregarSection3() {
		// $sec2.slideToggle(2000);
		// $sec3.slideToggle(2000);
		// // $identidad.css({ "background-color": "rgba(255,255,255,1)", "border-color": "#29ABE2", "font-size": "3rem"}); 
		// $identidad.toggleClass("di");
		 // // $art2.css('display','none' );
		 // // $art3.css('display','none' );
		
	
// }
function agregarArticulo1() {
		$art1.slideDown(700);
		$art1.fadeIn(1000);
		$identidad.css({ "font-size": "3rem", "opacity": 1});
		$internet.css({ "font-size": "1.8rem", "opacity": .7});
		$militancia.css({ "font-size": "1.8rem", "opacity": .7});
		$art2.css('display','none' );
		$art3.css('display','none' );
		// $art3.remove();
		// $sec3.slideToggle(1000);
		// $art2.slideToggle(1000);
}
function agregarArticulo2() {
		$art2.slideDown(700);
		$art2.fadeIn(1000);
		$internet.css({ "border-color": "#29ABE2", "font-size": "3rem", "opacity": 1});
		$identidad.css({ "border-color": "#29ABE2", "font-size": "1.8rem", "opacity": .7});
		$militancia.css({ "border-color": "#29ABE2", "font-size": "1.8rem", "opacity": .7});
		// $art1.css('display','none' );
		// $art2.css('display','inline-block' );
		
		$art1.css('display','none' );
		$art3.css('display','none' );
		// $art1.slideToggle(1000);
		// $art1.css('display','none' );
		
		
		
		
}
function agregarArticulo3() {
	    // $art2.css('display','none' );
		$art3.slideDown(700);
		$art3.fadeIn(1000);
		$militancia.css({ "border-color": "#29ABE2", "font-size": "3rem", "opacity": 1});
		$identidad.css({ "border-color": "#29ABE2", "font-size": "1.8rem", "opacity": .7});
		$internet.css({ "border-color": "#29ABE2", "font-size": "1.8rem", "opacity": .7});
		$art1.css('display','none' );
		$art2.css('display','none' );
		
}
function agregarPlanes() {
	    // $art2.css('display','none' );
		$planes.slideDown(2000);
		$sec3.css('display','none' );
		setInterval(function() {
		setTimeout(function() {	
		$loMejor.fadeTo(500, 0.7).fadeTo(500, 1.0);     
		
        },7000);  
		
},200);
		
}
function agregarPrecios() {
		$planes.slideToggle(1000);		
		$precios.slideToggle(1000);
setTimeout(function() {	
		$pp1.slideDown(2000);		
        },4000);
setTimeout(function() {	
		$pp2.slideDown(2000);		
        },8000);
setTimeout(function() {	
		$pp3.slideDown(2000);		
        },12000);
setTimeout(function() {	
		$pp4.slideDown(2000);		
        },16000);
setTimeout(function() {	
		$pp5.slideDown(2000);
		$('html,body').animate({
				scrollTop: 1000
			}, 2000);	
        },20000);
setTimeout(function() {	
		$pp6.slideDown(2000);		
        },24000);			

setTimeout(function() {	
		$pbuton.slideDown(2000);		
        },28000);		
};

function agregarForm() {
		$precios.fadeOut(1000);
		$formu.fadeIn(2000);
		$('html,body').scrollTop(0,0);
		
};
function volverHome() {
	    $formu.hide(1000);
		$sec1.show(1000);		
};
function volverCaract() {
	    $formu.hide(1000);
		$sec3.show(1000);
		// $identidad.css('display','block' ); 	
		// $internet.css('display','block' );  
		// $militancia.css('display','block' );
		
		
		
};                          
function volverPrecio() {   
	    $formu.hide(1000);
		$precios.show(1000);		
};

$caract.click( agregarSection );
// $botones1.click( agregarSection3 );
$identidad.click( agregarArticulo1 );
$internet.click( agregarArticulo2 );
$militancia.click( agregarArticulo3 );
$btnPlanes.click( agregarPlanes );
$loMejor.click( agregarPrecios );
$pbuton.click( agregarForm );
$irhome  .click( volverHome );
$ircaract.click( volverCaract );
$irprecio.click( volverPrecio );










