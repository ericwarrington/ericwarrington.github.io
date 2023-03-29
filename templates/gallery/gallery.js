"use strict";

!function()
{
	document.getElementById("links").onclick=function(event)
	{
		var urlProp="img";
		
		event=event || window.event;
		var target = event.target || event.srcElement;
		var link = target.src ? target.parentNode : target;
		var options = {event:event, urlProperty:urlProp};
	//	var links = this.getElementsByTagName('a');
		
		var index=null;
		for(var i=0; i<galleryData.length; i++)
		{
			if(galleryData[i]===link || galleryData[i][urlProp]===link.getAttribute(urlProp))
			{
				index=i;
				break;
			}
		}
		options.index=index || link;
		
		blueimp.Gallery(galleryData, options);
	};
	
	
	console.log(document.readyState);
	
	function setWrapperWidth()
	{
		var imgs=$("#image-wrapper > a");
		var sum=5;  	//buffer so all imgs fit
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
		else if(!imgs[index].src)
		{
			imgComplete();
			return;
		}
		
		function imgComplete()
		{
			var mask=(1 << index);
			bitflag=(bitflag | mask) >>> 0;
			
			if(bitflag==FLAG_MAX)
			{
				console.log("gallery images loaded");
				setWrapperWidth();
			}
		}

		if(imgs[index].complete)
		{
			imgComplete();
		}
		else
		{
			imgs[index].onload=imgComplete;
			imgs[index].onerror=imgComplete;	//TODO: add warning msg
		}
	}
}();









