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
			var output = new Array(input.length);
			
			var cosX = (angle[0]==0)?1:Math.cos(angle[0]),
				sinX = (angle[0]==0)?0:Math.sin(angle[0]),
				cosY = (angle[1]==0)?1:Math.cos(angle[1]),
				sinY = (angle[1]==0)?0:Math.sin(angle[1]),
				cosZ = (angle[2]==0)?1:Math.cos(angle[2]),
				sinZ = (angle[2]==0)?0:Math.sin(angle[2]);
				
			for(var i=output.length-1; i>=0; i--) {
				var tX = input[i][0], 
					tY = input[i][1],
					tZ = input[i][2];
					
				output[i] = [tX, 
							 tY*cosX - tZ*sinX, 
							 tZ*cosX + tY*sinX];
			
				tX = output[i][0];
				tY = output[i][1];
				tZ = output[i][2];
				
				output[i] = [tX*cosY + tZ*sinY, 
						  tY, 
						  tZ*cosY - tX*sinY];
				
				tX = output[i][0];
				tY = output[i][1];
				tZ = output[i][2];
				
				output[i] = [tX*cosZ - tY*sinZ,
						  tY*cosZ + tX*sinZ,
						  tZ];
			}
			return output; break;
			
		case 2: //Poly array
			var output = new Array(input.length);
			
			var cosX = (angle[0]==0)?1:Math.cos(angle[0]),
				sinX = (angle[0]==0)?0:Math.sin(angle[0]),
				cosY = (angle[1]==0)?1:Math.cos(angle[1]),
				sinY = (angle[1]==0)?0:Math.sin(angle[1]),
				cosZ = (angle[2]==0)?1:Math.cos(angle[2]),
				sinZ = (angle[2]==0)?0:Math.sin(angle[2]);
				
			for(var i=output.length-1; i>=0; i--) {
				output[i] = new Array(input[i].length);
				for(var k=output[i].length-1; k>=0; k--) {
					var tX = input[i][k][0], 
						tY = input[i][k][1],
						tZ = input[i][k][2];
					
					output[i][k] = [tX, 
									tY*cosX - tZ*sinX, 
									tZ*cosX + tY*sinX];
				
					tX = output[i][k][0];
					tY = output[i][k][1];
					tZ = output[i][k][2];
					
					output[i][k] = [tX*cosY + tZ*sinY, 
									tY, 
									tZ*cosY - tX*sinY];
					
					tX = output[i][k][0];
					tY = output[i][k][1];
					tZ = output[i][k][2];
					
					output[i][k] = [tX*cosZ - tY*sinZ,
									tY*cosZ + tX*sinZ,
									tZ];
				}
			}
			return output; break;
		case 3: //Array of Poly arrays
			var output = new Array(input.length);
			
			var cosX = (angle[0]==0)?1:Math.cos(angle[0]),
				sinX = (angle[0]==0)?0:Math.sin(angle[0]),
				cosY = (angle[1]==0)?1:Math.cos(angle[1]),
				sinY = (angle[1]==0)?0:Math.sin(angle[1]),
				cosZ = (angle[2]==0)?1:Math.cos(angle[2]),
				sinZ = (angle[2]==0)?0:Math.sin(angle[2]);
				
			for(var i=output.length-1; i>=0; i--) {
				output[i] = new Array(input[i].length);
				for(var k=output[i].length-1; k>=0; k--) {
					output[i][k] = new Array(input[i][k].length);
					for(var j=output[i][k].length-1; j>=0; j--) {
						
						var tX = input[i][k][j][0], 
							tY = input[i][k][j][1],
							tZ = input[i][k][j][2];
						
						output[i][k][j] = [tX, 
										   tY*cosX - tZ*sinX, 
										   tZ*cosX + tY*sinX];
					
						tX = output[i][k][j][0];
						tY = output[i][k][j][1];
						tZ = output[i][k][j][2];
						
						output[i][k][j] = [tX*cosY + tZ*sinY, 
										   tY, 
										   tZ*cosY - tX*sinY];
						
						tX = output[i][k][j][0];
						tY = output[i][k][j][1];
						tZ = output[i][k][j][2];
						
						output[i][k][j] = [tX*cosZ - tY*sinZ,
										   tY*cosZ + tX*sinZ,
										   tZ];
					}
				}
			}
			return output; break;
		default:return;
	}
}