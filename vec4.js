function vector4(x, y, z, w)
{
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	
	this.add = function(vec) { return new vector4(this.x + vec.x, this.y + vec.y, this.z + vec.z, this.w + vec.w); }
	this.sub = function(vec) { return new vector4(this.x - vec.x, this.y - vec.y, this.z - vec.z, this.w - vec.w); }
	this.dot = function(vec) { return this.x*vec.x + this.y*vec.y + this.z*vec.z + this.w*vec.w; }
	this.mul = function(vec) { console.log("Not supported"); }
	
	this.maxX = function(vec) { if(this.x > vec.x) return this.x; else return vec.x; }
	this.maxY = function(vec) { if(this.y > vec.y) return this.y; else return vec.y; }
	this.maxZ = function(vec) { if(this.z > vec.z) return this.z; else return vec.z; }
	this.maxW = function(vec) { if(this.w > vec.w) return this.w; else return vec.w; }
	
	this.minX = function(vec) { if(this.x < vec.x) return this.x; else return vec.x; }
	this.minY = function(vec) { if(this.y < vec.y) return this.y; else return vec.y; }
	this.minZ = function(vec) { if(this.z < vec.z) return this.z; else return vec.z; }
	this.minW = function(vec) { if(this.w < vec.w) return this.w; else return vec.w; }
}