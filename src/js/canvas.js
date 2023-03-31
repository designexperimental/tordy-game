import {
	// prettier-ignore
	createImage,
	createImageAsync,
	isOnTopOfPlatform,
	collisionTop,
	isOnTopOfPlatformCircle,
	hitBottomOfPlatform,
	hitSideOfPlatform,
	objectsTouch,
} from "./utils.js";

// Scenario
import background from "../img/background.png";
import hills from "../img/hills.png";
import platform from "../img/platform.png";
import platformSmallTall from "../img/platformSmallTall.png";
import block from "../img/block.png";
import blockTri from "../img/blockTri.png";
import mdPlatform from "../img/mdPlatform.png";
import lgPlatform from "../img/lgPlatform.png";
import tPlatform from "../img/tPlatform.png";
import xtPlatform from "../img/xtPlatform.png";

// Normal Character
import spriteMarioRunLeft from "../img/spriteMarioRunLeft.png";
import spriteMarioRunRight from "../img/spriteMarioRunRight.png";
import spriteMarioStandLeft from "../img/spriteMarioStandLeft.png";
import spriteMarioStandRight from "../img/spriteMarioStandRight.png";
import spriteMarioJumpLeft from "../img/spriteMarioJumpLeft.png";
import spriteMarioJumpRight from "../img/spriteMarioJumpRight.png";

// FireFlower Character
import spriteFireFlowerRunLeft from "../img/spriteFireFlowerRunLeft.png";
import spriteFireFlowerRunRight from "../img/spriteFireFlowerRunRight.png";
import spriteFireFlowerStandLeft from "../img/spriteFireFlowerStandLeft.png";
import spriteFireFlowerStandRight from "../img/spriteFireFlowerStandRight.png";
import spriteFireFlowerJumpLeft from "../img/spriteFireFlowerJumpLeft.png";
import spriteFireFlowerJumpRight from "../img/spriteFireFlowerJumpRight.png";

// FireFlower Character Shoot
import spriteFireFlowerShootLeft from "../img/spriteFireFlowerShootLeft.png";
import spriteFireFlowerShootRight from "../img/spriteFireFlowerShootRight.png";

import spriteFireFlower from "../img/spriteFireFlower.png";
import spriteEnemy from "../img/spriteEnemy.png";

const canvas = document.querySelector("canvas");
const contextGame = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 1;

class Player {
	constructor() {
		this.speed = 10;
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
		this.scale = 0.3;
		this.width = 398 * this.scale;
		this.height = 353 * this.scale;

		this.image = createImage(spriteMarioStandRight);
		this.frames = 0;
		this.sprites = {
			stand: {
				right: createImage(spriteMarioStandRight),
				left: createImage(spriteMarioStandLeft),
				fireFlower: {
					right: createImage(spriteFireFlowerStandRight),
					left: createImage(spriteFireFlowerStandLeft),
				},
			},
			run: {
				right: createImage(spriteMarioRunRight),
				left: createImage(spriteMarioRunLeft),
				fireFlower: {
					right: createImage(spriteFireFlowerRunRight),
					left: createImage(spriteFireFlowerRunLeft),
				},
			},
			jump: {
				right: createImage(spriteMarioJumpRight),
				left: createImage(spriteMarioJumpLeft),
				fireFlower: {
					right: createImage(spriteFireFlowerJumpRight),
					left: createImage(spriteFireFlowerJumpLeft),
				},
			},
		};

		this.currentSprite = this.sprites.stand.right;
		this.currentCropWidth = 398;
		this.powerUps = {
			fireFlower: false,
		};
		this.invincible = false;
		this.opacity = 1;
	}

	// Draw the Player on the screen
	draw() {
		// rectangle player
		// contextGame.fillStyle = "red";
		// contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);

		// sprite player
		// show an rectangle in the player
		contextGame.save();
		contextGame.globalAlpha = this.opacity;
		contextGame.fillStyle = "rgba(0,0,0, 0.2";
		contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);

