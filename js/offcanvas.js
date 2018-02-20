


$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
	$('.sidebar-offcanvas').toggleClass('active')
  });
});
$(document).ready(function () {
	$('#blo1').load('article/hist.txt');
	$('#blo2').load('article/ver1.txt');
	$('#blo3').load('article/ver2.txt');
	$('#blo4').load('article/ver3.txt');
	$('#blo5').load('article/ver4.txt');
	$('#blo6').load('article/ver5.txt');
	$('#blo7').load('article/ver55.txt');
	$('#blo8').load('article/ver6.txt');
	$('#blo9').load('article/ver7.txt');
	$('#blo10').load('article/ver8.txt');
	$('#blo11').load('article/ver9.txt');
	$('#blo12').load('article/ver10.txt');
	$('#blo13').load('article/ver11.txt');
});
$(function () {
  $('[data-toggle="popover"]').popover()
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
