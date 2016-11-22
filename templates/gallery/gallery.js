"use strict";

!function()
{
	w3DisplayData("links", galleryData);
	
	
	document.getElementById('links').onclick=function(event)
	{
		const urlProp="img";
		
		event=event || window.event;
		var target = event.target || event.srcElement;
		var link = target.src ? target.parentNode : target;
		var options = {event:event, urlProperty:urlProp};
	//	var links = this.getElementsByTagName('a');
		
		var index=null;
		for(var i=0; i<galleryData.data.length; i++)
		{
			if(galleryData.data[i]===link || galleryData.data[i][urlProp]===link.getAttribute(urlProp))
			{
				index=i;
				break;
			}
		}
		options.index=index || link;
		
		blueimp.Gallery(galleryData.data, options);
	};
	
	
	console.log(document.readyState);
	
	function setWrapperWidth()
	{
		var imgs=$("#image-wrapper > a");
		var sum=5;	//buffer so all imgs fit
		for(var i=0; i<imgs.length; i++)
		{
			sum+=imgs[i].clientWidth;
		}
		
		$("#image-wrapper")[0].setAttribute("style", "display: block; width:" + sum + "px; height:100%");
	}
	
	if(document.readyState=="complete")
	{
		setWrapperWidth();
	}
	else
	{
		$(document).load(setWrapperWidth);
	}
}();
