/*preloader*/
$(window).load(function() {
	/*плавное исчезание*/
	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");
}); 



/*сохранение элементов в переменные*/
var contentElem = $(".share_details_price_form");
var sidebarElem = $(".sidebar");


/*сохранение высота блока контента и блока сайдбара*/
var contentHeight = contentElem.height();
var sidebarHeight = sidebarElem.height();


var maxHeight = 0;


/*если высота контента больше чем высота сайдабара, сохраняем её, в противном случае сохраняем высоту сайдбаба*/
maxHeight = contentHeight > sidebarHeight ? contentHeight : sidebarHeight;

/*установка контенту и сайдбару одинаковой высоты*/
contentElem.height(maxHeight);
sidebarElem.height(maxHeight);




$(".popup").magnificPopup({type:"image"});


/*
	*/

$(".popup_form_button").magnificPopup({
	type:"inline",
	midClick: true,
	src: '#form_popup'

});




/*размер товара в реальном виде*/
/*при клике получаем большое изображение и маленькое и меняем их местами*/
$(".single_good_photo_small_descr, .single_good_photo_small img").click(function() {
	/*сохранение элементов изображенией*/
	var bigImgElem = $(".single_good_photo img");
	var smallImgElem = $(".single_good_photo_small img");

	/*ссылки на изображения*/
	var bigImgSrc = bigImgElem.attr("src");
	var smallImgSrc = smallImgElem.attr("src");

	/*заменяем src у большого и маленького img*/
	bigImgElem.attr("src", smallImgSrc);
	smallImgElem.attr("src", bigImgSrc);
});