		// prettier-ignore
		contextGame.drawImage(
			this.currentSprite, 
			this.currentCropWidth * this.frames,
			0,
			this.currentCropWidth,
			353,
			this.position.x, 
			this.position.y, 
			this.width, 
			this.height
		);
		contextGame.restore();
	}

	update() {
		this.frames++;

		const { currentSprite, sprites } = this;

		// prettier-ignore
		if (
			this.frames > 58 && (
				currentSprite === sprites.stand.right || 
				currentSprite === sprites.stand.left || 
				currentSprite === sprites.stand.fireFlower.left || 
				currentSprite === sprites.stand.fireFlower.right
			)) this.frames = 0;
		else if (
			this.frames > 28 && (
				currentSprite === sprites.run.right || 
				currentSprite === sprites.run.left || 
				currentSprite === sprites.run.fireFlower.right || 
				currentSprite === sprites.run.fireFlower.left
			)) this.frames = 0;
		else if (
			currentSprite === sprites.jump.right || 
			currentSprite === sprites.jump.left || 
			currentSprite === sprites.jump.fireFlower.right || 
			currentSprite === sprites.jump.fireFlower.left
		) this.frames = 0;

		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
		// else this.velocity.y = 0;

		if (this.invincible) {
			if (this.opacity === 1) this.opacity = 0;
			else this.opacity = 1;
		} else this.opacity = 1;
	}
}

class Platform {
	constructor({ x, y, image, block, text }) {
		this.position = {
			x,
			y,
		};

		this.velocity = {
			x: 0,
		};

		this.image = image;
		this.width = image.width;
		this.height = image.height;
		this.block = block;
		this.text = text;
	}

	draw() {
		contextGame.drawImage(this.image, this.position.x, this.position.y);

		if (this.text) {
			contextGame.font = "24 Arial";
			contextGame.fillStyle = "white";
			contextGame.fillText(this.text, this.position.x, this.position.y);
		}
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
	}
}

class GenericObject {
	constructor({ x, y, image }) {
		this.position = {
			x,
			y,
		};

		this.velocity = {
			x: 0,
		};

		this.image = image;
		this.width = image.width;
		this.height = image.height;
	}

	draw() {
		contextGame.drawImage(this.image, this.position.x, this.position.y);
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
	}
}

class Enemy {
	constructor({
		position,
		velocity,
		distance = {
			limit: 50,
			traveled: 0,
		},
	}) {
		this.position = {
			x: position.x,
			y: position.y,
		};

		this.velocity = {
			x: velocity.x,
			y: velocity.y,
		};

		this.width = 43.33;
		this.height = 50;

		this.image = createImage(spriteEnemy);
		this.frames = 0;

		this.distance = distance;
	}

	draw() {
		// contextGame.fillStyle = "red";
		// contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);

		// sprite enemy
		// prettier-ignore
		contextGame.drawImage(
			this.image, 
			130 * this.frames,
			0,
			130,
			150,
			this.position.x, 
			this.position.y, 
			this.width, 
			this.height
		);
	}

	update() {
		this.frames++;
		if (this.frames >= 58) this.frames = 0;

		this.draw();

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

		// walk the enemy back and forth
		this.distance.traveled += Math.abs(this.velocity.x);

		if (this.distance.traveled > this.distance.limit) {
			this.distance.traveled = 0;
			this.velocity.x = -this.velocity.x;
		}
		// console.log(this.distance.traveled);
	}
}

class FireFlower {
	constructor({ position, velocity }) {
		this.position = {
			x: position.x,
			y: position.y,
		};

		this.velocity = {
			x: velocity.x,
			y: velocity.y,
		};

		this.width = 56;
		this.height = 60;

		this.image = createImage(spriteFireFlower);
		this.frames = 0;
	}

