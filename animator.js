var imagesAnimators = new Array();
function Anim(animationObject, obj, delay) { imagesAnimators[animationObject.id] = setInterval(animationObject.animate, delay, obj); }
function DeAnim(animationObject) { animationObject.deanimate(); }
function Animator(images)
{
	this.currentImage = 0;
	this.images = images;
	this.id = imagesAnimators.length;
	this.animate = function(obj) 
	{
		var objElement = document.getElementById(obj);
		if(objElement)
		{
			if(!this.currentImage) this.currentImage = 0;
			if(objElement.tagName == "IMG") objElement.src = images[this.currentImage];
			else objElement.innerHTML = "<img src='" + images[this.currentImage] + "'>";
			if(currentImage + 1 < images.length) this.currentImage++; 
			else this.currentImage = 0; 	
		}
	}
	this.deanimate = function() { clearInterval(imagesAnimators[this.id]); }
}