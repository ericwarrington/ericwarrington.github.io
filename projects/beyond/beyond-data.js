"use strict";

var beyondData1=
[
	{
		heading: "Beyond the Tales",
		mutedHeading: "",
		img: "./projects/beyond/images/world_map.png",
		description: "Inspired by the early Final Fantasy and Zelda games, Beyond the Tales is a 2D JRPG centered around a young man named Joreld. Raised and trained in the way of the Knight by his father, a retired Knight Commander of the kingdom of Cairnmount, Joreld comes home one day and finds that his world is going to change forever.",
		url: "#screenshots"
	},
	{
		heading: "Battles",
		mutedHeading: "A 2D JRPG.",
		img: "./projects/beyond/images/battle1.png",
		url: "#screenshots",
		description: ""
	},
	{
		heading: "Load Menu",
		mutedHeading: "",
		img: "./projects/beyond/images/load_menu.png",
		description: "",
		url: "#screenshots"
	}
];

var beyondData2=beyondData1.concat(
[
	{
		img: "./projects/beyond/images/throne_room.png"
	},
	{
		img: "./projects/beyond/images/farm_intro.png"
	},
	{
		img: "./projects/beyond/images/quarry1.png"
	},
	{
		img: "./projects/beyond/images/battle2.png"
	},
	{
		img: "./projects/beyond/images/quarry2.png"
	},
	{
		img: "./projects/beyond/images/roseplain.png"
	},
	{
		img: "./projects/beyond/images/inside_house.png"
	},
	{
		img: "./projects/beyond/images/titan_fells.png"
	},
	{
		img: "./projects/beyond/images/tf-sky_bridge.png"
	}
])

//odd children have img on left and text on right
for(var i=1; i<projects.length; i+=2)
{
	projects[i].pushRight="col-md-push-5";
	projects[i].pullLeft="col-md-pull-7";
}
