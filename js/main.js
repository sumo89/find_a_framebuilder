var app = {};

app.hide1 = function(e){
	e.preventDefault();
	$('.menuListArticle1').toggleClass('hidden');
	$('.menuListArticle2').addClass('hidden');
	$('.menuListArticle3').addClass('hidden');
};app.hide2 = function(e){
	e.preventDefault();
	$('.menuListArticle2').toggleClass('hidden')
	$('.menuListArticle1').addClass('hidden');
	$('.menuListArticle3').addClass('hidden');
};app.hide3 = function(e){
// on click of this, add or remove the hidden class to the div
	e.preventDefault();
	$('.menuListArticle3').toggleClass('hidden')
	$('.menuListArticle1').addClass('hidden');
	$('.menuListArticle2').addClass('hidden');
};

$('.menuListItem1').on('click', app.hide1);
$('.menuListItem2').on('click', app.hide2);
$('.menuListItem3').on('click', app.hide3);


$('.select').change(function(){
	$('.tile').remove();
	var areaVal = $('.select').val();
	$.ajax({
	url: "assets/framebuilders.json",
	success: function(response){
		var results = response.results;
		$.each(results, function(key, value){
			var builders = value;
			if (builders.area === areaVal){
				$('.tileWrap').addClass("hasPics");
				$('#tileWrap').append(
				'<div class="tile clearfix" id="tile"><div class="detailsWrap"><div class="name" id="name"><a target=" " href="' +
				 builders.website + '">' + builders.name + '</a></div>' + '<div class="description" id="description">' +
				 builders.description + '</div><br>' + 
				'<div class="material" id="material">'
				 + 'Materials:  ' + builders.material + '</div>' + 
				 '<div class="specialism" id="specialism">'
				 + 'Frame types:  ' + builders.specialism + '</div>' + 
				'<div class="details" id="details">' + builders.location + 
				'<br>' +  builders.phone + '<br><a href="mailto:' + builders.email + '">' 
				+ builders.email + '</a></div>' + 
				' <div class="website" id="website"><a target=" " href="' + builders.website + 
				'">' + "Website" + 
				' </a> </div></div><div class="pictures" id="pictures">' + 
				 '<img src="' + builders.pictures + '">' + 
				 '</div></div>'
			)}
			else if (areaVal === "the whole of the UK"){
				$('.tileWrap').addClass("hasPics");
				$('#tileWrap').append(
				'<div class="tile clearfix" id="tile"><div class="detailsWrap"><div class="name" id="name"><a target=" " href="' +
				 builders.website + '">' + builders.name + '</a></div>' + '<div class="description" id="description">' +
				 builders.description + '</div><br>' + 
				'<div class="material" id="material">'
				 + 'Materials:  ' + builders.material + '</div>' + 
				 '<div class="specialism" id="specialism">'
				 + 'Frame types:  ' + builders.specialism + '</div>' + 
				'<div class="details" id="details">' + builders.location + 
				'<br>' +  builders.phone + '<br><a href="mailto:' + builders.email + '">' 
				+ builders.email + '</a></div>' + 
				' <div class="website" id="website"><a target=" " href="' + builders.website + 
				'">' + "Website" + 
				' </a> </div></div><div class="pictures" id="pictures">' + 
				 '<img src="' + builders.pictures + '">' + 
				 '</div></div>'
				 )};
		});
		$(document).scrollTop(300);
	}});
});




