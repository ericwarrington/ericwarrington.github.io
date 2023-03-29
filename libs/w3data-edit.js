//Eric Warrington
//

"use strict";

/* W3Data ver 1.1 by W3Schools.com, edited */
const w3DataObject = new Set();

function w3DisplayData(elementIdOrRef, data = window)
{
	var htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
	
	if(elementIdOrRef instanceof Element)
	{
		htmlObj = elementIdOrRef;
	}
	else
	{
		htmlObj = document.getElementById(elementIdOrRef) || document.body;
	}
	
	htmlTemplate = w3InitTemplate(htmlObj);
	html = htmlTemplate.cloneNode(true);
	arr = w3GetElementsByAttribute(html, "w3-repeat");
	l = arr.length;
	for(j=(l-1); j>=0; j-=1)
	{
		cc = arr[j].getAttribute("w3-repeat").split(" ");
		if(cc.length == 1)
		{
			repeat = cc[0];
		}
		else
		{
			repeatX = cc[0];
			repeat = cc[2];
		}
		arr[j].removeAttribute("w3-repeat");
		repeatObj = data[repeat];
		if(repeatObj instanceof Array || (repeatObj && typeof repeatObj[Symbol.iterator] == "function"))
		{
			i = 0;
			for(x of repeatObj)
			{
				i += 1;
				rowClone = arr[j];
				rowClone = w3ReplaceCurly(rowClone, "element", repeatX, x);
				a = rowClone.attributes;
				for(ii=0; ii<a.length; ii++)
				{
					a[ii].value = w3ReplaceCurly(a[ii], "attribute", repeatX, x, i-1).value;
				}
				
				let child = (arr[j] == html) ? htmlObj : arr[j];
				let parent = child.parentNode;
				(i === repeatObj.length) ? parent.replaceChild(rowClone, child) : parent.insertBefore(rowClone, child);
			}
		}
		else
		{
			console.warn("w3-repeat requires an iterable value. " + `${typeof repeatObj} (${repeatObj}) is not iterable.`);
			continue;
		}
	}

	html = w3ReplaceCurly(html, "element");
	try {htmlObj.parentNode.replaceChild(html, htmlObj)}
	catch(e) {console.error("Caught error -", e)}

	function w3InitTemplate(obj)
	{
		if(w3DataObject.has(obj))
		{
			return w3DataObject.get(obj);
		}

		const template = obj.cloneNode(true);
		w3DataObject.add(template);
		return template;
	}

	function w3GetElementsByAttribute(x, att)
	{
		let arr = Array.from(x.querySelectorAll(`[${att}]`));
		if(x.getAttribute(att)) arr.unshift(x);
		return arr;
	}

	function w3ReplaceCurly(elmnt, typ, repeatX, x, index)
	{
		var value, rowClone, pos1, originalHtml, pos2, cc, r;
		rowClone = elmnt.cloneNode(true);
		pos1 = 0;
		while(pos1 > -1)
		{
			originalHtml = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
			pos1 = originalHtml.indexOf("{{", pos1);
			if(pos1 === -1)
			{
				break;
			}
			pos2 = originalHtml.indexOf("}}", pos1 + 1);
			const valueToReplace = originalHtml.substring(pos1 + 2, pos2);
			value = undefined;
			for(let lookFor of valueToReplace.split("||"))
			{
				lookFor = lookFor.replace(/^\s+|\s+$/gm, ''); //trim it
				if(x)
				{
					value = x[lookFor];
				}
				if(value == undefined && data)
				{
					value = data[lookFor];
				}
				if(x && value == undefined)
				{
					cc = lookFor.split(".");
					if(cc[0] == repeatX)
					{
						value = x[cc[1]];
					}
				}
				if(x && value == undefined)
				{
					if(lookFor == repeatX)
					{
						value = x;
					}
				}
				if(value == undefined)
				{
					if(lookFor.substr(0, 1) == '"')
					{
						value = lookFor.replace(/"/g, "");
					}
					else if(lookFor.substr(0, 1) == "'")
					{
						value = lookFor.replace(/'/g, "");
					}
				}
				if(value != undefined)
				{
					break;
				}
			}
												  
			if(!value && valueToReplace==="index")
			{
				value=index;
			}
			if(value != undefined)
			{
				r = "{{" + valueToReplace + "}}";
				if(typ == "attribute")
				{
					rowClone.value = rowClone.value.replace(r, value);
				}
				else
				{
					w3ReplaceHTML(rowClone, r, value);
				}
			}
			pos1 = pos1 + 1;
		}
		return rowClone;
	}

	function w3ReplaceHTML(a, r, result)
	{
		var b, l, i, a, x, y, j, ll, nam;
		if(a.hasAttributes())
		{
			b = a.attributes;
			l = b.length;
			for(i=0; i<l; i++)
			{
				if(b[i].value.indexOf(r) > -1)
				{
					b[i].value = b[i].value.replace(r, result);
				}
			}
		}
		x = a.getElementsByTagName("*");
		l = x.length;
		a.innerHTML = a.innerHTML.replace(r, result);
	}
}


function createPromise()
{
	let r;
	let p = new Promise((resolve) => r = resolve);

	return (
	{
		complete: false,
		promise: p,
		resolve: r,
	});
}

let w3inclusions={};
Object.defineProperty(window, "fileLoaded",
{
	get: function()
	{
		return (fileName) =>
		{
			if(!w3inclusions[fileName])
				w3inclusions[fileName]=createPromise(fileName);

			return w3inclusions[fileName].promise;
		}
	},
	enumerable: true,
	configurable: true
});


$(function w3IncludeHTML()
{
	var z, i, a, file, xhttp;
	for(let z of document.querySelectorAll("[w3-include]"))
	{
		// if(z[i].getAttribute("w3-include"))
		{
			a = z.cloneNode(false);
			file = z.getAttribute("w3-include");
			let fileName = file.split("/").pop();
 
			console.log("include:", file, !!w3inclusions[fileName]);
			if(!w3inclusions[fileName])
				w3inclusions[fileName]=createPromise(fileName);
			else if(w3inclusions[fileName].complete)
				continue;
 
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function()
			{
				if(xhttp.readyState == 4 && xhttp.status == 200)
				{
					//inclusion order
					// 1. inline js
					// 2. inline HTML
					// 3. other included files (js, html, etc.)
 
					a.removeAttribute("w3-include");
					a.innerHTML = xhttp.responseText;
					z.parentNode.replaceChild(a, z);
 
					//include javascript
					if(a.tagName=="SCRIPT")
					{
						try
						{
							eval(xhttp.responseText + "//# sourceURL=" + file);
						}
						catch(e) {console.warn("Error with script in file: %s\n%s", file, e);}
					}
					else
					{
						var scripts=a.getElementsByTagName("SCRIPT");
						for(var c=0; c<scripts.length; c++)
						{
							var s=scripts[c];
							if(s.childNodes.length>0)
							{
								try
								{
									new Function(s.childNodes[0].data + "//# sourceURL=" + file + '-' + c + ".js")();
									a.innerHTML=xhttp.responseText;
								}
								catch(e) {console.warn("Error with script in file: %s\n%s", file, e);}
							}
						}
					}
 
					//Resolve the Promise associated with the included file
					w3inclusions[fileName].resolve();
					w3inclusions[fileName].complete=true;

					//Call any callbacks listed on the w3-include directive
					var callback=a.getAttribute("callback");
					if(callback)
					{
						window[callback] && window[callback]();
						a.removeAttribute("callback");
					}
 
					w3Interpolate();
					w3IncludeHTML();
				}
				else if(xhttp.readyState==4)
				{
					console.error("There was an error loading %s: %s", file, xhttp.statusText);
					w3Interpolate();
					w3IncludeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
});

function w3Interpolate()
{
	const arr = [...document.querySelectorAll("[w3-interpolate]"), ...document.querySelectorAll("[w3-repeat]")];
	for(let element of arr)
	{
		w3DisplayData(element);
		element.removeAttribute("w3-interpolate");
	}
}

$(w3Interpolate);


function w3Http(target, readyfunc, xml, method)
{
	var httpObj;
	if(!method)
	{
		method = "GET";
	}
	if(window.XMLHttpRequest)
	{
		httpObj = new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		httpObj = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(httpObj)
	{
		if(readyfunc)
		{
			httpObj.onreadystatechange = readyfunc;
		}
		httpObj.open(method, target, true);
		httpObj.send(xml);
	}
}