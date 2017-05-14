/*неправильное колличество элементов относительо разришения, по этому проблемы*/



/*window width*/
var screenWidth = $(window).width();

/*устройства меньше 768 как 2 колонки
dev_less_768 = 2;*/

/*устройства между 768 и 992 как 3 колонки
dev_bettwen768and992 = 3;*/

/*проблемы при маленьком разрешении. Налазиет текст*/



/*устройства между 992 и 1200 как 4 колонки
dev_bettwen992and1200 = 4;*/
var cols_to_device = {
	dev_less_768: 2,
	dev_bettwen768and992: 4,
	/*dev_bettwen768and924: 3,*/

	dev_bettwen992and1200: 4
}



//колличество элементов в строке
var elementsInRow = 2;

//опрделение нужного колличества колонок для опредленной высоты.

if(screenWidth < 768) {
	elementsInRow = cols_to_device.dev_less_768;
} else if (screenWidth > 769 && screenWidth < 992) {
	elementsInRow = cols_to_device.dev_bettwen768and992;
} else if (screenWidth > 993 && screenWidth < 1200) {
	elementsInRow = cols_to_device.dev_bettwen992and1200;

}



alert(elementsInRow);

alert(screenWidth);



/*просто предопределение элементов. В них будут*/
/*var goodElem1,goodElem2,goodElem3,goodElem4;*/


/*будет содержать объект элементов в строке. От 1 до 4.*/
var goodsRow = [];


/*будет содержать максимальную высоту одного из 2 или 3 или 4 блоков. После каждого цикла значение сбрасывается в 0.*/
var maxHeightInRow = 0;

//итерация на текущем элементе.
var iterationElem = 0;

//elementsInRow также определяет число итерация которые нужно сделать.

/*сохранение всех товаров*/
$(".good").each(function(i) {
	//увелечение счетчика на 1. Во время кажодй итерации.
	++iterationElem;


	/*сохранение элемента в строке. Ключ = порядковому номеру элемента.*/
	goodsRow.push(this);

	/*высота текущего элемента*/
	currGoodHeight = $(this).height();

	/*если выоста текущего элемент больше чем максимальная высота. Сохраняем её*/
	if( currGoodHeight > maxHeightInRow ) {
		maxHeightInRow = currGoodHeight;
	}

	//если число итераций = числу элементов в строке. Устанавливаем одинаковою высоту для всех элементов в строке.
	if(iterationElem >= elementsInRow) {

		/*перебор сохраненных элементов товаров и уставока им значения максимальной высоты элемента.*/
		$.each(goodsRow, function(i, elem) {
			$(elem).height(maxHeightInRow);

			//установка ширины элементы
			var widthElem = $(elem).width();

			//нахождение контейнера с содержимым и позиционирование его по нижнему краю элемента
			$(elem).find(".good_inner").css({
				position: 'absolute',
  				bottom: '0px',
				width: '100%'
			});
		});

		//обнуление переменной после каждого цыкла.
		iterationElem = 0;

		//обнуление массива
		goodsRow = [];

		//Обнуление максиальной высотый
		maxHeightInRow = 0;
	}
});