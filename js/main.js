var app = {};

app.toggleArticles = function(index){
	var thisElement = document.getElementsByClassName('menuListArticle')[index];

	if ( $(thisElement).hasClass('showing') ){
		$('.menuListArticle').removeClass('showing')
	} else {
		$('.menuListArticle').removeClass('showing')
		$(thisElement).addClass('showing');
	}
}

$('.menuListTabs').on('click', function(event){
	event.preventDefault();
	var elementIndex = $(this).index();
	app.toggleArticles(elementIndex);
});

$('.select').change(function(){
	$('.tile').remove();
	var areaVal = $('.select').val();
	$.ajax({
	url: "assets/framebuilders.json",
	success: function(response){
		var results = response.results;
		$.each(results, function(key, value){
			var builders = value;
			$('.tileWrap').addClass("hasPics");
				$('#tileWrap').append(
				'<div class="tile clearfix" id="tile">'+
					'<div class="detailsWrap">'+
						'<div class="name" id="name">'+
							'<a target=" " href="'+ builders.website + '">' + builders.name + '</a>'+
						'</div>' + 
						'<div class="description" id="description">'+ builders.description + '</div><br>' + 
						'<div class="material" id="material"> Materials:  ' + builders.material + '</div>' + 
				 		'<div class="specialism" id="specialism"> Frame types:  ' + builders.specialism + '</div>' + 
						'<div class="details" id="details">' + builders.location + '<br>' +  builders.phone + '<br>'+
							'<a href="mailto:' + builders.email + '">'+ builders.email + '</a>'+
						'</div>' + 
						'<div class="website" id="website">'+
							'<a target=" " href="' + builders.website + '"> Website </a>'+
						'</div>'+
					'</div>'+
					'<div class="pictures" id="pictures">' + 
				 		'<img src="' + builders.pictures + '">' + 
					 '</div>'+
				'</div>');
		});
		$(document).scrollTop(300);
	}});
});




