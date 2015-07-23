function readObj(data) {
	var model = new Array(),
		modelPoly = new Array();
		
	var mode = 0;

	data = replaceAll("\n",' ',data);
	data = replaceAll("\t",'',data);
	data = data.split(' ');
		
	for(var i=0; i<data.length; i++) {
		switch(data[i]) {
			case 'f': mode = 2; modelPoly[modelPoly.length] = new Array(); continue;
			case 'v': mode = 1; continue;
			case '#': mode = 0; continue;
			case '': continue;
		}
		if(mode == 1) {
			if(Number(data[i])) {
				model.push([Number(data[i]), Number(data[i+1]), Number(data[i+2])]);
				i+=2;
			}
		}
		else if(mode == 2) {
			var s = Number(data[i].split('/')[0]);
			if(s)
				modelPoly[modelPoly.length-1].push(s);
			else 
				mode = 0;
		}
	}
	return [model, modelPoly];
}