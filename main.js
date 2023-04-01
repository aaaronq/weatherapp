/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/domstuff.js":
/*!*********************************!*\
  !*** ./src/modules/domstuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMstuff = (() => {

    let weatherobj; 

    function updateDOM (APIresult) {
        weatherobj = APIresult;

        const cityName = document.querySelector(".header h1");
        const time = document.querySelector(".header h2");
        const conditionImg = document.querySelector(".condition img");
        const condition = document.querySelector(".condition h2");

        if (weatherobj.location.slice(-1) === "s") {
            cityName.innerText = `${weatherobj.location}' Weather`;
        }
        else {
            cityName.innerText = `${weatherobj.location}'s Weather`;
        }
        
        time.innerText = `Time: ${weatherobj.time}`;
        conditionImg.src = `https://${weatherobj.icon}`;
        condition.innerText = weatherobj.condition;

        updateTemp();
        const searchBar = document.getElementById("searchBar")
        searchBar.value = "";
        searchBar.blur();
    }

    function updateTemp() {
        const temperature = document.querySelector(".temperature h1");
        const feelsLike = document.querySelector(".temperature h2");

        let tempSelection;

        const tempButton = document.getElementById("tempButton");
        tempButton.innerText === "C" ? tempSelection = "F" : tempSelection = "C";

        if (tempSelection === "C") {
            temperature.innerText = `${Math.round(weatherobj.tempC)} C`;
            feelsLike.innerText = `Feels like ${Math.round(weatherobj.feelsLikeC)} C`;
        }
        else {
            temperature.innerText = `${Math.round(weatherobj.tempF)} F`;
            feelsLike.innerText = `Feels like ${Math.round(weatherobj.feelsLikeF)} F`;
        }
    }


    return {
        updateDOM,
        updateTemp,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMstuff);

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    async function APIcall(location) {
        const APIkey = "c7a6021464d24003b5b143107233003";
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`,
            { mode: "cors" }
        );
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const data = await response.json();
        return convertData(data);
    }

    function convertData(data) {
        const location = data.location.name;
        const time = data.current.last_updated.split(" ")[1];
        const icon = data.current.condition.icon;
        const condition = data.current.condition.text;
        const tempC = data.current.temp_c;
        const feelsLikeC = data.current.feelslike_c;
        const tempF = data.current.temp_f;
        const feelsLikeF = data.current.feelslike_f;

        return {
            location,
            time,
            icon,
            condition,
            tempC,
            feelsLikeC,
            tempF,
            feelsLikeF,
        };
    }

    return {
        APIcall
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ "./src/modules/weather.js");
/* harmony import */ var _modules_domstuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domstuff.js */ "./src/modules/domstuff.js");



async function displayWeather(location) {
    const APIresult = await _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"].APIcall(location);
    _modules_domstuff_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDOM(APIresult);
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = document.getElementById("searchBar").value;
    if (location) displayWeather(location)
    .catch((err) => {
        console.log(err.message);
    });
});

const tempButton = document.getElementById("tempButton");
tempButton.addEventListener("click", () => {
    tempButton.innerText === "C" ? tempButton.innerText = "F" : tempButton.innerText = "C";
    _modules_domstuff_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTemp();
});

