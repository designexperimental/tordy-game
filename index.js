const canvas = document.querySelector("canvas");

const contextGame = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1;

// ---------- PLAYER ----------

class Player {
	constructor() {
		this.position = {
			x: 100,
			y: 100,
		};

		// Player velocity
		this.velocity = {
			x: 0,
			y: 1,
		};

		// Player sizes
		this.width = 30;
		this.height = 30;
	}

	// Draw the Player on the screen
	draw() {
		contextGame.fillStyle = "red";
		contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
		else this.velocity.y = 0;
	}
}

class Platform {
	constructor() {
		this.position = {
			x: 200,
			y: 100,
		};

		(this.width = 200), (this.height = 20);
	}

	draw() {
		contextGame.fillStyle = "blue";
		contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

// Create a var to the Player
const player = new Player();
const platform = new Platform();

const keys = {
	right: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
};

// Call the player

function animate() {
	requestAnimationFrame(animate);
	contextGame.clearRect(0, 0, canvas.width, canvas.height);

	player.update();
	platform.draw();

	if (keys.right.pressed) {
		player.velocity.x = 5;
	} else if (keys.left.pressed) {
		player.velocity.x = -5;
	} else player.velocity.x = 0;

	// platform collision detection
	// prettier-ignore
	if (player.position.y + player.height <= platform.position.y && 
		player.position.y + player.height + player.velocity.y >= platform.position.y && 
		player.position.x + player.width >= platform.position.x && 
		player.position.x <= platform.position.x + platform.width) {
		player.velocity.y = 0;
	}
}

animate();

addEventListener("keydown", ({ keyCode }) => {
	switch (keyCode) {
		case 65:
			console.log("left");
			keys.left.pressed = true;
			break;
		case 83:
			console.log("down");
			break;
		case 68:
			console.log("right");
			keys.right.pressed = true;
			break;
		case 87:
			console.log("up");
			player.velocity.y -= 20;
			break;
	}
});

addEventListener("keyup", ({ keyCode }) => {
	switch (keyCode) {
		case 65:
			console.log("left");
			keys.left.pressed = false;
			break;
		case 83:
			console.log("down");
			break;
		case 68:
			console.log("right");
			keys.right.pressed = false;
			break;
		case 87:
			console.log("up");
			player.velocity.y = 0;
			break;
	}
});