	draw() {
		// prettier-ignore
		contextGame.drawImage(
			this.image, 
			56 * this.frames,
			0,
			56,
			60,
			this.position.x, 
			this.position.y, 
			this.width, 
			this.height
		);
	}

	update() {
		this.frames++;
		if (this.frames >= 75) this.frames = 0;

		this.draw();

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
	}
}

class Particle {
	constructor({ position, velocity, radius, color = "#654428", fireball = false }) {
		this.position = {
			x: position.x,
			y: position.y,
		};
		this.velocity = {
			x: velocity.x,
			y: velocity.y,
		};
		this.radius = radius;
		this.timeToLive = 300;
		this.color = color;
		this.fireball = fireball;
	}

	draw() {
		contextGame.beginPath();
		contextGame.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		contextGame.fillStyle = this.color;
		contextGame.fill();
		contextGame.closePath();
	}

	update() {
		this.timeToLive--;
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.5;
	}
}

let platformImage;
let platformSmallTallImage;
let blockImage;
let blockTriImage;

let lgPlatformImage;
let tPlatformImage;
let xtPlatformImage;

let player = new Player();
let platforms = [];
let genericObjects = [];
let enemies = [];
let particles = [];
let fireFlowers = [];

let lastKey;

const keys = {
	right: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
};

let scrollOffset = 0;

async function init() {
	platformImage = await createImageAsync(platform);
	platformSmallTallImage = await createImageAsync(platformSmallTall);

	blockImage = await createImageAsync(block);
	blockTriImage = await createImageAsync(blockTri);

	lgPlatformImage = await createImageAsync(lgPlatform);
	tPlatformImage = await createImageAsync(tPlatform);
	xtPlatformImage = await createImageAsync(tPlatform);

	fireFlowers = [
		new FireFlower({
			position: {
				x: 400,
				y: 100,
			},
			velocity: {
				x: 0,
				y: 0,
			},
		}),
	];

	player = new Player();

	const enemyWidth = 43.33;

	enemies = [
		new Enemy({
			position: {
				x: 908 + lgPlatformImage.width - enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 400,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 3249 + lgPlatformImage.width - enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 400,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 400,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth - enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 400,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth - enemyWidth - enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 400,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 5134 + xtPlatformImage.width / 2 + enemyWidth,
				y: 100,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 100,
				traveled: 0,
			},
		}),

		new Enemy({
			position: {
				x: 6965,
				y: 10,
			},
			velocity: {
				x: -0.5,
				y: 0,
			},
			distance: {
				limit: 100,
				traveled: 0,
			},
		}),
	];

	particles = [];
	// particles = [new Particle({})];

	// create the platforms
	platforms = [
		new Platform({
			x: 908 + 100,
			y: 300,
			image: blockTriImage,
			block: true,
		}),

		new Platform({
			x: 908 + 100 + blockImage.width,
			y: 100,
			image: blockImage,
			block: true,
		}),

		new Platform({
			x: 1991 + lgPlatformImage.width - tPlatformImage.width,
			y: canvas.height - lgPlatformImage.height - tPlatformImage.height,
			image: tPlatformImage,
			block: false,
		}),

		new Platform({
			x: 1991 + lgPlatformImage.width - tPlatformImage.width - 100,
			y: canvas.height - lgPlatformImage.height - tPlatformImage.height + blockImage.height,
			image: blockImage,
			block: true,
		}),

		new Platform({
			x: 5710 + xtPlatformImage.width + 175,
			y: canvas.height - xtPlatformImage.height,
			image: blockImage,
			block: true,
			text: 5710 + xtPlatformImage.width + 175,
		}),

		new Platform({
			x: 6113 + 175,
			y: canvas.height - xtPlatformImage.height,
			image: blockImage,
			block: true,
			text: 6113 + 175,
		}),

		new Platform({
			x: 6113 + 175 * 2,
			y: canvas.height - xtPlatformImage.height,
			image: blockImage,
			block: true,
			text: 6113 + 175 * 2,
		}),

		new Platform({
			x: 6113 + 175 * 3,
			y: canvas.height - xtPlatformImage.height - 100,
			image: blockImage,
			block: true,
			text: 6113 + 175 * 3,
		}),

		new Platform({
			x: 6113 + 175 * 4,
			y: canvas.height - xtPlatformImage.height - 200,
			image: blockTriImage,
			block: true,
			text: 6113 + 175 * 4,
		}),

		new Platform({
			x: 6113 + 175 * 4 + blockTriImage.width,
			y: canvas.height - xtPlatformImage.height - 200,
			image: blockTriImage,
			block: true,
			text: 6113 + 175 * 4 + blockTriImage.width,
		}),

		new Platform({
			x: 6968 + 300,
			y: canvas.height - lgPlatformImage.height,
			image: lgPlatformImage,
			block: true,
			text: 6968 + 300,
		}),
	];

	genericObjects = [
		new GenericObject({
			x: -1,
			y: -1,
			image: createImage(background),
		}),
		new GenericObject({
			x: -1,
			y: -1,
			image: createImage(hills),
		}),
	];

	scrollOffset = 0;

	// array of scenario
	const platformsMap = ["lg", "lg", "gap", "lg", "gap", "gap", "lg", "gap", "t", "gap", "xt", "gap", "xt", "gap", "gap", "xt"];

	// distance definition
	let platformDistance = 0;

	// creating dynamic scenario
	platformsMap.forEach((symbol) => {
		switch (symbol) {
			case "lg":
				platforms.push(
					new Platform({
						x: platformDistance,
						y: canvas.height - lgPlatformImage.height,
						image: lgPlatformImage,
						block: true,
						text: platformDistance,
					})
				);
				platformDistance += lgPlatformImage.width - 2;
				break;

			case "gap":
				platformDistance += 175;
				break;
			case "t":
				platforms.push(
					new Platform({
						x: platformDistance,
						y: canvas.height - tPlatformImage.height,
						image: tPlatformImage,
						block: true,
						text: platformDistance,
					})
				);
				platformDistance += tPlatformImage.width - 2;
				break;

			case "xt":
				platforms.push(
					new Platform({
						x: platformDistance,
						y: canvas.height - xtPlatformImage.height,
						image: xtPlatformImage,
						block: true,
						text: platformDistance,
					})
				);
				platformDistance += xtPlatformImage.width - 2;
				break;
		}
	});
}

