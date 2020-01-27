module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fireworks.js":
/*!*********************************!*\
  !*** ./components/fireworks.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\Project\\anusha\\wedding\\components\\fireworks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Fireworks extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  componentDidMount() {
    this.setup();
  }

  setup() {
    let Fireworks = function () {
      /*=============================================================================*/

      /* Utility
      /*=============================================================================*/
      let self = this;

      let rand = function (rMi, rMa) {
        return ~~(Math.random() * (rMa - rMi + 1) + rMi);
      };

      let hitTest = function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
      };

      window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
          window.setTimeout(a, 1E3 / 60);
        };
      }();
      /*=============================================================================*/

      /* Initialize
      /*=============================================================================*/


      self.init = function () {
        self.dt = 0;
        self.oldTime = Date.now();
        self.canvas = document.createElement('canvas');
        self.canvasContainer = $('#canvas-container');
        let canvasContainerDisabled = document.getElementById('canvas-container');

        self.canvas.onselectstart = function () {
          return false;
        };

        self.canvas.width = self.cw = window.innerWidth;
        self.canvas.height = self.ch = window.innerHeight;
        self.particles = [];
        self.partCount = 30;
        self.fireworks = [];
        self.mx = self.cw / 2;
        self.my = self.ch / 2;
        self.currentHue = 170;
        self.partSpeed = 5;
        self.partSpeedletiance = 10;
        self.partWind = 50;
        self.partFriction = 5;
        self.partGravity = 1;
        self.hueMin = 150;
        self.hueMax = 200;
        self.fworkSpeed = 2;
        self.fworkAccel = 4;
        self.hueletiance = 30;
        self.flickerDensity = 20;
        self.showShockwave = false;
        self.showTarget = true;
        self.clearAlpha = 25;
        self.canvasContainer.append(self.canvas);
        self.ctx = self.canvas.getContext('2d');
        self.ctx.lineCap = 'round';
        self.ctx.lineJoin = 'round';
        self.lineWidth = 1;
        self.bindEvents();
        self.canvasLoop();

        self.canvas.onselectstart = function () {
          return false;
        };
      };
      /*=============================================================================*/

      /* Particle Constructor
      /*=============================================================================*/


      let Particle = function (x, y, hue) {
        this.x = x;
        this.y = y;
        this.coordLast = [{
          x: x,
          y: y
        }, {
          x: x,
          y: y
        }, {
          x: x,
          y: y
        }];
        this.angle = rand(0, 360);
        this.speed = rand(self.partSpeed - self.partSpeedletiance <= 0 ? 1 : self.partSpeed - self.partSpeedletiance, self.partSpeed + self.partSpeedletiance);
        this.friction = 1 - self.partFriction / 100;
        this.gravity = self.partGravity / 2;
        this.hue = rand(hue - self.hueletiance, hue + self.hueVariance);
        this.brightness = rand(50, 80);
        this.alpha = rand(40, 100) / 100;
        this.decay = rand(10, 50) / 1000;
        this.wind = (rand(0, self.partWind) - self.partWind / 2) / 25;
        this.lineWidth = self.lineWidth;
      };

      Particle.prototype.update = function (index) {
        var radians = this.angle * Math.PI / 180;
        var vx = Math.cos(radians) * this.speed;
        var vy = Math.sin(radians) * this.speed + this.gravity;
        this.speed *= this.friction;
        this.coordLast[2].x = this.coordLast[1].x;
        this.coordLast[2].y = this.coordLast[1].y;
        this.coordLast[1].x = this.coordLast[0].x;
        this.coordLast[1].y = this.coordLast[0].y;
        this.coordLast[0].x = this.x;
        this.coordLast[0].y = this.y;
        this.x += vx * self.dt;
        this.y += vy * self.dt;
        this.angle += this.wind;
        this.alpha -= this.decay;

        if (!hitTest(0, 0, self.cw, self.ch, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2) || this.alpha < .05) {
          self.particles.splice(index, 1);
        }
      };

      Particle.prototype.draw = function () {
        var coordRand = rand(1, 3) - 1;
        self.ctx.beginPath();
        self.ctx.moveTo(Math.round(this.coordLast[coordRand].x), Math.round(this.coordLast[coordRand].y));
        self.ctx.lineTo(Math.round(this.x), Math.round(this.y));
        self.ctx.closePath();
        self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        self.ctx.stroke();

        if (self.flickerDensity > 0) {
          var inverseDensity = 50 - self.flickerDensity;

          if (rand(0, inverseDensity) === inverseDensity) {
            self.ctx.beginPath();
            self.ctx.arc(Math.round(this.x), Math.round(this.y), rand(this.lineWidth, this.lineWidth + 3) / 2, 0, Math.PI * 2, false);
            self.ctx.closePath();
            var randAlpha = rand(50, 100) / 100;
            self.ctx.fillStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + randAlpha + ')';
            self.ctx.fill();
          }
        }
      };
      /*=============================================================================*/

      /* Create Particles
      /*=============================================================================*/


      self.createParticles = function (x, y, hue) {
        var countdown = self.partCount;

        while (countdown--) {
          self.particles.push(new Particle(x, y, hue));
        }
      };
      /*=============================================================================*/

      /* Update Particles
      /*=============================================================================*/


      self.updateParticles = function () {
        var i = self.particles.length;

        while (i--) {
          var p = self.particles[i];
          p.update(i);
        }

        ;
      };
      /*=============================================================================*/

      /* Draw Particles
      /*=============================================================================*/


      self.drawParticles = function () {
        var i = self.particles.length;

        while (i--) {
          var p = self.particles[i];
          p.draw();
        }

        ;
      };
      /*=============================================================================*/

      /* Firework Constructor
      /*=============================================================================*/


      var Firework = function (startX, startY, targetX, targetY) {
        this.x = startX;
        this.y = startY;
        this.startX = startX;
        this.startY = startY;
        this.hitX = false;
        this.hitY = false;
        this.coordLast = [{
          x: startX,
          y: startY
        }, {
          x: startX,
          y: startY
        }, {
          x: startX,
          y: startY
        }];
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = self.fworkSpeed;
        this.angle = Math.atan2(targetY - startY, targetX - startX);
        this.shockwaveAngle = Math.atan2(targetY - startY, targetX - startX) + 90 * (Math.PI / 180);
        this.acceleration = self.fworkAccel / 100;
        this.hue = self.currentHue;
        this.brightness = rand(50, 80);
        this.alpha = rand(50, 100) / 100;
        this.lineWidth = self.lineWidth;
        this.targetRadius = 1;
      };

      Firework.prototype.update = function (index) {
        self.ctx.lineWidth = this.lineWidth;
        var vx = Math.cos(this.angle) * this.speed,
            vy = Math.sin(this.angle) * this.speed;
        this.speed *= 1 + this.acceleration;
        this.coordLast[2].x = this.coordLast[1].x;
        this.coordLast[2].y = this.coordLast[1].y;
        this.coordLast[1].x = this.coordLast[0].x;
        this.coordLast[1].y = this.coordLast[0].y;
        this.coordLast[0].x = this.x;
        this.coordLast[0].y = this.y;

        if (self.showTarget) {
          if (this.targetRadius < 8) {
            this.targetRadius += .25 * self.dt;
          } else {
            this.targetRadius = 1 * self.dt;
          }
        }

        if (this.startX >= this.targetX) {
          if (this.x + vx <= this.targetX) {
            this.x = this.targetX;
            this.hitX = true;
          } else {
            this.x += vx * self.dt;
          }
        } else {
          if (this.x + vx >= this.targetX) {
            this.x = this.targetX;
            this.hitX = true;
          } else {
            this.x += vx * self.dt;
          }
        }

        if (this.startY >= this.targetY) {
          if (this.y + vy <= this.targetY) {
            this.y = this.targetY;
            this.hitY = true;
          } else {
            this.y += vy * self.dt;
          }
        } else {
          if (this.y + vy >= this.targetY) {
            this.y = this.targetY;
            this.hitY = true;
          } else {
            this.y += vy * self.dt;
          }
        }

        if (this.hitX && this.hitY) {
          var randExplosion = rand(0, 9);
          self.createParticles(this.targetX, this.targetY, this.hue);
          self.fireworks.splice(index, 1);
        }
      };

      Firework.prototype.draw = function () {
        self.ctx.lineWidth = this.lineWidth;
        var coordRand = rand(1, 3) - 1;
        self.ctx.beginPath();
        self.ctx.moveTo(Math.round(this.coordLast[coordRand].x), Math.round(this.coordLast[coordRand].y));
        self.ctx.lineTo(Math.round(this.x), Math.round(this.y));
        self.ctx.closePath();
        self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        self.ctx.stroke();

        if (self.showTarget) {
          self.ctx.save();
          self.ctx.beginPath();
          self.ctx.arc(Math.round(this.targetX), Math.round(this.targetY), this.targetRadius, 0, Math.PI * 2, false);
          self.ctx.closePath();
          self.ctx.lineWidth = 1;
          self.ctx.stroke();
          self.ctx.restore();
        }

        if (self.showShockwave) {
          self.ctx.save();
          self.ctx.translate(Math.round(this.x), Math.round(this.y));
          self.ctx.rotate(this.shockwaveAngle);
          self.ctx.beginPath();
          self.ctx.arc(0, 0, 1 * (this.speed / 5), 0, Math.PI, true);
          self.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + rand(25, 60) / 100 + ')';
          self.ctx.lineWidth = this.lineWidth;
          self.ctx.stroke();
          self.ctx.restore();
        }
      };
      /*=============================================================================*/

      /* Create Fireworks
      /*=============================================================================*/


      self.createFireworks = function (startX, startY, targetX, targetY) {
        self.fireworks.push(new Firework(startX, startY, targetX, targetY));
      };
      /*=============================================================================*/

      /* Update Fireworks
      /*=============================================================================*/


      self.updateFireworks = function () {
        var i = self.fireworks.length;

        while (i--) {
          var f = self.fireworks[i];
          f.update(i);
        }

        ;
      };
      /*=============================================================================*/

      /* Draw Fireworks
      /*=============================================================================*/


      self.drawFireworks = function () {
        var i = self.fireworks.length;

        while (i--) {
          var f = self.fireworks[i];
          f.draw();
        }

        ;
      };
      /*=============================================================================*/

      /* Events
      /*=============================================================================*/


      self.bindEvents = function () {
        $(window).on('resize', function () {
          clearTimeout(self.timeout);
          self.timeout = setTimeout(function () {
            self.ctx.lineCap = 'round';
            self.ctx.lineJoin = 'round';
          }, 100);
        });
        $(self.canvas).on('mousedown', function (e) {
          var randLaunch = rand(0, 5);
          self.mx = e.pageX - self.canvasContainer.offset().left;
          self.my = e.pageY - self.canvasContainer.offset().top;
          self.currentHue = rand(self.hueMin, self.hueMax);
          self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
          $(self.canvas).on('mousemove.fireworks', function (e) {
            var randLaunch = rand(0, 5);
            self.mx = e.pageX - self.canvasContainer.offset().left;
            self.my = e.pageY - self.canvasContainer.offset().top;
            self.currentHue = rand(self.hueMin, self.hueMax);
            self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
          });
        });
        $(self.canvas).on('mouseup', function (e) {
          $(self.canvas).off('mousemove.fireworks');
        });
      };
      /*=============================================================================*/

      /* Clear Canvas
      /*=============================================================================*/


      self.clear = function () {
        self.particles = [];
        self.fireworks = [];
        self.ctx.clearRect(0, 0, self.cw, self.ch);
      };
      /*=============================================================================*/

      /* Delta
      /*=============================================================================*/


      self.updateDelta = function () {
        var newTime = Date.now();
        self.dt = (newTime - self.oldTime) / 16;
        self.dt = self.dt > 5 ? 5 : self.dt;
        self.oldTime = newTime;
      };
      /*=============================================================================*/

      /* Main Loop
      /*=============================================================================*/


      self.canvasLoop = function () {
        requestAnimFrame(self.canvasLoop, self.canvas);
        self.updateDelta();
        self.ctx.globalCompositeOperation = 'destination-out';
        self.ctx.fillStyle = 'rgba(0,0,0,' + self.clearAlpha / 100 + ')';
        self.ctx.fillRect(0, 0, self.cw, self.ch);
        self.ctx.globalCompositeOperation = 'lighter';
        self.updateFireworks();
        self.updateParticles();
        self.drawFireworks();
        self.drawParticles();
      };

      self.init();
      var initialLaunchCount = 1000;

      while (initialLaunchCount--) {
        setTimeout(function () {
          self.fireworks.push(new Firework(self.cw / 2, self.ch, rand(50, self.cw - 50), rand(50, self.ch / 2) - 50));
        }, initialLaunchCount * 200);
      }
    };

    var fworks = new Fireworks();
  }

  render() {
    const style = '';
    return __jsx("div", {
      className: "jsx-511672163",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, __jsx("div", {
      id: "canvas-container",
      className: "jsx-511672163",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, __jsx("div", {
      id: "mountains2",
      className: "jsx-511672163",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }), __jsx("div", {
      id: "mountains1",
      className: "jsx-511672163",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }), __jsx("div", {
      id: "skyline",
      className: "jsx-511672163",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "511672163",
      __self: this
    }, "html.jsx-511672163,body.jsx-511672163{margin:0;padding:0;}body.jsx-511672163{background:#171717;color:#999;font:100%/18px helvetica,arial,sans-serif;}a.jsx-511672163{color:#2fa1d6;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}a.jsx-511672163:hover{color:#fff;}#canvas-container.jsx-511672163{background:#000 url(https://jackrugile.com/lab/fireworks-v2/images/bg.jpg);position:absolute;z-index:2;margin:0;top:0;width:100%;height:100%;}canvas.jsx-511672163{cursor:crosshair;display:block;position:relative;z-index:3;width:100%;height:100%;}canvas.jsx-511672163:active{cursor:crosshair;}#skyline.jsx-511672163{background:url(https://jackrugile.com/lab/fireworks-v2/images/skyline.png) repeat-x 50% 0;bottom:0;height:135px;left:0;position:absolute;width:100%;z-index:1;}#mountains1.jsx-511672163{background:url(https://jackrugile.com/lab/fireworks-v2/images/mountains1.png) repeat-x 40% 0;bottom:0;height:200px;left:0;position:absolute;width:100%;z-index:1;}#mountains2.jsx-511672163{background:url(https://jackrugile.com/lab/fireworks-v2/images/mountains2.png) repeat-x 30% 0;bottom:0;height:250px;left:0;position:absolute;width:100%;z-index:1;}#gui.jsx-511672163{right:0;position:fixed;top:0;z-index:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3RcXGFudXNoYVxcd2VkZGluZ1xcY29tcG9uZW50c1xcZmlyZXdvcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThac0IsQUFHc0IsQUFLVSxBQU1MLEFBTUgsQUFJZ0UsQUFlMUQsQUFVQSxBQUl5RSxBQVVHLEFBVUEsQUFVckYsUUFDTyxDQWhGTCxFQWlCZCxHQU5xQixHQXlCSCxBQVVsQixFQTdDQSxBQUllLElBNEVMLE1BQ0ksQ0E1RWtDLENBTXZCLEFBeUJILFFBOEN0QixVQTdDYyxVQUVELFdBQ0MsRUFsQ2QsR0FpQnNCLE1BWHRCLENBNkJBLFFBUWEsR0F2QkMsQUFpQ0QsQUFVQSxNQW5CSSxHQVVBLEFBVUEsQ0EzQ04sU0FDSCxBQXVCRyxHQVVBLEFBVUEsR0ExQ0UsQ0F1QlMsR0FVQSxBQVVBLE9BMUNSLFFBdUJDLEdBVUEsQUFVQSxDQTFDZixPQXVCYyxHQVVBLEFBVUEsT0FuQmQsR0FVQSxBQVVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXFByb2plY3RcXGFudXNoYVxcd2VkZGluZ1xcY29tcG9uZW50c1xcZmlyZXdvcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBGaXJld29ya3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGU9e31cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldHVwKClcclxuICAgIH1cclxuICAgIHNldHVwKCkge1xyXG4gICAgICBsZXQgRmlyZXdvcmtzID0gZnVuY3Rpb24oKXtcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogVXRpbGl0eVxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBsZXQgcmFuZCA9IGZ1bmN0aW9uKHJNaSwgck1hKXtyZXR1cm4gfn4oKE1hdGgucmFuZG9tKCkqKHJNYS1yTWkrMSkpK3JNaSk7fVxyXG4gICAgICBsZXQgaGl0VGVzdCA9IGZ1bmN0aW9uKHgxLCB5MSwgdzEsIGgxLCB4MiwgeTIsIHcyLCBoMil7cmV0dXJuICEoeDEgKyB3MSA8IHgyIHx8IHgyICsgdzIgPCB4MSB8fCB5MSArIGgxIDwgeTIgfHwgeTIgKyBoMiA8IHkxKTt9O1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihhKXt3aW5kb3cuc2V0VGltZW91dChhLDFFMy82MCl9fSgpO1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogSW5pdGlhbGl6ZVxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKXtcdFxyXG4gICAgICBzZWxmLmR0ID0gMDtcclxuICAgICAgICAgIHNlbGYub2xkVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICBzZWxmLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1x0XHRcdFx0XHJcbiAgICAgICAgICBzZWxmLmNhbnZhc0NvbnRhaW5lciA9ICQoJyNjYW52YXMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGxldCBjYW52YXNDb250YWluZXJEaXNhYmxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICBzZWxmLmNhbnZhcy5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggPSBzZWxmLmN3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICBzZWxmLmNhbnZhcy5oZWlnaHQgPSBzZWxmLmNoID0gd2luZG93LmlubmVySGVpZ2h0O1x0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYucGFydGljbGVzID0gW107XHRcclxuICAgICAgICAgIHNlbGYucGFydENvdW50ID0gMzA7XHJcbiAgICAgICAgICBzZWxmLmZpcmV3b3JrcyA9IFtdO1x0XHJcbiAgICAgICAgICBzZWxmLm14ID0gc2VsZi5jdy8yO1xyXG4gICAgICAgICAgc2VsZi5teSA9IHNlbGYuY2gvMjtcclxuICAgICAgICAgIHNlbGYuY3VycmVudEh1ZSA9IDE3MDtcclxuICAgICAgICAgIHNlbGYucGFydFNwZWVkID0gNTtcclxuICAgICAgICAgIHNlbGYucGFydFNwZWVkbGV0aWFuY2UgPSAxMDtcclxuICAgICAgICAgIHNlbGYucGFydFdpbmQgPSA1MDtcclxuICAgICAgICAgIHNlbGYucGFydEZyaWN0aW9uID0gNTtcclxuICAgICAgICAgIHNlbGYucGFydEdyYXZpdHkgPSAxO1xyXG4gICAgICAgICAgc2VsZi5odWVNaW4gPSAxNTA7XHJcbiAgICAgICAgICBzZWxmLmh1ZU1heCA9IDIwMDtcclxuICAgICAgICAgIHNlbGYuZndvcmtTcGVlZCA9IDI7XHJcbiAgICAgICAgICBzZWxmLmZ3b3JrQWNjZWwgPSA0O1xyXG4gICAgICAgICAgc2VsZi5odWVsZXRpYW5jZSA9IDMwO1xyXG4gICAgICAgICAgc2VsZi5mbGlja2VyRGVuc2l0eSA9IDIwO1xyXG4gICAgICAgICAgc2VsZi5zaG93U2hvY2t3YXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBzZWxmLnNob3dUYXJnZXQgPSB0cnVlO1xyXG4gICAgICAgICAgc2VsZi5jbGVhckFscGhhID0gMjU7XHJcbiAgXHJcbiAgICAgICAgICBzZWxmLmNhbnZhc0NvbnRhaW5lci5hcHBlbmQoc2VsZi5jYW52YXMpO1xyXG4gICAgICAgICAgc2VsZi5jdHggPSBzZWxmLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgc2VsZi5jdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICAgICAgICBzZWxmLmN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgICBzZWxmLmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgICBzZWxmLmJpbmRFdmVudHMoKTtcdFx0XHRcclxuICAgICAgICAgIHNlbGYuY2FudmFzTG9vcCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLmNhbnZhcy5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgfTtcdFx0XHJcbiAgICAgIFxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cdFxyXG4gICAgICAvKiBQYXJ0aWNsZSBDb25zdHJ1Y3RvclxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgbGV0IFBhcnRpY2xlID0gZnVuY3Rpb24oeCwgeSwgaHVlKXtcclxuICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3QgPSBbXHJcbiAgICAgICAgICAgICAge3g6IHgsIHk6IHl9LFxyXG4gICAgICAgICAgICAgIHt4OiB4LCB5OiB5fSxcclxuICAgICAgICAgICAgICB7eDogeCwgeTogeX1cclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICB0aGlzLmFuZ2xlID0gcmFuZCgwLCAzNjApO1xyXG4gICAgICAgICAgdGhpcy5zcGVlZCA9IHJhbmQoKChzZWxmLnBhcnRTcGVlZCAtIHNlbGYucGFydFNwZWVkbGV0aWFuY2UpIDw9IDApID8gMSA6IHNlbGYucGFydFNwZWVkIC0gc2VsZi5wYXJ0U3BlZWRsZXRpYW5jZSwgKHNlbGYucGFydFNwZWVkICsgc2VsZi5wYXJ0U3BlZWRsZXRpYW5jZSkpO1xyXG4gICAgICAgICAgdGhpcy5mcmljdGlvbiA9IDEgLSBzZWxmLnBhcnRGcmljdGlvbi8xMDA7XHJcbiAgICAgICAgICB0aGlzLmdyYXZpdHkgPSBzZWxmLnBhcnRHcmF2aXR5LzI7XHJcbiAgICAgICAgICB0aGlzLmh1ZSA9IHJhbmQoaHVlLXNlbGYuaHVlbGV0aWFuY2UsIGh1ZStzZWxmLmh1ZVZhcmlhbmNlKTtcclxuICAgICAgICAgIHRoaXMuYnJpZ2h0bmVzcyA9IHJhbmQoNTAsIDgwKTtcclxuICAgICAgICAgIHRoaXMuYWxwaGEgPSByYW5kKDQwLDEwMCkvMTAwO1xyXG4gICAgICAgICAgdGhpcy5kZWNheSA9IHJhbmQoMTAsIDUwKS8xMDAwO1xyXG4gICAgICAgICAgdGhpcy53aW5kID0gKHJhbmQoMCwgc2VsZi5wYXJ0V2luZCkgLSAoc2VsZi5wYXJ0V2luZC8yKSkvMjU7XHJcbiAgICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IHNlbGYubGluZVdpZHRoO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgIHZhciByYWRpYW5zID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICB2YXIgdnggPSBNYXRoLmNvcyhyYWRpYW5zKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICB2YXIgdnkgPSBNYXRoLnNpbihyYWRpYW5zKSAqIHRoaXMuc3BlZWQgKyB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgICB0aGlzLnNwZWVkICo9IHRoaXMuZnJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmNvb3JkTGFzdFsyXS54ID0gdGhpcy5jb29yZExhc3RbMV0ueDtcclxuICAgICAgICAgIHRoaXMuY29vcmRMYXN0WzJdLnkgPSB0aGlzLmNvb3JkTGFzdFsxXS55O1xyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3RbMV0ueCA9IHRoaXMuY29vcmRMYXN0WzBdLng7XHJcbiAgICAgICAgICB0aGlzLmNvb3JkTGFzdFsxXS55ID0gdGhpcy5jb29yZExhc3RbMF0ueTtcclxuICAgICAgICAgIHRoaXMuY29vcmRMYXN0WzBdLnggPSB0aGlzLng7XHJcbiAgICAgICAgICB0aGlzLmNvb3JkTGFzdFswXS55ID0gdGhpcy55O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnggKz0gdnggKiBzZWxmLmR0O1xyXG4gICAgICAgICAgdGhpcy55ICs9IHZ5ICogc2VsZi5kdDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLndpbmQ7XHRcdFx0XHRcclxuICAgICAgICAgIHRoaXMuYWxwaGEgLT0gdGhpcy5kZWNheTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWhpdFRlc3QoMCwwLHNlbGYuY3csc2VsZi5jaCx0aGlzLngtdGhpcy5yYWRpdXMsIHRoaXMueS10aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMqMiwgdGhpcy5yYWRpdXMqMikgfHwgdGhpcy5hbHBoYSA8IC4wNSl7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIHNlbGYucGFydGljbGVzLnNwbGljZShpbmRleCwgMSk7XHRcclxuICAgICAgICAgIH1cdFx0XHRcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIFBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBjb29yZFJhbmQgPSAocmFuZCgxLDMpLTEpO1xyXG4gICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgc2VsZi5jdHgubW92ZVRvKE1hdGgucm91bmQodGhpcy5jb29yZExhc3RbY29vcmRSYW5kXS54KSwgTWF0aC5yb3VuZCh0aGlzLmNvb3JkTGFzdFtjb29yZFJhbmRdLnkpKTtcclxuICAgICAgICAgIHNlbGYuY3R4LmxpbmVUbyhNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XHJcbiAgICAgICAgICBzZWxmLmN0eC5jbG9zZVBhdGgoKTtcdFx0XHRcdFxyXG4gICAgICAgICAgc2VsZi5jdHguc3Ryb2tlU3R5bGUgPSAnaHNsYSgnK3RoaXMuaHVlKycsIDEwMCUsICcrdGhpcy5icmlnaHRuZXNzKyclLCAnK3RoaXMuYWxwaGErJyknO1xyXG4gICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XHRcdFx0XHRcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoc2VsZi5mbGlja2VyRGVuc2l0eSA+IDApe1xyXG4gICAgICAgICAgICAgIHZhciBpbnZlcnNlRGVuc2l0eSA9IDUwIC0gc2VsZi5mbGlja2VyRGVuc2l0eTtcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgaWYocmFuZCgwLCBpbnZlcnNlRGVuc2l0eSkgPT09IGludmVyc2VEZW5zaXR5KXtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LmFyYyhNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSwgcmFuZCh0aGlzLmxpbmVXaWR0aCx0aGlzLmxpbmVXaWR0aCszKS8yLCAwLCBNYXRoLlBJKjIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICBzZWxmLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgdmFyIHJhbmRBbHBoYSA9IHJhbmQoNTAsMTAwKS8xMDA7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9ICdoc2xhKCcrdGhpcy5odWUrJywgMTAwJSwgJyt0aGlzLmJyaWdodG5lc3MrJyUsICcrcmFuZEFscGhhKycpJztcclxuICAgICAgICAgICAgICAgICAgc2VsZi5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogQ3JlYXRlIFBhcnRpY2xlc1xyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgc2VsZi5jcmVhdGVQYXJ0aWNsZXMgPSBmdW5jdGlvbih4LHksIGh1ZSl7XHJcbiAgICAgICAgICB2YXIgY291bnRkb3duID0gc2VsZi5wYXJ0Q291bnQ7XHJcbiAgICAgICAgICB3aGlsZShjb3VudGRvd24tLSl7XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgc2VsZi5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoeCwgeSwgaHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cdFxyXG4gICAgICAvKiBVcGRhdGUgUGFydGljbGVzXHJcbiAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1x0XHRcclxuICAgICAgc2VsZi51cGRhdGVQYXJ0aWNsZXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdmFyIGkgPSBzZWxmLnBhcnRpY2xlcy5sZW5ndGg7XHJcbiAgICAgICAgICB3aGlsZShpLS0pe1xyXG4gICAgICAgICAgICAgIHZhciBwID0gc2VsZi5wYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgICAgcC51cGRhdGUoaSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogRHJhdyBQYXJ0aWNsZXNcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgIHNlbGYuZHJhd1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaSA9IHNlbGYucGFydGljbGVzLmxlbmd0aDtcclxuICAgICAgICAgIHdoaWxlKGktLSl7XHJcbiAgICAgICAgICAgICAgdmFyIHAgPSBzZWxmLnBhcnRpY2xlc1tpXTtcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIHAuZHJhdygpO1x0XHRcdFx0XHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogRmlyZXdvcmsgQ29uc3RydWN0b3JcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgIHZhciBGaXJld29yayA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCB0YXJnZXRYLCB0YXJnZXRZKXtcclxuICAgICAgICAgIHRoaXMueCA9IHN0YXJ0WDtcclxuICAgICAgICAgIHRoaXMueSA9IHN0YXJ0WTtcclxuICAgICAgICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYO1xyXG4gICAgICAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XHJcbiAgICAgICAgICB0aGlzLmhpdFggPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaGl0WSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3QgPSBbXHJcbiAgICAgICAgICAgICAge3g6IHN0YXJ0WCwgeTogc3RhcnRZfSxcclxuICAgICAgICAgICAgICB7eDogc3RhcnRYLCB5OiBzdGFydFl9LFxyXG4gICAgICAgICAgICAgIHt4OiBzdGFydFgsIHk6IHN0YXJ0WX1cclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICB0aGlzLnRhcmdldFggPSB0YXJnZXRYO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXRZID0gdGFyZ2V0WTtcclxuICAgICAgICAgIHRoaXMuc3BlZWQgPSBzZWxmLmZ3b3JrU3BlZWQ7XHJcbiAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih0YXJnZXRZIC0gc3RhcnRZLCB0YXJnZXRYIC0gc3RhcnRYKTtcclxuICAgICAgICAgIHRoaXMuc2hvY2t3YXZlQW5nbGUgPSBNYXRoLmF0YW4yKHRhcmdldFkgLSBzdGFydFksIHRhcmdldFggLSBzdGFydFgpKyg5MCooTWF0aC5QSS8xODApKTtcclxuICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gc2VsZi5md29ya0FjY2VsLzEwMDtcclxuICAgICAgICAgIHRoaXMuaHVlID0gc2VsZi5jdXJyZW50SHVlO1xyXG4gICAgICAgICAgdGhpcy5icmlnaHRuZXNzID0gcmFuZCg1MCwgODApO1xyXG4gICAgICAgICAgdGhpcy5hbHBoYSA9IHJhbmQoNTAsMTAwKS8xMDA7XHJcbiAgICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IHNlbGYubGluZVdpZHRoO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXRSYWRpdXMgPSAxO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgRmlyZXdvcmsucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgIHNlbGYuY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgdmFyIHZ4ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiB0aGlzLnNwZWVkLFxyXG4gICAgICAgICAgdnkgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICB0aGlzLnNwZWVkICo9IDEgKyB0aGlzLmFjY2VsZXJhdGlvbjtcdFx0XHRcdFxyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3RbMl0ueCA9IHRoaXMuY29vcmRMYXN0WzFdLng7XHJcbiAgICAgICAgICB0aGlzLmNvb3JkTGFzdFsyXS55ID0gdGhpcy5jb29yZExhc3RbMV0ueTtcclxuICAgICAgICAgIHRoaXMuY29vcmRMYXN0WzFdLnggPSB0aGlzLmNvb3JkTGFzdFswXS54O1xyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3RbMV0ueSA9IHRoaXMuY29vcmRMYXN0WzBdLnk7XHJcbiAgICAgICAgICB0aGlzLmNvb3JkTGFzdFswXS54ID0gdGhpcy54O1xyXG4gICAgICAgICAgdGhpcy5jb29yZExhc3RbMF0ueSA9IHRoaXMueTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoc2VsZi5zaG93VGFyZ2V0KXtcclxuICAgICAgICAgICAgICBpZih0aGlzLnRhcmdldFJhZGl1cyA8IDgpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJhZGl1cyArPSAuMjUgKiBzZWxmLmR0O1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmFkaXVzID0gMSAqIHNlbGYuZHQ7XHRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHRoaXMuc3RhcnRYID49IHRoaXMudGFyZ2V0WCl7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy54ICsgdnggPD0gdGhpcy50YXJnZXRYKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy50YXJnZXRYO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmhpdFggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB2eCAqIHNlbGYuZHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZih0aGlzLnggKyB2eCA+PSB0aGlzLnRhcmdldFgpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnRhcmdldFg7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGl0WCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHZ4ICogc2VsZi5kdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHRoaXMuc3RhcnRZID49IHRoaXMudGFyZ2V0WSl7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy55ICsgdnkgPD0gdGhpcy50YXJnZXRZKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy50YXJnZXRZO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmhpdFkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB2eSAqIHNlbGYuZHQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZih0aGlzLnkgKyB2eSA+PSB0aGlzLnRhcmdldFkpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnRhcmdldFk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGl0WSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHZ5ICogc2VsZi5kdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHRcdFx0XHRcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYodGhpcy5oaXRYICYmIHRoaXMuaGl0WSl7XHJcbiAgICAgICAgICAgICAgdmFyIHJhbmRFeHBsb3Npb24gPSByYW5kKDAsIDkpO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3JlYXRlUGFydGljbGVzKHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZLCB0aGlzLmh1ZSk7XHJcbiAgICAgICAgICAgICAgc2VsZi5maXJld29ya3Muc3BsaWNlKGluZGV4LCAxKTtcdFx0XHRcdFx0XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBGaXJld29yay5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzZWxmLmN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIHZhciBjb29yZFJhbmQgPSAocmFuZCgxLDMpLTEpO1x0XHRcdFx0XHRcclxuICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1x0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICBzZWxmLmN0eC5tb3ZlVG8oTWF0aC5yb3VuZCh0aGlzLmNvb3JkTGFzdFtjb29yZFJhbmRdLngpLCBNYXRoLnJvdW5kKHRoaXMuY29vcmRMYXN0W2Nvb3JkUmFuZF0ueSkpO1xyXG4gICAgICAgICAgc2VsZi5jdHgubGluZVRvKE1hdGgucm91bmQodGhpcy54KSwgTWF0aC5yb3VuZCh0aGlzLnkpKTtcclxuICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgc2VsZi5jdHguc3Ryb2tlU3R5bGUgPSAnaHNsYSgnK3RoaXMuaHVlKycsIDEwMCUsICcrdGhpcy5icmlnaHRuZXNzKyclLCAnK3RoaXMuYWxwaGErJyknO1xyXG4gICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XHRcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoc2VsZi5zaG93VGFyZ2V0KXtcclxuICAgICAgICAgICAgICBzZWxmLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHguYXJjKE1hdGgucm91bmQodGhpcy50YXJnZXRYKSwgTWF0aC5yb3VuZCh0aGlzLnRhcmdldFkpLCB0aGlzLnRhcmdldFJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSlcclxuICAgICAgICAgICAgICBzZWxmLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICBzZWxmLmN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIGlmKHNlbGYuc2hvd1Nob2Nrd2F2ZSl7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3R4LnRyYW5zbGF0ZShNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHgucm90YXRlKHRoaXMuc2hvY2t3YXZlQW5nbGUpO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgIHNlbGYuY3R4LmFyYygwLCAwLCAxKih0aGlzLnNwZWVkLzUpLCAwLCBNYXRoLlBJLCB0cnVlKTtcclxuICAgICAgICAgICAgICBzZWxmLmN0eC5zdHJva2VTdHlsZSA9ICdoc2xhKCcrdGhpcy5odWUrJywgMTAwJSwgJyt0aGlzLmJyaWdodG5lc3MrJyUsICcrcmFuZCgyNSwgNjApLzEwMCsnKSc7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgc2VsZi5jdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgfVx0XHRcdFx0XHRcdFx0XHQgXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cdFxyXG4gICAgICAvKiBDcmVhdGUgRmlyZXdvcmtzXHJcbiAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICBzZWxmLmNyZWF0ZUZpcmV3b3JrcyA9IGZ1bmN0aW9uKHN0YXJ0WCwgc3RhcnRZLCB0YXJnZXRYLCB0YXJnZXRZKXtcdFx0XHRcclxuICAgICAgICAgIHNlbGYuZmlyZXdvcmtzLnB1c2gobmV3IEZpcmV3b3JrKHN0YXJ0WCwgc3RhcnRZLCB0YXJnZXRYLCB0YXJnZXRZKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cdFxyXG4gICAgICAvKiBVcGRhdGUgRmlyZXdvcmtzXHJcbiAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1x0XHRcclxuICAgICAgc2VsZi51cGRhdGVGaXJld29ya3MgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdmFyIGkgPSBzZWxmLmZpcmV3b3Jrcy5sZW5ndGg7XHJcbiAgICAgICAgICB3aGlsZShpLS0pe1xyXG4gICAgICAgICAgICAgIHZhciBmID0gc2VsZi5maXJld29ya3NbaV07XHJcbiAgICAgICAgICAgICAgZi51cGRhdGUoaSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogRHJhdyBGaXJld29ya3NcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgIHNlbGYuZHJhd0ZpcmV3b3JrcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaSA9IHNlbGYuZmlyZXdvcmtzLmxlbmd0aDtcdFx0XHRcclxuICAgICAgICAgIHdoaWxlKGktLSl7XHJcbiAgICAgICAgICAgICAgdmFyIGYgPSBzZWxmLmZpcmV3b3Jrc1tpXTtcdFx0XHJcbiAgICAgICAgICAgICAgZi5kcmF3KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogRXZlbnRzXHJcbiAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgICBzZWxmLmJpbmRFdmVudHMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1x0XHRcdFxyXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgIHNlbGYudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYuY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLmN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkKHNlbGYuY2FudmFzKS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgdmFyIHJhbmRMYXVuY2ggPSByYW5kKDAsIDUpO1xyXG4gICAgICAgICAgICAgIHNlbGYubXggPSBlLnBhZ2VYIC0gc2VsZi5jYW52YXNDb250YWluZXIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgICBzZWxmLm15ID0gZS5wYWdlWSAtIHNlbGYuY2FudmFzQ29udGFpbmVyLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRIdWUgPSByYW5kKHNlbGYuaHVlTWluLCBzZWxmLmh1ZU1heCk7XHJcbiAgICAgICAgICAgICAgc2VsZi5jcmVhdGVGaXJld29ya3Moc2VsZi5jdy8yLCBzZWxmLmNoLCBzZWxmLm14LCBzZWxmLm15KTtcdFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICQoc2VsZi5jYW52YXMpLm9uKCdtb3VzZW1vdmUuZmlyZXdvcmtzJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgIHZhciByYW5kTGF1bmNoID0gcmFuZCgwLCA1KTtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5teCA9IGUucGFnZVggLSBzZWxmLmNhbnZhc0NvbnRhaW5lci5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLm15ID0gZS5wYWdlWSAtIHNlbGYuY2FudmFzQ29udGFpbmVyLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50SHVlID0gcmFuZChzZWxmLmh1ZU1pbiwgc2VsZi5odWVNYXgpO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZUZpcmV3b3JrcyhzZWxmLmN3LzIsIHNlbGYuY2gsIHNlbGYubXgsIHNlbGYubXkpO1x0XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0pO1x0XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJChzZWxmLmNhbnZhcykub24oJ21vdXNldXAnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAkKHNlbGYuY2FudmFzKS5vZmYoJ21vdXNlbW92ZS5maXJld29ya3MnKTtcdFx0XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1x0XHJcbiAgICAgIC8qIENsZWFyIENhbnZhc1xyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICAgc2VsZi5jbGVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzZWxmLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgICAgc2VsZi5maXJld29ya3MgPSBbXTtcclxuICAgICAgICAgIHNlbGYuY3R4LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmN3LCBzZWxmLmNoKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHRcclxuICAgICAgLyogRGVsdGFcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBzZWxmLnVwZGF0ZURlbHRhID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBuZXdUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgIHNlbGYuZHQgPSAobmV3VGltZSAtIHNlbGYub2xkVGltZSkvMTY7XHJcbiAgICAgICAgICBzZWxmLmR0ID0gKHNlbGYuZHQgPiA1KSA/IDUgOiBzZWxmLmR0O1xyXG4gICAgICAgICAgc2VsZi5vbGRUaW1lID0gbmV3VGltZTtcdFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cdFxyXG4gICAgICAvKiBNYWluIExvb3BcclxuICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgIHNlbGYuY2FudmFzTG9vcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHNlbGYuY2FudmFzTG9vcCwgc2VsZi5jYW52YXMpO1xyXG4gICAgICBzZWxmLnVwZGF0ZURlbHRhKCk7XHJcbiAgICAgICAgICBzZWxmLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgICAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLCcrc2VsZi5jbGVhckFscGhhLzEwMCsnKSc7XHJcbiAgICAgICAgICBzZWxmLmN0eC5maWxsUmVjdCgwLDAsc2VsZi5jdyxzZWxmLmNoKTtcclxuICAgICAgICAgIHNlbGYuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcclxuICAgICAgICAgIHNlbGYudXBkYXRlRmlyZXdvcmtzKCk7XHJcbiAgICAgICAgICBzZWxmLnVwZGF0ZVBhcnRpY2xlcygpO1xyXG4gICAgICAgICAgc2VsZi5kcmF3RmlyZXdvcmtzKCk7XHRcdFx0XHJcbiAgICAgICAgICBzZWxmLmRyYXdQYXJ0aWNsZXMoKTtcdFx0XHRcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHNlbGYuaW5pdCgpO1xyXG4gICAgXHJcbiAgICB2YXIgaW5pdGlhbExhdW5jaENvdW50ID0gMTAwMDtcclxuICAgIHdoaWxlKGluaXRpYWxMYXVuY2hDb3VudC0tKXtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgIHNlbGYuZmlyZXdvcmtzLnB1c2gobmV3IEZpcmV3b3JrKHNlbGYuY3cvMiwgc2VsZi5jaCwgcmFuZCg1MCwgc2VsZi5jdy01MCksIHJhbmQoNTAsIHNlbGYuY2gvMiktNTApKTtcclxuICAgICAgfSwgaW5pdGlhbExhdW5jaENvdW50KjIwMCk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICB2YXIgZndvcmtzID0gbmV3IEZpcmV3b3JrcygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9ICcnXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cdFx0XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY2FudmFzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW91bnRhaW5zMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW91bnRhaW5zMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2t5bGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaHRtbCwgYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcdFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE3MTcxNztcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCUvMThweCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyZmExZDY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcdFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjY2FudmFzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAgdXJsKGh0dHBzOi8vamFja3J1Z2lsZS5jb20vbGFiL2ZpcmV3b3Jrcy12Mi9pbWFnZXMvYmcuanBnKTtcclxuICAgICAgICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgICAgICAgICAvKmxlZnQ6IDUwJTsqL1xyXG4gICAgICAgICAgICAvKm1hcmdpbjogLTIwMHB4IDAgMCAtMzAwcHg7Ki9cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvKnRvcDogNTAlOyovXHJcbiAgICAgICAgICAvKndpZHRoOiA2MDBweDsqL1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYW52YXM6YWN0aXZlIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNza3lsaW5lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vamFja3J1Z2lsZS5jb20vbGFiL2ZpcmV3b3Jrcy12Mi9pbWFnZXMvc2t5bGluZS5wbmcpIHJlcGVhdC14IDUwJSAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI21vdW50YWluczEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qYWNrcnVnaWxlLmNvbS9sYWIvZmlyZXdvcmtzLXYyL2ltYWdlcy9tb3VudGFpbnMxLnBuZykgcmVwZWF0LXggNDAlIDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcdFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjbW91bnRhaW5zMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2phY2tydWdpbGUuY29tL2xhYi9maXJld29ya3MtdjIvaW1hZ2VzL21vdW50YWluczIucG5nKSByZXBlYXQteCAzMCUgMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1x0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNndWkge1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEZpcmV3b3JrczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\Project\\\\anusha\\\\wedding\\\\components\\\\fireworks.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fireworks);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fireworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fireworks */ "./components/fireworks.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\Project\\anusha\\wedding\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Anusha & Jiban"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("script", {
    charset: "UTF-8",
    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("script", {
    charset: "UTF-8",
    src: "https://jackrugile.com/lab/fireworks-v2/js/dat.gui.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx(_components_fireworks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\Project\anusha\wedding\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map