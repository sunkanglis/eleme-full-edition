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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//手机号登录验证\nvar controller = function controller() {\n  var reg = /^1(3|4|5|7|8)\\d{9}$/;\n  var tel = $('input:first');\n  $('button').on('click', function (e) {\n    e.preventDefault();\n\n    if ($('#tel').val() == '') {\n      $('.capion').show(function () {\n        $('.capion').fadeOut(3000);\n      });\n    } else if ($('#code').val() == '') {\n      $('.capion').text('请输入验证码');\n      $('.capion').show(function () {\n        $('.capion').fadeOut(3000);\n      });\n      console.log($('#tel').val());\n    } else if (!reg.test($('#tel').val())) {\n      $('.capion').text('请输入正确的手机号');\n      $('.capion').show(function () {\n        $('.capion').fadeOut(3000);\n      });\n    } else {\n      var user = {\n        tel: $('#tel').val()\n      };\n      var users_value = sessionStorage.getItem(\"users\");\n      var users = null;\n\n      if (users_value == null) {\n        users = [];\n      } else {\n        users = JSON.parse(users_value);\n      }\n\n      var isExist = users.some(function (item) {\n        var res = item.tel == user.tel;\n        return res;\n      });\n\n      if (!isExist) {\n        //如果不存在,将获取的对象存进数组里\n        users.push(user);\n      }\n\n      sessionStorage.setItem('tel', user.tel);\n      storage('users', users);\n      window.location.replace(\"http://localhost:8080\");\n    }\n  });\n};\n\nvar storage = function storage(key, value) {\n  sessionStorage.setItem(key, JSON.stringify(value));\n};\n\ncontroller();\n\n//# sourceURL=webpack:///./src/js/login.js?");

/***/ })

/******/ });