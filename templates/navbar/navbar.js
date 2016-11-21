"use strict";
//Eric Warrington


//needs to be done first
w3DisplayData("navbar", navbarData);


!function()
{
	var e=document.getElementById("contact").children[0];
	var strings=["lia", "subway"];
	e.children[0].innerHTML=parseInt("16FE", 16);
	e.onclick=function() { i=0; window.open('m' + strings[i].reverse() + "to" + e.href.replace(/[a-z_]/g, '').replace(new RegExp('.{'+ 2 +'}'), '$&' + 's').toLowerCase() + parseInt("16FE", 16) + e.children[2].alt + ["t.",'i','r'].reverse().concat(['e','d'],[strings[i+1].charAt(1)]).join('')); };
	e.href="mailto:send me an email!";
	var span=($) ? $("<span></span>") : document.createElement("span");
	e.insertBefore(span.text("esw")[0], e.children[0]);
	e.onmouseover=function(e) { this.href="mailto:Eric_Warrington"; };
	e.parentNode.onmouseover=function(event) { e.href="mailto:Eric_Warrington"; };

	//e.onmouseover=function(e) { this.href="mailto:Eric_Warrington"; e.preventDefault(); };
	//e.onmouseout=function() { this.href="javascript:void(0);"; };

	console.log(e.onclick);
	console.log(e.onmouseover);
	window.debugE=e;
}();

