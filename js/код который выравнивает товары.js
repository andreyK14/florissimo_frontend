/*������������ ����������� ��������� ����������� ����������, �� ����� ��������*/



/*window width*/
var screenWidth = $(window).width();

/*���������� ������ 768 ��� 2 �������
dev_less_768 = 2;*/

/*���������� ����� 768 � 992 ��� 3 �������
dev_bettwen768and992 = 3;*/

/*�������� ��� ��������� ����������. �������� �����*/



/*���������� ����� 992 � 1200 ��� 4 �������
dev_bettwen992and1200 = 4;*/
var cols_to_device = {
	dev_less_768: 2,
	dev_bettwen768and992: 4,
	/*dev_bettwen768and924: 3,*/

	dev_bettwen992and1200: 4
}



//����������� ��������� � ������
var elementsInRow = 2;

//���������� ������� ����������� ������� ��� ����������� ������.

if(screenWidth < 768) {
	elementsInRow = cols_to_device.dev_less_768;
} else if (screenWidth > 769 && screenWidth < 992) {
	elementsInRow = cols_to_device.dev_bettwen768and992;
} else if (screenWidth > 993 && screenWidth < 1200) {
	elementsInRow = cols_to_device.dev_bettwen992and1200;

}



alert(elementsInRow);

alert(screenWidth);



/*������ ��������������� ���������. � ��� �����*/
/*var goodElem1,goodElem2,goodElem3,goodElem4;*/


/*����� ��������� ������ ��������� � ������. �� 1 �� 4.*/
var goodsRow = [];


/*����� ��������� ������������ ������ ������ �� 2 ��� 3 ��� 4 ������. ����� ������� ����� �������� ������������ � 0.*/
var maxHeightInRow = 0;

//�������� �� ������� ��������.
var iterationElem = 0;

//elementsInRow ����� ���������� ����� �������� ������� ����� �������.

/*���������� ���� �������*/
$(".good").each(function(i) {
	//���������� �������� �� 1. �� ����� ������ ��������.
	++iterationElem;


	/*���������� �������� � ������. ���� = ����������� ������ ��������.*/
	goodsRow.push(this);

	/*������ �������� ��������*/
	currGoodHeight = $(this).height();

	/*���� ������ �������� ������� ������ ��� ������������ ������. ��������� �*/
	if( currGoodHeight > maxHeightInRow ) {
		maxHeightInRow = currGoodHeight;
	}

	//���� ����� �������� = ����� ��������� � ������. ������������� ���������� ������ ��� ���� ��������� � ������.
	if(iterationElem >= elementsInRow) {

		/*������� ����������� ��������� ������� � �������� �� �������� ������������ ������ ��������.*/
		$.each(goodsRow, function(i, elem) {
			$(elem).height(maxHeightInRow);

			//��������� ������ ��������
			var widthElem = $(elem).width();

			//���������� ���������� � ���������� � ���������������� ��� �� ������� ���� ��������
			$(elem).find(".good_inner").css({
				position: 'absolute',
  				bottom: '0px',
				width: '100%'
			});
		});

		//��������� ���������� ����� ������� �����.
		iterationElem = 0;

		//��������� �������
		goodsRow = [];

		//��������� ����������� �������
		maxHeightInRow = 0;
	}
});