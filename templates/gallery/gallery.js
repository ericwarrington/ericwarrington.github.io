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
		var sum=405;	//buffer so all imgs fit
		var buffer=[]	//for testing
		for(var i=0; i<imgs.length; i++)
		{
			sum+=imgs[i].clientWidth;
			buffer[i]=imgs[i].clientWidth;
		}
		
		$("#image-wrapper")[0].setAttribute("style", "display: block; width:" + sum + "px; height:100%");
		console.log(buffer, sum);
	}
	
	var bitflag=0;
	var FLAG_MAX=0xFFFFFFFF;
	
	var imgs=$("#image-wrapper > a > img");
	bitflag=FLAG_MAX << imgs.length;
	for(var i=0; i<imgs.length; i++)
	{
		callme(i);	//pass the *value* of the index
	}
		
	//'index' is passed by value
	function callme(index)
	{
		if(index>31)
		{
			console.warn("Gallery can only handle 32 images at a maximum.", index);
			return;
		}
		
		imgs[index].onload=function()
		{
			var mask=(1 << index);
			bitflag=(bitflag | mask) >>> 0;
			
			if(bitflag==FLAG_MAX)
			{
				console.log("gallery images loaded");
				setWrapperWidth();
			}
		};
	}
}();









