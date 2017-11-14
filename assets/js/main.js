$(document).ready(function(){

$(".searchBar").on('keyup', function(){
    var form = $('.searchForm');
    var classtoChange = 'searchMed_outer--show';
    if(this.value.length > 1){
        form.addClass(classtoChange);
    }
    else 
    {
        form.removeClass(classtoChange);
    }
});


$('.btn_calculate--minus').click(function(){
	var input = $(this).next();
	var inputVal = parseInt(input.val());
	var calc = inputVal - 1;
	if(calc !== -1) {
	    input.val(inputVal - 1);

		var rs = $(this).parent().parent().parent().find('.searchMed_rs--js');
		var rsVal = parseInt(rs.text());
		rs.text(rsVal - rs.data('rs'));
	}
});

$('.btn_calculate--plus').click(function(){
	var input = $(this).prev();
	var inputVal = parseInt(input.val());
	    input.val(inputVal + 1);

	var rs = $(this).parent().parent().parent().find('.searchMed_rs--js');
	var rsVal = parseInt(rs.text());
	rs.text(rsVal + rs.data('rs'));
});

  $(".owl-carousel").owlCarousel({
  	items: 1,
  	dots: true,
    loop:true,
autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true
    });

});