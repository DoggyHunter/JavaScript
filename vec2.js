function vector2(x, y)
{
	this.x = x;
	this.y = y;
	
	this.add = function(vec) { return new vector2(this.x + vec.x, this.y + vec.y); }
	this.sub = function(vec) { return new vector2(this.x - vec.x, this.y - vec.y); }
	this.dot = function(vec) { return this.x*vec.x + this.y*vec.y; }
	this.mul = function(vec) { console.log("Use: vector3"); }
	
	this.maxX = function(vec) { if(this.x>vec.x) return this.x; else return vec.x; }
	this.maxY = function(vec) { if(this.y>vec.y) return this.y; else return vec.y; }
	
	this.minX = function(vec) { if(this.x<vec.x) return this.x; else return vec.x; }
	this.minY = function(vec) { if(this.y<vec.y) return this.y; else return vec.y; }
}