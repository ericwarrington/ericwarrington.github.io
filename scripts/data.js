"use strict";

var projects=
[
	{
		heading: "Curveball: 3D Pong",
		mutedHeading: "Test your reflexes in this fun adaptation of Pong in 3D.",
		img: "https://lh3.googleusercontent.com/-mgagVda3YX2mkzFcCnGZW-Ck0WnQLfvyH4rXW2pa76cTi8GsCzx-um34DcexYU2xY4=h900",
		description: "A game of Pong in 3D made with the Unity game engine. Beat your opponent by curving the ball with your paddle and bouncing it off the walls and past his paddle! Easy and fun to play, but difficult to master.",
		url: "./curveball.html",
		pushRight: "",
		pullLeft: ""
	},
	{
		heading: "Beyond the Tales",
		mutedHeading: "A 2D JRPG.",
		img: "./projects/beyond/images/world_map.png",
		url: "./beyond.html",
		description: "Inspired by the early Final Fantasy and Zelda games, <i>Beyond the Tales</i> is a 2D JRPG centered around a young man named Joreld. Raised and trained in the way of the Knight by his father, a retired Knight Commander of the kingdom of Cairnmount, Joreld comes home one day and finds that his world is going to change forever.",
		pushRight: "",
		pullLeft: "",
	},
	{
		heading: "Unnamed Roguelike",
		mutedHeading: "Heavily influenced by <i>The Binding of Isaac</i>.",
		img: "./projects/roguelike/images/IMG_0265.png",
		description: "A top-down dungeon-crawler roguelike game, designed to play and feel like <i>The Binding of Isaac: Rebirth</i>, yet be totally different at the same time. Built for the iPad using SpriteKit.",
		url: "./roguelike.html",
		pushRight: "",
		pullLeft: ""
	},
	{
		heading: "Mancala AI Module",
		mutedHeading: "AI for the board game Mancala.",
		img: "./projects/mancala/mancala-ss.png",
		description: "A computer player module designed to beat another computer player that makes moves at random. Mancala is a classic 2-player board game where each player gets 6 'pits' and one 'mancala'. Each pit starts with 4 stones; turns consist of selecting a pit and dropping its stones, one at a time, into consecutive pits, counter-clockwise. A player drops stones into his own mancala, but skips over his opponent's mancala. The game ends when either player's 6 pits are empty and the player with the most stones in his mancala wins.",
		url: "./mancala.html",
		pushRight: "",
		pullLeft: ""
	}
];

//odd-children have img on left and text on right
for(var i=1; i<projects.length; i+=2)
{
	projects[i].pushRight="col-md-push-5";
	projects[i].pullLeft="col-md-pull-7";
}