function animate() {
	requestAnimationFrame(animate);

	contextGame.fillStyle = "white";
	contextGame.fillRect(0, 0, canvas.width, canvas.height);

	genericObjects.forEach((genericObject) => {
		genericObject.update();
		genericObject.velocity.x = 0;
	});

	platforms.forEach((platform) => {
		platform.update();
		platform.velocity.x = 0;
	});

	// player obtains powerup
	fireFlowers.forEach((fireFlower, i) => {
		if (
			objectsTouch({
				object1: player,
				object2: fireFlower,
			})
		) {
			player.powerUps.fireFlower = true;
			setTimeout(() => {
				fireFlowers.splice(i, 1);
			}, 0);
		} else fireFlower.update();
	});

	enemies.forEach((enemy, index) => {
		enemy.update();

		// remove enemy on fireball hit
		particles
			.filter((particle) => particle.fireball)
			.forEach((particle, particleIndex) => {
				if (
					// prettier-ignore
					particle.position.x + particle.radius >= enemy.position.x && 
				particle.position.y + particle.radius >= enemy.position.y && 
				particle.position.x - particle.radius <= enemy.position.x + enemy.width && 
				particle.position.y - particle.radius <= enemy.position.y + enemy.height
				) {
					// explode enemy with fireFlower
					for (let i = 0; i < 50; i++) {
						particles.push(
							new Particle({
								position: {
									x: enemy.position.x + enemy.width / 2,
									y: enemy.position.y + enemy.height / 2,
								},
								velocity: {
									x: (Math.random() - 0.5) * 5,
									y: (Math.random() - 0.5) * 15,
								},
								radius: Math.random() * 3,
							})
						);
					}
					setTimeout(() => {
						enemies.splice(index, 1);
						particles.splice(particleIndex, 1);
					}, 0);
				}
			});

		// enemies stomp squish
		if (
			collisionTop({
				object1: player,
				object2: enemy,
			})
		) {
			// explode enemy after hit
			for (let i = 0; i < 50; i++) {
				particles.push(
					new Particle({
						position: {
							x: enemy.position.x + enemy.width / 2,
							y: enemy.position.y + enemy.height / 2,
						},
						velocity: {
							x: (Math.random() - 0.5) * 5,
							y: (Math.random() - 0.5) * 15,
						},
						radius: Math.random() * 3,
					})
				);
			}
			player.velocity.y -= 30;
			setTimeout(() => {
				enemies.splice(index, 1);
				// console.log(particles);
			}, 0);
		} else if (
			// prettier-ignore
			player.position.x + player.width >= enemy.position.x && 
			player.position.y + player.height >= enemy.position.y && 
			player.position.x <= enemy.position.x + enemy.width
		) {
			if (player.powerUps.fireFlower) {
				player.invincible = true;
				player.powerUps.fireFlower = false;

				setTimeout(() => {
					player.invincible = false;
				}, 1000);
			} else if (!player.invincible) init();
		}
	});

	particles.forEach((particle, i) => {
		particle.update();

		if (particle.fireball && (particle.position.x - particle.radius >= canvas.width || particle.position.x + particle.radius <= 0))
			setTimeout(() => {
				particles.splice(i, 1);
			}, 0);
	});

	player.update();

	let hitSide = false;

	if (keys.right.pressed && player.position.x < 400) {
		player.velocity.x = player.speed;
	} else if (
		// prettier-ignore : bloqueia andar antes da fase 1/2
		(keys.left.pressed && player.position.x > 100) ||
		(keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
	) {
		player.velocity.x = -player.speed;
	} else {
		player.velocity.x = 0;

		// scrolling code
		if (keys.right.pressed) {
			for (let i = 0; i < platforms.length; i++) {
				const platform = platforms[i];
				platform.velocity.x = -player.speed;

				if (
					platform.block &&
					hitSideOfPlatform({
						object: player,
						platform,
					})
				) {
					platforms.forEach((platform) => {
						platform.velocity.x = 0;
					});

					hitSide = true;
					break;
				}
			}
			// });

			if (!hitSide) {
				scrollOffset += player.speed;

				genericObjects.forEach((genericObject) => {
					genericObject.velocity.x = -player.speed * 0.5;
				});

				enemies.forEach((enemy) => {
					enemy.position.x -= player.speed;
				});

				fireFlowers.forEach((fireFlower) => {
					fireFlower.position.x -= player.speed;
				});

				particles.forEach((particle) => {
					particle.position.x -= player.speed;
				});
			}
		} else if (
			// prettier-ignore : bloqueia andar antes da fase 2/2
			keys.left.pressed &&
			scrollOffset > 0
		) {
			for (let i = 0; i < platforms.length; i++) {
				const platform = platforms[i];
				platform.velocity.x = player.speed;

				if (
					platform.block &&
					hitSideOfPlatform({
						object: player,
						platform,
					})
				) {
					platforms.forEach((platform) => {
						platform.velocity.x = 0;
					});

					hitSide = true;
					break;
				}
			}

			if (!hitSide) {
				scrollOffset -= player.speed;

				genericObjects.forEach((genericObject) => {
					genericObject.velocity.x = player.speed * 0.5;
				});

				enemies.forEach((enemy) => {
					enemy.position.x += player.speed;
				});

				fireFlowers.forEach((fireFlower) => {
					fireFlower.position.x += player.speed;
				});

				particles.forEach((particle) => {
					particle.position.x += player.speed;
				});
			}
		}
	}

	// platform collision detection
	platforms.forEach((platform) => {
		if (
			isOnTopOfPlatform({
				object: player,
				platform,
			})
		) {
			player.velocity.y = 0;
		}

		if (
			platform.block &&
			hitBottomOfPlatform({
				object: player,
				platform,
			})
		) {
			player.velocity.y = -player.velocity.y;
		}

		if (
			platform.block &&
			hitSideOfPlatform({
				object: player,
				platform,
			})
		) {
			player.velocity.x = 0;
		}

		// particles bounce
		particles.forEach((particle, index) => {
			if (
				isOnTopOfPlatformCircle({
					object: particle,
					platform,
				})
			) {
				const bounce = 0.9;
				particle.velocity.y = -particle.velocity.y * 0.99;

				if (particle.radius - 0.5 < 0) particles.splice(index, 1);
				else particle.radius -= 0.5;
			}
			if (particle.timeToLive < 0) particles.splice(index, 1);
		});

		enemies.forEach((enemy) => {
			if (
				isOnTopOfPlatform({
					object: enemy,
					platform,
				})
			)
				enemy.velocity.y = 0;
		});

		fireFlowers.forEach((fireFlower) => {
			if (
				isOnTopOfPlatform({
					object: fireFlower,
					platform,
				})
			)
				fireFlower.velocity.y = 0;
		});
	});

	// win condition
	if (platformImage && scrollOffset + 400 + player.width > 6968 + 300) {
		console.log("you win");
	}

	// lose condition
	if (player.position.y > canvas.height) {
		init();
	}

	// sprite switching
	if (player.velocity.y !== 0) return;

	if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
		player.currentSprite = player.sprites.run.right;
	} else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
		player.currentSprite = player.sprites.run.left;
	} else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
		player.currentSprite = player.sprites.stand.left;
	} else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
		player.currentSprite = player.sprites.stand.right;
	}

	// firewflower sprites
	if (!player.powerUps.fireFlower) return;

	if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.fireFlower.right) {
		player.currentSprite = player.sprites.run.fireFlower.right;
	} else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.fireFlower.left) {
		player.currentSprite = player.sprites.run.fireFlower.left;
	} else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.fireFlower.left) {
		player.currentSprite = player.sprites.stand.fireFlower.left;
	} else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.fireFlower.right) {
		player.currentSprite = player.sprites.stand.fireFlower.right;
	}
}

