functon init() {
	'use strict';
	canvas = document.getElementById('game_canvas');
	if(canvas.getContext) {
		
		img = new Image();
		img.src = "pacman10-hp-sprite.png";
		
		ctx = canvas.getContext('2d');
	
		ctx.drawImage(img,323, 2, 463, 136, 0, 0, 463, 136);

		ctx.drawImage(img, 85, 25, 11, 11, 34, 34, 11, 11);
	}
	else{
		alert('Canvas is not supported on this browser');
	}
}
