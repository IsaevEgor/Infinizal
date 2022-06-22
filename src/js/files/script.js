// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//==БУРГЕР=======================================================
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__container, body').toggleClass('active');
    })
})


//==ФОН ДЛЯ МЕНЮ=================================================
$(document).ready(function(){
 
	let $menu = $(".header");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 50 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});//scroll
});

//==Спойлер================================================================

$(document).ready(function() {
	$('.spollers__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});