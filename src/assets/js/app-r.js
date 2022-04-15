window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista-r'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores-r',
		arrows: {
			prev: '.carousel__anterior-r',
			next: '.carousel__siguiente-r'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});