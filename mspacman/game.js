function init() {
	var canvas = document.getElementById('game_canvas');
	if(canvas.getContext) {

		var ctx = canvas.getContext('2d');
		
		var img = new Image();
		//var board = new Image();
		
		//board.src = "pacman10-hp-sprite.png";
		//mspacman.src = "pacman10-hp-sprite.png";
		img.src = "pacman10-hp-sprite.png";

		img.addEventListener("load", function() {
	
			ctx.drawImage(img, 320, 1, 464, 138, 0, 0, 464, 138);

			ctx.drawImage(img, 83, 23, 13, 13, 30, 30, 13, 13);

			//ctx.drawImage(img, 0, 0, 785, 280, 0, 0, 785, 280);

		}, false);

	}
	else{
		alert('Canvas is not supported on this browser');
	}
}
