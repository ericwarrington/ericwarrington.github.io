"use strict";

var curveData1=
{
	data:
	[
		{
			heading: "Curveball: 3D Pong",
			mutedHeading: "Test your reflexes in this fun adaptation of Pong in 3D.",
			img: "https://lh3.googleusercontent.com/-mgagVda3YX2mkzFcCnGZW-Ck0WnQLfvyH4rXW2pa76cTi8GsCzx-um34DcexYU2xY4=h900",
			description: "A game of Pong in 3D made with the Unity game engine. Beat your opponent by curving the ball with your paddle and bouncing it off the walls and past his paddle! Easy and fun to play, but difficult to master. Available for download <a href='https://play.google.com/store/apps/details?id=com.blakcat.pong'>here</a>.",
			url: "./curveball.html"
		},
		{
			heading: "Curveball Menu Options",
			mutedHeading: "A 2D JRPG.",
			img: "https://lh3.googleusercontent.com/Xefj4KtvpFkKglZgM_T__YhcLungfJuapVrUBPMGJI2jwZ5sj4jT8Ym6Yawh7lZ_zQ=h900",
			url: "./beyond.html",
			description: ""
		},
		{
			heading: "Sudden Death Mode",
			mutedHeading: "",
	 		img: "https://lh3.googleusercontent.com/D9CuAVOO3SruP7lxXrYQoItS9s86gNVNfRmu3sY9KD4Vv-ZNf7xy4CM5U8ixZIzRhog=h900",
			description: "",
	 		url: "./roguelike.html"
		}
	 ]
};

var curveData2=
{
	data: curveData1.data.concat(
	[
		{
			img: "https://lh3.googleusercontent.com/urzX41HEA41--l1Z_gMjAjRK_WP0RGhZeBa89TPgd6cUcCt-pkw40ZtScZJiFvPh0w=h900"
		},
		{
			img: "https://lh3.googleusercontent.com/tw3iDHlYqRDeTGOnfFh5Nj_S27RZHiRtZdLhSTeJm9hdrkhMI8ch4F9D3hFJ8giTJEQ=h900"
		},
		{
			img: "https://lh3.googleusercontent.com/lzsg9A6IeTMGR-S0Zm-gwdujFg8YEHdjXPFjQ-j9kGVAXKZxN6GzYYi77-5uFZkpSrKA=h900"
		}
	])
};

for(var i=1; i<projects.data.length; i+=2)
{
	//if(i%2===1)	//odd-children have img on left and text on right
	{
		projects.data[i].pushRight="col-md-push-5";
		projects.data[i].pullLeft="col-md-pull-7";
	}
}


function displayFeaturetteData()
{
	w3DisplayData("featurette-repeat", featuretteData);
};



