//Eric Warrington

"use strict";

if(!window.jQuery)
{
	window.$jq=[];
	console.log("preparing fake jQuery");

	Object.defineProperty(window, 'jQuery',
	{
		set: function(jquery)
		{
			console.log("jQuery " + jquery.fn.jquery.replace(/[^0-9.]/gi, '') + " loaded!!!");
			
			$=jquery;
			for(var i=0; i<$jq.length; i++)
			{
				$($jq[i]);
			}

			//clear the function queue
			$jq.length=0;
		},
		get: function()
		{
			return $.fn ? $ : undefined;
		},
		enumerable: true,
		configurable: true
	});

	window.$=function()
	{
		if(typeof arguments[0]==="function")
		{
			$(document).ready(arguments[0]);
		}
		else if(arguments[0]===document)
		{
			var val=
			{
				ready: function(fn)
				{
					console.log("registering function...  " + fn);
					$jq.push(fn);
				}
			};
			
			return val;
		}
		else if(arguments[0])
		{
			throw new Error("jQuery has not been loaded. '" + typeof arguments[0] + "' arguments aren't legal here.");
		}
		else return {test:123};
	}
}