displayWeather("Belfast");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyw4QkFBOEI7QUFDckUsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0EsdUNBQXVDLDhCQUE4QjtBQUNyRSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZEdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsT0FBTyxLQUFLLFNBQVM7QUFDbkYsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7VUN6Q3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0U7O0FBRTVDO0FBQ0EsNEJBQTRCLG1FQUFlO0FBQzNDLElBQUksc0VBQWtCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQW1CO0FBQ3ZCLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvZG9tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRE9Nc3R1ZmYgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHdlYXRoZXJvYmo7IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRE9NIChBUElyZXN1bHQpIHtcbiAgICAgICAgd2VhdGhlcm9iaiA9IEFQSXJlc3VsdDtcblxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIGgxXCIpO1xuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgaDJcIik7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uIGltZ1wiKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24gaDJcIik7XG5cbiAgICAgICAgaWYgKHdlYXRoZXJvYmoubG9jYXRpb24uc2xpY2UoLTEpID09PSBcInNcIikge1xuICAgICAgICAgICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlcm9iai5sb2NhdGlvbn0nIFdlYXRoZXJgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlcm9iai5sb2NhdGlvbn0ncyBXZWF0aGVyYDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGltZS5pbm5lclRleHQgPSBgVGltZTogJHt3ZWF0aGVyb2JqLnRpbWV9YDtcbiAgICAgICAgY29uZGl0aW9uSW1nLnNyYyA9IGBodHRwczovLyR7d2VhdGhlcm9iai5pY29ufWA7XG4gICAgICAgIGNvbmRpdGlvbi5pbm5lclRleHQgPSB3ZWF0aGVyb2JqLmNvbmRpdGlvbjtcblxuICAgICAgICB1cGRhdGVUZW1wKCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpXG4gICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHNlYXJjaEJhci5ibHVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGVtcCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlIGgxXCIpO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlIGgyXCIpO1xuXG4gICAgICAgIGxldCB0ZW1wU2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBCdXR0b25cIik7XG4gICAgICAgIHRlbXBCdXR0b24uaW5uZXJUZXh0ID09PSBcIkNcIiA/IHRlbXBTZWxlY3Rpb24gPSBcIkZcIiA6IHRlbXBTZWxlY3Rpb24gPSBcIkNcIjtcblxuICAgICAgICBpZiAodGVtcFNlbGVjdGlvbiA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke01hdGgucm91bmQod2VhdGhlcm9iai50ZW1wQyl9IENgO1xuICAgICAgICAgICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlICR7TWF0aC5yb3VuZCh3ZWF0aGVyb2JqLmZlZWxzTGlrZUMpfSBDYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke01hdGgucm91bmQod2VhdGhlcm9iai50ZW1wRil9IEZgO1xuICAgICAgICAgICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlICR7TWF0aC5yb3VuZCh3ZWF0aGVyb2JqLmZlZWxzTGlrZUYpfSBGYDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlRE9NLFxuICAgICAgICB1cGRhdGVUZW1wLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTXN0dWZmOyIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIEFQSWNhbGwobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgQVBJa2V5ID0gXCJjN2E2MDIxNDY0ZDI0MDAzYjViMTQzMTA3MjMzMDAzXCI7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSWtleX0mcT0ke2xvY2F0aW9ufWAsXG4gICAgICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IE9LXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjb25zdCB0aW1lID0gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZC5zcGxpdChcIiBcIilbMV07XG4gICAgICAgIGNvbnN0IGljb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uc3QgdGVtcEMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2VDID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICAgICAgICBjb25zdCB0ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZUYgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBjb25kaXRpb24sXG4gICAgICAgICAgICB0ZW1wQyxcbiAgICAgICAgICAgIGZlZWxzTGlrZUMsXG4gICAgICAgICAgICB0ZW1wRixcbiAgICAgICAgICAgIGZlZWxzTGlrZUYsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQVBJY2FsbFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXIuanNcIlxuaW1wb3J0IERPTXN0dWZmIGZyb20gXCIuL21vZHVsZXMvZG9tc3R1ZmYuanNcIlxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihsb2NhdGlvbikge1xuICAgIGNvbnN0IEFQSXJlc3VsdCA9IGF3YWl0IHdlYXRoZXIuQVBJY2FsbChsb2NhdGlvbik7XG4gICAgRE9Nc3R1ZmYudXBkYXRlRE9NKEFQSXJlc3VsdCk7XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIikudmFsdWU7XG4gICAgaWYgKGxvY2F0aW9uKSBkaXNwbGF5V2VhdGhlcihsb2NhdGlvbilcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfSk7XG59KTtcblxuY29uc3QgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcEJ1dHRvblwiKTtcbnRlbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0ZW1wQnV0dG9uLmlubmVyVGV4dCA9PT0gXCJDXCIgPyB0ZW1wQnV0dG9uLmlubmVyVGV4dCA9IFwiRlwiIDogdGVtcEJ1dHRvbi5pbm5lclRleHQgPSBcIkNcIjtcbiAgICBET01zdHVmZi51cGRhdGVUZW1wKCk7XG59KTtcblxuZGlzcGxheVdlYXRoZXIoXCJCZWxmYXN0XCIpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9