init();
animate();

addEventListener("keydown", ({ keyCode }) => {
	switch (keyCode) {
		case 65:
			console.log("left");
			keys.left.pressed = true;
			lastKey = "left";
			break;
		case 83:
			console.log("down");
			break;
		case 68:
			console.log("right");
			keys.right.pressed = true;
			lastKey = "right";
			break;
		case 87:
			console.log("up");
			player.velocity.y -= 25;

			if (lastKey === "right") player.currentSprite = player.sprites.jump.right;
			else player.currentSprite = player.sprites.jump.left;

			if (!player.powerUps.fireFlower) break;

			if (lastKey === "right") player.currentSprite = player.sprites.jump.fireFlower.right;
			else player.currentSprite = player.sprites.jump.fireFlower.left;

			break;
		case 32:
			console.log("space");

			if (!player.powerUps.fireFlower) return;

			// fireball velocity
			let velocity = 15;
			if (lastKey === "left") velocity = -velocity;

			// fireball when press space
			particles.push(
				new Particle({
					position: {
						x: player.position.x + player.width / 2,
						y: player.position.y + player.height / 2,
					},
					velocity: {
						x: velocity,
						y: 0,
					},
					radius: 5,
					color: "red",
					fireball: true,
				})
			);
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
			break;
	}
});
