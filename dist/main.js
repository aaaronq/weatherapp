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
        document.getElementById("searchBar").value = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLDhCQUE4QjtBQUNyRSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFLGdEQUFnRCxtQ0FBbUM7QUFDbkY7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDckR2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPLEtBQUssU0FBUztBQUNuRixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7OztVQ3pDdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRTs7QUFFNUM7QUFDQSw0QkFBNEIsbUVBQWU7QUFDM0MsSUFBSSxzRUFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBbUI7QUFDdkIsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET01zdHVmZiA9ICgoKSA9PiB7XG5cbiAgICBsZXQgd2VhdGhlcm9iajsgXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVET00gKEFQSXJlc3VsdCkge1xuICAgICAgICB3ZWF0aGVyb2JqID0gQVBJcmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgaDFcIik7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciBoMlwiKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24gaW1nXCIpO1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvbiBoMlwiKTtcblxuICAgICAgICBpZiAod2VhdGhlcm9iai5sb2NhdGlvbi5zbGljZSgtMSkgPT09IFwic1wiKSB7XG4gICAgICAgICAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyb2JqLmxvY2F0aW9ufScgV2VhdGhlcmA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyb2JqLmxvY2F0aW9ufSdzIFdlYXRoZXJgO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aW1lLmlubmVyVGV4dCA9IGBUaW1lOiAke3dlYXRoZXJvYmoudGltZX1gO1xuICAgICAgICBjb25kaXRpb25JbWcuc3JjID0gYGh0dHBzOi8vJHt3ZWF0aGVyb2JqLmljb259YDtcbiAgICAgICAgY29uZGl0aW9uLmlubmVyVGV4dCA9IHdlYXRoZXJvYmouY29uZGl0aW9uO1xuXG4gICAgICAgIHVwZGF0ZVRlbXAoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCYXJcIikudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRlbXAoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZSBoMVwiKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZSBoMlwiKTtcblxuICAgICAgICBsZXQgdGVtcFNlbGVjdGlvbjtcblxuICAgICAgICBjb25zdCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wQnV0dG9uXCIpO1xuICAgICAgICB0ZW1wQnV0dG9uLmlubmVyVGV4dCA9PT0gXCJDXCIgPyB0ZW1wU2VsZWN0aW9uID0gXCJGXCIgOiB0ZW1wU2VsZWN0aW9uID0gXCJDXCI7XG5cbiAgICAgICAgaWYgKHRlbXBTZWxlY3Rpb24gPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJvYmoudGVtcEMpfSBDYDtcbiAgICAgICAgICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSBgRmVlbHMgbGlrZSAke01hdGgucm91bmQod2VhdGhlcm9iai5mZWVsc0xpa2VDKX0gQ2A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJvYmoudGVtcEYpfSBGYDtcbiAgICAgICAgICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSBgRmVlbHMgbGlrZSAke01hdGgucm91bmQod2VhdGhlcm9iai5mZWVsc0xpa2VGKX0gRmA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZURPTSxcbiAgICAgICAgdXBkYXRlVGVtcCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01zdHVmZjsiLCJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBBUEljYWxsKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IEFQSWtleSA9IFwiYzdhNjAyMTQ2NGQyNDAwM2I1YjE0MzEwNzIzMzAwM1wiO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElrZXl9JnE9JHtsb2NhdGlvbn1gLFxuICAgICAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBPS1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gY29udmVydERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgICBjb25zdCBpY29uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGNvbnN0IHRlbXBDID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlQyA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgICAgICAgY29uc3QgdGVtcEYgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2VGID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICAgICAgdGVtcEMsXG4gICAgICAgICAgICBmZWVsc0xpa2VDLFxuICAgICAgICAgICAgdGVtcEYsXG4gICAgICAgICAgICBmZWVsc0xpa2VGLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIEFQSWNhbGxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyLmpzXCJcbmltcG9ydCBET01zdHVmZiBmcm9tIFwiLi9tb2R1bGVzL2RvbXN0dWZmLmpzXCJcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCBBUElyZXN1bHQgPSBhd2FpdCB3ZWF0aGVyLkFQSWNhbGwobG9jYXRpb24pO1xuICAgIERPTXN0dWZmLnVwZGF0ZURPTShBUElyZXN1bHQpO1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQmFyXCIpLnZhbHVlO1xuICAgIGlmIChsb2NhdGlvbikgZGlzcGxheVdlYXRoZXIobG9jYXRpb24pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xufSk7XG5cbmNvbnN0IHRlbXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBCdXR0b25cIik7XG50ZW1wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGVtcEJ1dHRvbi5pbm5lclRleHQgPT09IFwiQ1wiID8gdGVtcEJ1dHRvbi5pbm5lclRleHQgPSBcIkZcIiA6IHRlbXBCdXR0b24uaW5uZXJUZXh0ID0gXCJDXCI7XG4gICAgRE9Nc3R1ZmYudXBkYXRlVGVtcCgpO1xufSk7XG5cbmRpc3BsYXlXZWF0aGVyKFwiQmVsZmFzdFwiKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9