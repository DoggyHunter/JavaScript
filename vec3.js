function vector3(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.add = function(vec) { return new vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z); }
	this.sub = function(vec) { return new vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z); }
	this.dot = function(vec) { return this.x*vec.x + this.y*vec.y + this.z*vec.z; }
	this.mul = function(vec) { return new vector3(this.y*vec.z - this.z*vec.y, this.z*vec.x - this.x*vec.z, this.x*vec.y - this.y*vec.x); }
	
	this.maxX = function(vec) { if(this.x > vec.x) return this.x; else return vec.x; }
	this.maxY = function(vec) { if(this.y > vec.y) return this.y; else return vec.y; }
	this.maxZ = function(vec) { if(this.z > vec.z) return this.z; else return vec.z; }
	
	this.minX = function(vec) { if(this.x < vec.x) return this.x; else return vec.x; }
	this.minY = function(vec) { if(this.y < vec.y) return this.y; else return vec.y; }
	this.minZ = function(vec) { if(this.z < vec.z) return this.z; else return vec.z; }
}