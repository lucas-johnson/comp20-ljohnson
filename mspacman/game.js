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
	
			ctx.drawImage(img, 323, 2, 464, 139, 0, 0, 464, 139);

			ctx.drawImage(img, 83, 23, 13, 13, 34, 34, 13, 13);

		}, false);

	}
	else{
		alert('Canvas is not supported on this browser');
	}
}
