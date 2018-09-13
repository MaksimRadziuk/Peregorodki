$(document).ready(function(){

	$(".topbar a, .mobile_topbar a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });

	var th = $('.slide').innerHeight();
	$('.slider_track').css('height', th);

	var pl = $('#portfolioSlider').innerWidth();
	$('.slide').css('width', pl);

	$(".galleryPart").css({'minWidth': '100%', 'width':'100%', 'maxWidth':'100%'});
	$('.ug-gallery-wrapper .ug-strip-panel').css('backgroundColor', 'transparent');
	$('.ug-gallery-wrapper .ug-textpanel-bg').css('backgroundColor', 'transparent');

// РАБОТА СЛАЙДЕРА ПОРТФОЛИО

var slides = $('.slide').length;
$('#allProjects').text(slides);
var trackWidth = $('.slide').innerWidth() * slides;
var slideNumber = $('.slide.current').index();
$('#currentProject').text(slideNumber+1);

	$('#nextSlide').click(function () {
		var curPos = $('.slider_track').position().left;
		var newPos = curPos - parseInt(pl);
		$('.slider_track').css('left', newPos);
		var moda = Math.abs(curPos) + parseInt(pl);


		var slideNumber = $('.slide.current').index();
		var indexNumber = slideNumber + 1;
		$('#currentProject').text(indexNumber+1);
		if (moda >= trackWidth){
			$('.slider_track').css('left', curPos);
			$('#currentProject').text(slides);
			$('.slide.current').addClass('current');
		}
		else {
			$('.slider_track').css('left', newPos);
			$('.slide.current').removeClass('current').next('.slide').addClass('current');
		}


	});

	$('#previousSlide').click(function () {
		var curPos = $('.slider_track').position().left;
		var newPos = curPos + parseInt(pl);
		$('.slider_track').css('left', newPos);


		var slideNumber = $('.slide.current').index();
		var indexNumber = slideNumber+1;
		$('#currentProject').text(indexNumber);
		if (newPos > 0) {
			$('.slider_track').css('left', curPos);
			$('#currentProject').text('1');
			$('.slide.current').addClass('current');
		}
		else {
			$('.slide.current').removeClass('current').prev('.slide').addClass('current');
		}
	});

	$(window).resize(function() {

		$('.slider_track').css('left', '0');

		var th = $('.slide').innerHeight();
		$('.slider_track').css('height', th);

		var pl = $('#portfolioSlider').innerWidth();
		$('.slide').css('width', pl);

		var slides = $('.slide').length;
		$('#allProjects').text(slides);
		var trackWidth = $('.slide').innerWidth() * slides;
		var slideNumber = $('.slide.current').index();
		$('#currentProject').text(slideNumber+1);

		$('#nextSlide').click(function () {
			var curPos = $('.slider_track').position().left;
			var newPos = curPos - parseInt(pl);
			$('.slider_track').css('left', newPos);
			var moda = Math.abs(curPos) + parseInt(pl);


			var slideNumber = $('.slide.current').index();
			var indexNumber = slideNumber + 1;
			$('#currentProject').text(indexNumber+1);
			if (moda >= trackWidth){
				$('.slider_track').css('left', curPos);
				$('#currentProject').text(slides);
				$('.slide.current').addClass('current');
			}
			else {
				$('.slider_track').css('left', newPos);
				$('.slide.current').removeClass('current').next('.slide').addClass('current');
			}


		});

		$('#previousSlide').click(function () {
			var curPos = $('.slider_track').position().left;
			var newPos = curPos + parseInt(pl);
			$('.slider_track').css('left', newPos);


			var slideNumber = $('.slide.current').index();
			var indexNumber = slideNumber+1;
			$('#currentProject').text(indexNumber);
			if (newPos > 0) {
				$('.slider_track').css('left', curPos);
				$('#currentProject').text('1');
				$('.slide.current').addClass('current');
			}
			else {
				$('.slide.current').removeClass('current').prev('.slide').addClass('current');
			}
		});

		$(".galleryPart").css({'minWidth': '100%', 'width':'100%', 'maxWidth':'100%'});
		$('.ug-gallery-wrapper .ug-strip-panel').css('backgroundColor', 'transparent');
		$('.ug-gallery-wrapper .ug-textpanel-bg').css('backgroundColor', 'transparent');
	});


// РАБОТА СЛАЙДЕРА КАЛЬКУЛЯТОРА

	$('#calc_next1').click(function() {
		$('.calc_slide.first').removeClass('active');
		$('.calc_slide.second').addClass('active');
		$('.scale_block.first').removeClass('active');
		$('.scale_block.second').addClass('purple active');
	});
	$('#calc_next2').click(function() {
		$('.calc_slide.second').removeClass('active');
		$('.calc_slide.third').addClass('active');
		$('.scale_block.second').removeClass('active');
		$('.scale_block.third').addClass('purple active');
	});
	$('#calc_next3').click(function() {
		$('.calc_slide.third').removeClass('active');
		$('.calc_slide.fourth').addClass('active');
		$('.scale_block.third').removeClass('active');
		$('.scale_block.fourth').addClass('purple active');

		var totalMaterialPre = $('#totalLengthInput').val()*$('#totalHeight').val();	//подсчитваем площадь материалов
		var totalMaterial = totalMaterialPre.toFixed(2);	//округляем до двух знаков площадь материалов
		$('#totalMaterial').text(totalMaterial);			//записываем площадь материалов
		var totalMaterialSum = totalMaterial*2000;			//подсчитываем стоимость материалов
		$('#totalMaterialSum').text(totalMaterialSum);		//записываем сумму стоимость материалов
		var totalDoorAmount = $('#totalDoorAmount').val();	//получаем количество дверей
		$('.totalDoor').text(totalDoorAmount);				//записываем в итогах количество дверей
		var totalDoorSum = totalDoorAmount*7500;			//подсчитываем стоимость всех дверей
		$('#totalDoorSum').text(totalDoorSum);				//записываем стоимость всех дверей
		var totalDoorInstSum = totalDoorAmount*1000;		//подсчитываем стоимость установки дверей
		$('#totalDoorInstSum').text(totalDoorInstSum);		//записываем сумму установки дверей
		var totalLength = $('#totalLengthInput').val();		//получаем значение длины перегородок
		$('#totalLength').text(totalLength);				//записываем в итог длинну перегородок	
		var totalLengthSum = totalLength*1800;				//подсчитываем сумму за монтаж перегородок
		$('#totalLengthSum').text(totalLengthSum);			//записываем сумму за монтаж перегородок
		var deliveryCost = 7500;							//устанавливаем стоимость доставки
		$('#deliveryCost').text(deliveryCost);				//записывем стоимость доставки

		var calculatedSum = parseInt(deliveryCost)+totalLengthSum+totalDoorInstSum+totalMaterialSum+totalDoorSum; //подсчитываем общую сумму в итогах
		$('#calculatedSum').text(calculatedSum);			//записываем общую сумму
	});

	$('#calc_prev2').click(function() {
		$('.calc_slide.first').addClass('active');
		$('.calc_slide.second').removeClass('active');
		$('.scale_block.first').addClass('active');
		$('.scale_block.second').removeClass('purple active');
	});
	$('#calc_prev3').click(function() {
		$('.calc_slide.second').addClass('active');
		$('.calc_slide.third').removeClass('active');
		$('.scale_block.second').addClass('active');
		$('.scale_block.third').removeClass('purple active');
	});
	$('#calc_prev4').click(function() {
		$('.calc_slide.third').addClass('active');
		$('.calc_slide.fourth').removeClass('active');
		$('.scale_block.third').addClass('active');
		$('.scale_block.fourth').removeClass('purple active');
	});

// РАБОТА ТАБОВ КАЛЬКУЛЯТОРА
	$('#tab1').click(function () {
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tab_content1').addClass('active');
	});
	$('#tab2').click(function () {
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tab_content2').addClass('active');
	});
	$('#tab3').click(function () {
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tab_content3').addClass('active');
	});


	$('input#mobileType').click(function() {
		$('input[name="mobileType"] + label').addClass('active');
		$('input[name="stationaryType"] + label').removeClass('active');
		$('input[name="stationaryType"]').prop('checked',false);
		$('input[name="plumbingType"] + label').removeClass('active');
		$('input[name="plumbingType"]').prop('checked',false);
	});
	$('input#stationaryType').click(function() {
		$('input[name="stationaryType"] + label').addClass('active');
		$('input[name="mobileType"] + label').removeClass('active');
		$('input[name="mobileType"]').prop('checked',false);
		$('input[name="plumbingType"] + label').removeClass('active');
		$('input[name="plumbingType"]').prop('checked',false);
	});
	$('input#plumbingType').click(function() {
		$('input[name="plumbingType"] + label').addClass('active');
		$('input[name="mobileType"] + label').removeClass('active');
		$('input[name="mobileType"]').prop('checked',false);
		$('input[name="stationaryType"] + label').removeClass('active');
		$('input[name="stationaryType"]').prop('checked',false);
	});
	$('input#movingType').click(function() {
		$('input[name="plumbingType"] + label').removeClass('active');
		$('input[name="mobileType"]').prop('checked',false);
		$('input[name="mobileType"] + label').removeClass('active');
		$('input[name="plumbingType"]').prop('checked',false);
		$('input[name="stationaryType"] + label').removeClass('active');
		$('input[name="stationaryType"]').prop('checked',false);
	});
	$('input#fireproofType').click(function() {
		$('input[name="plumbingType"] + label').removeClass('active');
		$('input[name="mobileType"]').prop('checked',false);
		$('input[name="mobileType"] + label').removeClass('active');
		$('input[name="plumbingType"]').prop('checked',false);
		$('input[name="stationaryType"] + label').removeClass('active');
		$('input[name="stationaryType"]').prop('checked',false);
	});
	$('input#fullglassType').click(function() {
		$('input[name="plumbingType"] + label').removeClass('active');
		$('input[name="mobileType"]').prop('checked',false);
		$('input[name="mobileType"] + label').removeClass('active');
		$('input[name="plumbingType"]').prop('checked',false);
		$('input[name="stationaryType"] + label').removeClass('active');
		$('input[name="stationaryType"]').prop('checked',false);
	});


	$('.hamburger').click(function () {
		$('.menu_wrap').slideToggle();
		$(this).toggleClass('active');
	});
	$('.menu_wrap a').click(function () {
		$('.menu_wrap').slideToggle();
		$('.hamburger').toggleClass('active');
	});
	$('.callback_icon').click(function () {
		$('.dropdown_phone').slideToggle();
		$(this).toggleClass('active');
	});


	$('.portfolio .mobile_row').click(function () {
		$(this).next('.portfolio .dropdown_part').slideToggle();
		$(this).children('.portfolio .mobile_row .arrow').toggleClass('active');
	});


// РАБОТА ПРОМОТКИ ФОТО ВАРИАНТОВ НА МОБИЛКЕ
	$('#variantNextSlide').click(function () {
		var slideLeftImgPos = $('.mobile_variant .img_part img').position().left;
		var slideLeftImg = slideLeftImgPos - 80;
		$('.mobile_variant .img_part img').css('left', slideLeftImg);

		var elWidth = $('.mobile_variant .img_part img').innerWidth();
		var windowWidth = $('.mobile_variant .img_part').innerWidth();
		var edgePos = elWidth - windowWidth;
		var modaSlideLeftImg = Math.abs(slideLeftImg);
		if (edgePos <= modaSlideLeftImg){
			$('.mobile_variant .img_part img').css('left', -edgePos);
		}
	});
	$('#variantPrevSlide').click(function () {
		var slideLeftImgPos = $('.mobile_variant .img_part img').position().left;
		var slideLeftImg = slideLeftImgPos + 80;
		$('.mobile_variant .img_part img').css('left', slideLeftImg);

		var elWidth = $('.mobile_variant .img_part img').innerWidth();
		var windowWidth = $('.mobile_variant .img_part').innerWidth();
		var modaSlideLeftImg = Math.abs(slideLeftImg);
		if (slideLeftImg >= 0){
			$('.mobile_variant .img_part img').css('left', '0px');
		}
	});





});

$(window).on("load", function() {
	var pl = $('#portfolioSlider').innerWidth();
	$('.slide').css('width', pl);

	$("#gallery1").unitegallery();
	$("#gallery2").unitegallery();
	$("#gallery3").unitegallery();
	$("#gallery4").unitegallery();
	$("#gallery5").unitegallery();
	$("#gallery6").unitegallery();
	$("#gallery7").unitegallery();
	$("#gallery8").unitegallery();
	$("#gallery9").unitegallery();
	$(".galleryPart").css({'minWidth': '100%', 'width':'100%', 'maxWidth':'100%'});
	$('.ug-gallery-wrapper .ug-strip-panel').css('backgroundColor', 'transparent');
	$('.ug-gallery-wrapper .ug-textpanel-bg').css('backgroundColor', 'transparent');
});
