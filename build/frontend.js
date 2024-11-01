/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");




const divsToUpdate = document.querySelectorAll(".toms-pretty-list");
divsToUpdate.forEach(function (div) {
  const data = JSON.parse(div.querySelector("pre").innerHTML);

  if (data.prettyList !== false) {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomSPrettyListFrontend, data), div);
    div.classList.remove("toms-pretty-list");
  }
});

function TomSPrettyListFrontend(props) {
  const TomSHeading = !!props.prettyListHeading === false ? 'h3' : !!props.prettyListHeading && props.prettyListHeading <= 6 ? `h${props.prettyListHeading}` : 'div';
  const TomSUL = !!props.prettyListStyle && props.prettyListStyle !== 'default' ? 'div' : 'ul';
  const TomSLI = !!props.prettyListStyle && props.prettyListStyle !== 'default' ? 'div' : 'li'; //console.log( FromPHP.defaultImgUrl ); // php array object
  //console.log(props.prettyListTitleSvgIconSizeWidth != undefined,props.prettyListTitleSvgIconSizeHeight)
  //console.log(props.prettyListStyle === 'svgicon');

  const contentFontIconCheck = props.prettyListIcon !== undefined && props.prettyListIcon.some(function (x, index) {
    return !!x;
  });
  const contentSvgIconCheck = props.prettyListSvgIcon !== undefined && props.prettyListSvgIcon.some(function (x, index) {
    return !!x;
  });
  const contentCheck = props.prettyListContent !== undefined && props.prettyListContent.some(function (x, index) {
    return !!x;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!props.prettyListTitleIcon || !!props.prettyListTitleSvgIcon || !!props.prettyListTitle || contentFontIconCheck === true || contentSvgIconCheck === true || contentCheck === true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-pretty-list-frontend",
    style: {
      margin: `${props.prettyListBoxMargin}${props.prettyListBoxMarginPX !== false ? 'px' : ''}${props.prettyListBoxMarginEM === true ? 'em' : ''}${props.prettyListBoxMarginPerCent === true ? '%' : ''}`,
      marginTop: `${props.prettyListBoxMarginTop}${props.prettyListBoxMarginPX !== false ? 'px' : ''}${props.prettyListBoxMarginEM === true ? 'em' : ''}${props.prettyListBoxMarginPerCent === true ? '%' : ''}`,
      marginRight: `${props.prettyListBoxMarginRight}${props.prettyListBoxMarginPX !== false ? 'px' : ''}${props.prettyListBoxMarginEM === true ? 'em' : ''}${props.prettyListBoxMarginPerCent === true ? '%' : ''}`,
      marginBottom: `${props.prettyListBoxMarginBottom}${props.prettyListBoxMarginPX !== false ? 'px' : ''}${props.prettyListBoxMarginEM === true ? 'em' : ''}${props.prettyListBoxMarginPerCent === true ? '%' : ''}`,
      marginLeft: `${props.prettyListBoxMarginLeft}${props.prettyListBoxMarginPX !== false ? 'px' : ''}${props.prettyListBoxMarginEM === true ? 'em' : ''}${props.prettyListBoxMarginPerCent === true ? '%' : ''}`,
      padding: `${props.prettyListBoxPadding}${props.prettyListBoxPaddingPX !== false ? 'px' : ''}${props.prettyListBoxPaddingEM === true ? 'em' : ''}${props.prettyListBoxPaddingPerCent === true ? '%' : ''}`,
      paddingTop: `${props.prettyListBoxPaddingTop}${props.prettyListBoxPaddingPX !== false ? 'px' : ''}${props.prettyListBoxPaddingEM === true ? 'em' : ''}${props.prettyListBoxPaddingPerCent === true ? '%' : ''}`,
      paddingRight: `${props.prettyListBoxPaddingRight}${props.prettyListBoxPaddingPX !== false ? 'px' : ''}${props.prettyListBoxPaddingEM === true ? 'em' : ''}${props.prettyListBoxPaddingPerCent === true ? '%' : ''}`,
      paddingBottom: `${props.prettyListBoxPaddingBottom}${props.prettyListBoxPaddingPX !== false ? 'px' : ''}${props.prettyListBoxPaddingEM === true ? 'em' : ''}${props.prettyListBoxPaddingPerCent === true ? '%' : ''}`,
      paddingLeft: `${props.prettyListBoxPaddingLeft}${props.prettyListBoxPaddingPX !== false ? 'px' : ''}${props.prettyListBoxPaddingEM === true ? 'em' : ''}${props.prettyListBoxPaddingPerCent === true ? '%' : ''}`,
      borderRadius: `${props.prettyListBoxBorderRadius}${props.prettyListBoxBorderRadiusPX !== false ? 'px' : ''}${props.prettyListBoxBorderRadiusEM === true ? 'em' : ''}${props.prettyListBoxBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopRightRadius: `${props.prettyListBoxBorderTopRightRadius}${props.prettyListBoxBorderRadiusPX !== false ? 'px' : ''}${props.prettyListBoxBorderRadiusEM === true ? 'em' : ''}${props.prettyListBoxBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopLeftRadius: `${props.prettyListBoxBorderTopLeftRadius}${props.prettyListBoxBorderRadiusPX !== false ? 'px' : ''}${props.prettyListBoxBorderRadiusEM === true ? 'em' : ''}${props.prettyListBoxBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomRightRadius: `${props.prettyListBoxBorderBottomRightRadius}${props.prettyListBoxBorderRadiusPX !== false ? 'px' : ''}${props.prettyListBoxBorderRadiusEM === true ? 'em' : ''}${props.prettyListBoxBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomLeftRadius: `${props.prettyListBoxBorderBottomLeftRadius}${props.prettyListBoxBorderRadiusPX !== false ? 'px' : ''}${props.prettyListBoxBorderRadiusEM === true ? 'em' : ''}${props.prettyListBoxBorderRadiusPerCent === true ? '%' : ''}`,
      backgroundColor: props.prettyListBoxBgColor !== undefined && `rgba(${props.prettyListBoxBgColor.r}, ${props.prettyListBoxBgColor.g}, ${props.prettyListBoxBgColor.b}, ${props.prettyListBoxBgColor.a} )`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-pretty-list-style-heading",
    style: {
      margin: `${props.prettyListHeadingMargin}${props.prettyListTitleMarginPX !== false ? 'px' : ''}${props.prettyListTitleMarginEM === true ? 'em' : ''}${props.prettyListTitleMarginPerCent === true ? '%' : ''}`,
      marginTop: `${props.prettyListHeadingMarginTop}${props.prettyListTitleMarginPX !== false ? 'px' : ''}${props.prettyListTitleMarginEM === true ? 'em' : ''}${props.prettyListTitleMarginPerCent === true ? '%' : ''}`,
      marginRight: `${props.prettyListHeadingMarginRight}${props.prettyListTitleMarginPX !== false ? 'px' : ''}${props.prettyListTitleMarginEM === true ? 'em' : ''}${props.prettyListTitleMarginPerCent === true ? '%' : ''}`,
      marginBottom: `${props.prettyListHeadingMarginBottom}${props.prettyListTitleMarginPX !== false ? 'px' : ''}${props.prettyListTitleMarginEM === true ? 'em' : ''}${props.prettyListTitleMarginPerCent === true ? '%' : ''}`,
      marginLeft: `${props.prettyListHeadingMarginLeft}${props.prettyListTitleMarginPX !== false ? 'px' : ''}${props.prettyListTitleMarginEM === true ? 'em' : ''}${props.prettyListTitleMarginPerCent === true ? '%' : ''}`,
      padding: `${props.prettyListHeadingPadding}${props.prettyListTitlePaddingPX !== false ? 'px' : ''}${props.prettyListTitlePaddingEM === true ? 'em' : ''}${props.prettyListTitlePaddingPerCent === true ? '%' : ''}`,
      paddingTop: `${props.prettyListHeadingPaddingTop}${props.prettyListTitlePaddingPX !== false ? 'px' : ''}${props.prettyListTitlePaddingEM === true ? 'em' : ''}${props.prettyListTitlePaddingPerCent === true ? '%' : ''}`,
      paddingRight: `${props.prettyListHeadingPaddingRight}${props.prettyListTitlePaddingPX !== false ? 'px' : ''}${props.prettyListTitlePaddingEM === true ? 'em' : ''}${props.prettyListTitlePaddingPerCent === true ? '%' : ''}`,
      paddingBottom: `${props.prettyListHeadingPaddingBottom}${props.prettyListTitlePaddingPX !== false ? 'px' : ''}${props.prettyListTitlePaddingEM === true ? 'em' : ''}${props.prettyListTitlePaddingPerCent === true ? '%' : ''}`,
      paddingLeft: `${props.prettyListHeadingPaddingLeft}${props.prettyListTitlePaddingPX !== false ? 'px' : ''}${props.prettyListTitlePaddingEM === true ? 'em' : ''}${props.prettyListTitlePaddingPerCent === true ? '%' : ''}`,
      borderRadius: `${props.prettyListHeadingBorderRadius}${props.prettyListTitleBorderRadiusPX !== false ? 'px' : ''}${props.prettyListTitleBorderRadiusEM === true ? 'em' : ''}${props.prettyListTitleBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopRightRadius: `${props.prettyListHeadingBorderTopRightRadius}${props.prettyListTitleBorderRadiusPX !== false ? 'px' : ''}${props.prettyListTitleBorderRadiusEM === true ? 'em' : ''}${props.prettyListTitleBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopLeftRadius: `${props.prettyListHeadingBorderTopLeftRadius}${props.prettyListTitleBorderRadiusPX !== false ? 'px' : ''}${props.prettyListTitleBorderRadiusEM === true ? 'em' : ''}${props.prettyListTitleBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomRightRadius: `${props.prettyListHeadingBorderBottomRightRadius}${props.prettyListTitleBorderRadiusPX !== false ? 'px' : ''}${props.prettyListTitleBorderRadiusEM === true ? 'em' : ''}${props.prettyListTitleBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomLeftRadius: `${props.prettyListHeadingBorderBottomLeftRadius}${props.prettyListTitleBorderRadiusPX !== false ? 'px' : ''}${props.prettyListTitleBorderRadiusEM === true ? 'em' : ''}${props.prettyListTitleBorderRadiusPerCent === true ? '%' : ''}`,
      backgroundColor: props.prettyListTitleBgColor !== undefined && `rgba(${props.prettyListTitleBgColor.r}, ${props.prettyListTitleBgColor.g}, ${props.prettyListTitleBgColor.b}, ${props.prettyListTitleBgColor.a})`,
      display: 'flex',
      alignItems: 'center'
    }
  }, props.prettyListStyle === 'fonticon' && !!props.prettyListTitleIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toms-pretty-list-style-heading-level-fonticon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      fontSize: props.prettyListTitleFontIconSize !== undefined ? `${props.prettyListTitleFontIconSize}${props.prettyListTitleIconPX !== false ? 'px' : ''}${props.prettyListTitleIconEM === true ? 'em' : ''}${props.prettyListTitleIconPerCent === true ? 'rem' : ''}` : '24px',
      color: props.prettyListTitleIconColor !== undefined && `rgba(${props.prettyListTitleIconColor.r}, ${props.prettyListTitleIconColor.g}, ${props.prettyListTitleIconColor.b}, ${props.prettyListTitleIconColor.a})`,
      marginTop: `${props.prettyListHeadingIconMarginTop}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginRight: `${props.prettyListHeadingIconMarginRight}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginBottom: `${props.prettyListHeadingIconMarginBottom}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginLeft: `${props.prettyListHeadingIconMarginLeft}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`
    },
    className: props.prettyListTitleIcon
  })), props.prettyListStyle === 'svgicon' && !!props.prettyListTitleSvgIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toms-pretty-list-style-heading-level-svgicon",
    style: {
      marginTop: `${props.prettyListHeadingIconMarginTop}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginRight: `${props.prettyListHeadingIconMarginRight}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginBottom: `${props.prettyListHeadingIconMarginBottom}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`,
      marginLeft: `${props.prettyListHeadingIconMarginLeft}${props.prettyListTitleIconMarginPX !== false ? 'px' : ''}${props.prettyListTitleIconMarginEM === true ? 'em' : ''}${props.prettyListTitleIconMarginPerCent === true ? '%' : ''}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: {
      width: props.prettyListTitleSvgIconSizeWidth !== undefined ? `${props.prettyListTitleSvgIconSizeWidth}${props.prettyListTitleSvgPX !== false ? 'px' : ''}${props.prettyListTitleSvgEM === true ? 'em' : ''}${props.prettyListTitleSvgPerCent === true ? '%' : ''}` : '24px',
      height: props.prettyListTitleSvgIconSizeHeight !== undefined ? `${props.prettyListTitleSvgIconSizeHeight}${props.prettyListTitleSvgPX !== false ? 'px' : ''}${props.prettyListTitleSvgEM === true ? 'em' : ''}${props.prettyListTitleSvgPerCent === true ? '%' : ''}` : '24px'
    },
    src: `data:image/svg+xml;base64,${props.prettyListTitleSvgIcon}`
  })), props.prettyListLinkTitleLock === true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "toms-pretty-list-style-heading-level-link",
    href: !!props.prettyListTitleLink ? props.prettyListTitleLink : '',
    target: props.prettyListLinkTitleNewTab === true ? '_blank' : '',
    style: {
      textDecorationStyle: 'wavy',
      textDecorationLine: 'underline',
      textUnderlineOffset: '0.6em',
      color: props.prettyListTitleFontColor !== undefined && `rgba(${props.prettyListTitleFontColor.r}, ${props.prettyListTitleFontColor.g}, ${props.prettyListTitleFontColor.b}, ${props.prettyListTitleFontColor.a})`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomSHeading, {
    className: "toms-pretty-list-style-heading-level",
    ref: x => x && x.style.setProperty('margin-bottom', 0, 'important')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toms-pretty-list-style-heading-level-content",
    style: {
      fontSize: props.prettyListTitleFontSize !== undefined ? `${props.prettyListTitleFontSize}${props.prettyListTitleFontPX !== false ? 'px' : ''}${props.prettyListTitleFontEM === true ? 'em' : ''}${props.prettyListTitleFontPerCent === true ? 'rem' : ''}` : '16px',
      color: props.prettyListTitleFontColor !== undefined && `rgba(${props.prettyListTitleFontColor.r}, ${props.prettyListTitleFontColor.g}, ${props.prettyListTitleFontColor.b}, ${props.prettyListTitleFontColor.a})`
    }
  }, props.prettyListTitle))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomSHeading, {
    className: "toms-pretty-list-style-heading-level",
    ref: x => x && x.style.setProperty('margin-bottom', 0, 'important')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "toms-pretty-list-style-heading-level-content",
    style: {
      fontSize: props.prettyListTitleFontSize !== undefined ? `${props.prettyListTitleFontSize}${props.prettyListTitleFontPX !== false ? 'px' : ''}${props.prettyListTitleFontEM === true ? 'em' : ''}${props.prettyListTitleFontPerCent === true ? 'rem' : ''}` : '16px',
      color: props.prettyListTitleFontColor !== undefined && `rgba(${props.prettyListTitleFontColor.r}, ${props.prettyListTitleFontColor.g}, ${props.prettyListTitleFontColor.b}, ${props.prettyListTitleFontColor.a})`
    }
  }, props.prettyListTitle))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomSUL, {
    className: "toms-pretty-list-style",
    style: {
      margin: `${props.prettyListContentMargin}${props.prettyListContentMarginPX !== false ? 'px' : ''}${props.prettyListContentMarginEM === true ? 'em' : ''}${props.prettyListContentMarginPerCent === true ? '%' : ''}`,
      marginTop: `${props.prettyListContentMarginTop}${props.prettyListContentMarginPX !== false ? 'px' : ''}${props.prettyListContentMarginEM === true ? 'em' : ''}${props.prettyListContentMarginPerCent === true ? '%' : ''}`,
      marginRight: `${props.prettyListContentMarginRight}${props.prettyListContentMarginPX !== false ? 'px' : ''}${props.prettyListContentMarginEM === true ? 'em' : ''}${props.prettyListContentMarginPerCent === true ? '%' : ''}`,
      marginBottom: `${props.prettyListContentMarginBottom}${props.prettyListContentMarginPX !== false ? 'px' : ''}${props.prettyListContentMarginEM === true ? 'em' : ''}${props.prettyListContentMarginPerCent === true ? '%' : ''}`,
      marginLeft: `${props.prettyListContentMarginLeft}${props.prettyListContentMarginPX !== false ? 'px' : ''}${props.prettyListContentMarginEM === true ? 'em' : ''}${props.prettyListContentMarginPerCent === true ? '%' : ''}`,
      padding: `${props.prettyListContentPadding}${props.prettyListContentPaddingPX !== false ? 'px' : ''}${props.prettyListContentPaddingEM === true ? 'em' : ''}${props.prettyListContentPaddingPerCent === true ? '%' : ''}`,
      paddingTop: `${props.prettyListContentPaddingTop}${props.prettyListContentPaddingPX !== false ? 'px' : ''}${props.prettyListContentPaddingEM === true ? 'em' : ''}${props.prettyListContentPaddingPerCent === true ? '%' : ''}`,
      paddingRight: `${props.prettyListContentPaddingRight}${props.prettyListContentPaddingPX !== false ? 'px' : ''}${props.prettyListContentPaddingEM === true ? 'em' : ''}${props.prettyListContentPaddingPerCent === true ? '%' : ''}`,
      paddingBottom: `${props.prettyListContentPaddingBottom}${props.prettyListContentPaddingPX !== false ? 'px' : ''}${props.prettyListContentPaddingEM === true ? 'em' : ''}${props.prettyListContentPaddingPerCent === true ? '%' : ''}`,
      paddingLeft: `${props.prettyListContentPaddingLeft}${props.prettyListContentPaddingPX !== false ? 'px' : ''}${props.prettyListContentPaddingEM === true ? 'em' : ''}${props.prettyListContentPaddingPerCent === true ? '%' : ''}`,
      borderRadius: `${props.prettyListContentBorderRadius}${props.prettyListContentBorderRadiusPX !== false ? 'px' : ''}${props.prettyListContentBorderRadiusEM === true ? 'em' : ''}${props.prettyListContentBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopRightRadius: `${props.prettyListContentBorderTopRightRadius}${props.prettyListContentBorderRadiusPX !== false ? 'px' : ''}${props.prettyListContentBorderRadiusEM === true ? 'em' : ''}${props.prettyListContentBorderRadiusPerCent === true ? '%' : ''}`,
      borderTopLeftRadius: `${props.prettyListContentBorderTopLeftRadius}${props.prettyListContentBorderRadiusPX !== false ? 'px' : ''}${props.prettyListContentBorderRadiusEM === true ? 'em' : ''}${props.prettyListContentBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomRightRadius: `${props.prettyListContentBorderBottomRightRadius}${props.prettyListContentBorderRadiusPX !== false ? 'px' : ''}${props.prettyListContentBorderRadiusEM === true ? 'em' : ''}${props.prettyListContentBorderRadiusPerCent === true ? '%' : ''}`,
      borderBottomLeftRadius: `${props.prettyListContentBorderBottomLeftRadius}${props.prettyListContentBorderRadiusPX !== false ? 'px' : ''}${props.prettyListContentBorderRadiusEM === true ? 'em' : ''}${props.prettyListContentBorderRadiusPerCent === true ? '%' : ''}`,
      backgroundColor: props.prettyListContentBgColor !== undefined && `rgba(${props.prettyListContentBgColor.r}, ${props.prettyListContentBgColor.g}, ${props.prettyListContentBgColor.b}, ${props.prettyListContentBgColor.a})`
    }
  }, props.prettyListContent !== undefined && props.prettyListContent.map(function (content, index) {
    const fontIcons = props.prettyListIcon;
    const svgIcons = props.prettyListSvgIcon;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomSLI, {
      className: "toms-pretty-list-style-li"
    }, props.prettyListStyle === 'fonticon' && fontIcons !== undefined && !!fontIcons[index] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "toms-pretty-list-style-li-fonticon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: props.prettyListContentFontIconSize !== undefined ? `${props.prettyListContentFontIconSize}${props.prettyListContentIconPX !== false ? 'px' : ''}${props.prettyListContentIconEM === true ? 'em' : ''}${props.prettyListContentIconPerCent === true ? 'rem' : ''}` : '16px',
        color: props.prettyListContentIconColor !== undefined && `rgba(${props.prettyListContentIconColor.r}, ${props.prettyListContentIconColor.g}, ${props.prettyListContentIconColor.b}, ${props.prettyListContentIconColor.a})`,
        marginTop: `${props.prettyListContentIconMarginTop}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginRight: `${props.prettyListContentIconMarginRight}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginBottom: `${props.prettyListContentIconMarginBottom}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginLeft: `${props.prettyListContentIconMarginLeft}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`
      },
      className: fontIcons[index]
    })), props.prettyListStyle === 'svgicon' && svgIcons !== undefined && !!svgIcons[index] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "toms-pretty-list-style-li-svgicon",
      style: {
        marginTop: `${props.prettyListContentIconMarginTop}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginRight: `${props.prettyListContentIconMarginRight}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginBottom: `${props.prettyListContentIconMarginBottom}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`,
        marginLeft: `${props.prettyListContentIconMarginLeft}${props.prettyListContentIconMarginPX !== false ? 'px' : ''}${props.prettyListContentIconMarginEM === true ? 'em' : ''}${props.prettyListContentIconMarginPerCent === true ? '%' : ''}`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      style: {
        width: props.prettyListContentSvgIconSizeWidth !== undefined ? `${props.prettyListContentSvgIconSizeWidth}${props.prettyListContentSvgPX !== false ? 'px' : ''}${props.prettyListContentSvgEM === true ? 'em' : ''}${props.prettyListContentSvgPerCent === true ? '%' : ''}` : '24px',
        height: props.prettyListContentSvgIconSizeHeight !== undefined ? `${props.prettyListContentSvgIconSizeHeight}${props.prettyListContentSvgPX !== false ? 'px' : ''}${props.prettyListContentSvgEM === true ? 'em' : ''}${props.prettyListContentSvgPerCent === true ? '%' : ''}` : '24px'
      },
      src: `data:image/svg+xml;base64,${svgIcons[index]}`
    })), props.prettyListLinkLock === true && !!content ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "toms-pretty-list-style-li-link",
      href: props.prettyListLink !== undefined && !!props.prettyListLink[index] ? props.prettyListLink[index] : '',
      target: props.prettyListLinkNewTab === true ? '_blank' : '',
      style: {
        textDecorationStyle: 'dashed',
        textDecorationLine: 'underline',
        textUnderlineOffset: '0.6em',
        color: props.prettyListContentFontColor !== undefined && `rgba(${props.prettyListContentFontColor.r}, ${props.prettyListContentFontColor.g}, ${props.prettyListContentFontColor.b}, ${props.prettyListContentFontColor.a})`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "toms-pretty-list-style-li-content",
      style: {
        fontSize: props.prettyListContentFontSize !== undefined ? `${props.prettyListContentFontSize}${props.prettyListContentFontPX !== false ? 'px' : ''}${props.prettyListContentFontEM === true ? 'em' : ''}${props.prettyListContentFontPerCent === true ? 'rem' : ''}` : '14px',
        color: props.prettyListContentFontColor !== undefined && `rgba(${props.prettyListContentFontColor.r}, ${props.prettyListContentFontColor.g}, ${props.prettyListContentFontColor.b}, ${props.prettyListContentFontColor.a})`
      }
    }, content)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "toms-pretty-list-style-li-content",
      style: {
        fontSize: props.prettyListContentFontSize !== undefined ? `${props.prettyListContentFontSize}${props.prettyListContentFontPX !== false ? 'px' : ''}${props.prettyListContentFontEM === true ? 'em' : ''}${props.prettyListContentFontPerCent === true ? 'rem' : ''}` : '14px',
        color: props.prettyListContentFontColor !== undefined && `rgba(${props.prettyListContentFontColor.r}, ${props.prettyListContentFontColor.g}, ${props.prettyListContentFontColor.b}, ${props.prettyListContentFontColor.a})`
      }
    }, content));
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "''"));
}
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map