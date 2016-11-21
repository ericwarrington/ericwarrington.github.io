"use strict";

!function() //displayCarouselData()
{
	w3DisplayData("carousel-repeat", carouselData);
	w3DisplayData("cIndicator-repeat", carouselData);
	
	$(".carousel-indicators li:first").addClass("active");
	$(".carousel-inner .item:first").addClass("active");
}();
