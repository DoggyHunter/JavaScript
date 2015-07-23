/**************************************************
*    3D rotate universal function                 *
*    Created by DoggyXomaX                        *
*    Under GNU GENERAL PUBLIC LICENSE             *
**************************************************/

function rotate3D(input, angle, mode) {
	switch(mode) {
		case 0:			//Point
			var output = new Array(3);
			
			var tX = input[0], 
				tY = input[1],
				tZ = input[2];
			
			var cosX = (angle[0]==0)?1:Math.cos(angle[0]),
				sinX = (angle[0]==0)?0:Math.sin(angle[0]),
				cosY = (angle[1]==0)?1:Math.cos(angle[1]),
				sinY = (angle[1]==0)?0:Math.sin(angle[1]),
				cosZ = (angle[2]==0)?1:Math.cos(angle[2]),
				sinZ = (angle[2]==0)?0:Math.sin(angle[2]);
				
			output = [tX, 
					  tY*cosX - tZ*sinX, 
					  tZ*cosX + tY*sinX];
			
			tX = output[0];
			tY = output[1];
			tZ = output[2];
			
			output = [tX*cosY + tZ*sinY, 
					  tY, 
					  tZ*cosY - tX*sinY];
			
			tX = output[0];
			tY = output[1];
			tZ = output[2];
			
			output = [tX*cosZ - tY*sinZ,
					  tY*cosZ + tX*sinZ,
					  tZ];
			
			return output; break; //На всякий случай
		case 1: //Poly
		case 2: //Poly array
		case 3:break; //Array of Poly arrays
		default:return;
	}
}