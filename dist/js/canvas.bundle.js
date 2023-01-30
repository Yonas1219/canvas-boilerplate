/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/image/background.png":
/*!**********************************!*\
  !*** ./src/image/background.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/image/hills.png":
/*!*****************************!*\
  !*** ./src/image/hills.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/image/platform.png":
/*!********************************!*\
  !*** ./src/image/platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/image/platformSmallTall.png":
/*!*****************************************!*\
  !*** ./src/image/platformSmallTall.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/image/spriteRunLeft.png":
/*!*************************************!*\
  !*** ./src/image/spriteRunLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/image/spriteRunRight.png":
/*!**************************************!*\
  !*** ./src/image/spriteRunRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/image/spriteStandLeft.png":
/*!***************************************!*\
  !*** ./src/image/spriteStandLeft.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/image/spriteStandRight.png":
/*!****************************************!*\
  !*** ./src/image/spriteStandRight.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/platform.png */ "./src/image/platform.png");
/* harmony import */ var _image_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/hills.png */ "./src/image/hills.png");
/* harmony import */ var _image_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/background.png */ "./src/image/background.png");
/* harmony import */ var _image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/platformSmallTall.png */ "./src/image/platformSmallTall.png");
/* harmony import */ var _image_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/spriteRunLeft.png */ "./src/image/spriteRunLeft.png");
/* harmony import */ var _image_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/spriteRunRight.png */ "./src/image/spriteRunRight.png");
/* harmony import */ var _image_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image/spriteStandLeft.png */ "./src/image/spriteStandLeft.png");
/* harmony import */ var _image_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/spriteStandRight.png */ "./src/image/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








 // import win from '../audio/win.wav';
// import coinimage from '../image/coin.jpeg';

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5; // let gameWon = false;
// let soundEffect = document.getElementById("sound_effect");
// var scorebtn = document.getElementById("score");
// var scoreBtn = document.getElementById("score_btn");

var restartButton = document.getElementById("restart-button"); // var winSound = new Audio(win.wav);

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_image_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_image_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_image_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_image_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_image_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, // to make the avatar one
      400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++; ////////// to get the next avatar

      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

      if (scrollOffset > platformImage.width * 10 + 1050 - 2) {
        restartButton.style.display = "block";
        keys.right.pressed = false;
      } else {
        restartButton.style.display = "none"; // score()
      }
    }
  }]);

  return Player;
}(); // reset the game


restartButton.addEventListener("click", function () {
  // reset game state
  gameWon = false;
  player.speed = 10;
  player.position.x = 0;
  player.position.y = 0;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.frames = 0;
  restartButton.style.display = "none"; // re-initialize and start game

  init();
  draw();
});

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_image_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  pause: {
    pressed: false
  },
  play: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_image_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 500 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 12 - 5 + platformImage.width - platformSmallTallImage.width,
    y: 470,
    image: createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 900 + 200,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 800 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 900 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 350,
    image: createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 9 + 900 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_image_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 10 + 1200 - 2,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_image_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_image_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
} // score handling
// score handling


var score = 0; // let highScore = 0;

function drawScore() {
  if (player.velocity.y !== 0 && keys.right.pressed) {
    score += 1;
    c.fillStyle = "white";
    c.font = "20px Verdana";
    c.fillText("score:" + score, canvas.width - 105, 20);
    console.log(score);
  } else {
    c.fillStyle = "white";
    c.font = "20px Verdana";
    c.fillText("score:" + score, canvas.width - 105, 20);
  }
} // pause play handling
// drawScore();


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObjects) {
    genericObjects.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.pause.pressed) {
    player.velocity.x = 0;
    c.fillStyle = "white";
    c.font = "20px Verdana";
    c.fillText("paused", canvas.width - 105, 100);
    if (keys.play.pressed) keys.pause.pressed = false;
  } else if (keys.play.pressed) {
    c.fillStyle = "white";
    c.font = "20px Verdana";
    c.fillText("resumed", canvas.width - 105, 100);
    console.log("in the play");
    player.velocity.x = player.speed;

    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * 0.66;
        });
      }
    }
  } else {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * 0.66;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //////////// sprite switching

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  drawScore(); /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function winCelebration() {
    // Stop the game loop
    // winSound.play();
    cancelAnimationFrame(animate); // Play a victory jingle
    // Show a "win" animation on player

    player.image = player.sprites.stand.right;
    player.currentCropWidth = 177;
    player.frames = 30; // Create an array to store the fireworks

    var fireworks = []; // Create a function to draw the fireworks

    function drawFireworks() {
      c.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < fireworks.length; i++) {
        var firework = fireworks[i];
        firework.draw();
        firework.update();

        if (firework.position.y > canvas.height) {
          fireworks.splice(i, 1);
        }
      }
    } // Create a class for the fireworks


    var Firework = /*#__PURE__*/function () {
      function Firework() {
        _classCallCheck(this, Firework);

        this.position = {
          x: Math.random() * canvas.width,
          y: canvas.height
        };
        this.color = "hsl(".concat(Math.random() * 360, ", 100%, 50%)");
        this.radius = Math.random() * 10 + 5;
        this.velocity = {
          x: Math.random() * 2 - 1,
          y: Math.random() * -10 - 5
        };
      }

      _createClass(Firework, [{
        key: "draw",
        value: function draw() {
          c.beginPath();
          c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
          c.fillStyle = this.color;
          c.fill();
          c.closePath(); // Draw the win message

          c.fillStyle = "white";
          c.font = "40px Arial";
          c.fillText("you win! score is ".concat(score), 300, 300);
        }
      }, {
        key: "update",
        value: function update() {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
        }
      }]);

      return Firework;
    }(); // Create an interval to add new fireworks


    var interval = setInterval(function () {
      fireworks.push(new Firework());
    }, 100); // Create a loop to animate the fireworks

    function animateFireworks() {
      drawFireworks();
      requestAnimationFrame(animateFireworks);
    }

    animateFireworks(); // Set a timeout to stop the animation and clear the interval

    setTimeout(function () {
      clearInterval(interval);
      c.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
  } ////////////////////win condition


  if (scrollOffset > platformImage.width * 10 + 1050 - 2) {
    winCelebration();
  }

  if (player.position.y > canvas.height) {
    score = 0;
    setTimeout(function () {
      clearInterval(interval);
      c.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
    c.fillStyle = "white";
    c.font = "40px Arial";
    c.fillText("\" you lose!\" score ".concat(score), 300, 300);
    init();
  }
}

init();
animate();
addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
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
      break;

    case 32:
      console.log("paused");
      keys.pause.pressed = true; //  pause();

      break;

    case 80:
      console.log("play");
      keys.play.pressed = true; //  play();

      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

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

    case 32:
      console.log("paused");
      keys.right.pressed = false; // pause();
      // player.velocity.x === 0;

      break;

    case 80:
      console.log("play");
      keys.play.pressed = false; //  play();

      break;
  } // console.log(keys.right.pressed)

});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map