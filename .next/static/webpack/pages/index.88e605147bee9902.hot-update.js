"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../info */ \"./info.js\");\n/* harmony import */ var _artifacts_contracts_Ballot_sol_Ballot_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Ballot.sol/Ballot.json */ \"./artifacts/contracts/Ballot.sol/Ballot.json\");\n/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/DataContext */ \"./contexts/DataContext.js\");\n/* harmony import */ var _components_CandidateList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CandidateList */ \"./components/CandidateList.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,_contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__.useData)(), vote = ref.vote, contract = ref.contract, signedContract = ref.signedContract, loading = ref.loading, candidates = ref.candidates;\n    if (loading && !(candidates === null || candidates === void 0 ? void 0 : candidates.length)) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\practice_projects\\\\crypto\\\\ballot-example\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 46\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"ballot\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Candidates\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\practice_projects\\\\crypto\\\\ballot-example\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"Click on the candidate you wish to vote for\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\practice_projects\\\\crypto\\\\ballot-example\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CandidateList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\dev\\\\practice_projects\\\\crypto\\\\ballot-example\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\practice_projects\\\\crypto\\\\ballot-example\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Q5V/FAHTyUXIR8u3WPRcRZjsc90=\", false, function() {\n    return [\n        _contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__.useData\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0g7QUFDRTtBQUNGO0FBQ2U7QUFDcEI7QUFDZ0I7QUFDMkI7QUFDakI7QUFDTTs7QUFFeEMsU0FBU1csSUFBSSxHQUFJOztJQUM5QixJQUFnRUYsR0FBUyxHQUFUQSw4REFBTyxFQUFFLEVBQWpFRyxJQUFJLEdBQW9ESCxHQUFTLENBQWpFRyxJQUFJLEVBQUVDLFFBQVEsR0FBMENKLEdBQVMsQ0FBM0RJLFFBQVEsRUFBRUMsY0FBYyxHQUEwQkwsR0FBUyxDQUFqREssY0FBYyxFQUFFQyxPQUFPLEdBQWlCTixHQUFTLENBQWpDTSxPQUFPLEVBQUVDLFVBQVUsR0FBS1AsR0FBUyxDQUF4Qk8sVUFBVTtJQUUzRCxJQUFJRCxPQUFPLElBQUksQ0FBQ0MsQ0FBQUEsVUFBVSxhQUFWQSxVQUFVLFdBQVEsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxVQUFVLENBQUVDLE1BQU0sR0FBRSxxQkFBTyw4REFBQ0MsSUFBRTtrQkFBQyxhQUFXOzs7OztZQUFLO0lBQy9ELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxRQUFROzswQkFDZCw4REFBQ0YsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDbkIsOERBQUNHLEdBQUM7Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsU0FBUyxFQUFFLFFBQVE7aUJBQUU7MEJBQUUsNkNBRW5DOzs7OztvQkFBSTswQkFDSiw4REFBQ2IsaUVBQWE7Ozs7b0JBQUc7Ozs7OztZQUNiLENBQ1A7Q0FDRjtHQWJ1QkMsSUFBSTs7UUFDc0NGLDBEQUFPOzs7QUFEakRFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3ZWIzIGZyb20gJ3dlYjMnXG5pbXBvcnQgeyBiYWxsb3RBZGRyZXNzIH0gZnJvbSAnLi4vaW5mbydcbmltcG9ydCBCYWxsb3QgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9CYWxsb3Quc29sL0JhbGxvdC5qc29uJ1xuaW1wb3J0IHsgdXNlRGF0YSB9IGZyb20gJy4uL2NvbnRleHRzL0RhdGFDb250ZXh0J1xuaW1wb3J0IENhbmRpZGF0ZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYW5kaWRhdGVMaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgeyB2b3RlLCBjb250cmFjdCwgc2lnbmVkQ29udHJhY3QsIGxvYWRpbmcsIGNhbmRpZGF0ZXMgfSA9IHVzZURhdGEoKVxuXG4gIGlmIChsb2FkaW5nICYmICFjYW5kaWRhdGVzPy5sZW5ndGgpIHJldHVybiA8aDE+TG9hZGluZyAuLi48L2gxPlxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2JhbGxvdCc+XG4gICAgICA8aDE+Q2FuZGlkYXRlczwvaDE+XG4gICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICBDbGljayBvbiB0aGUgY2FuZGlkYXRlIHlvdSB3aXNoIHRvIHZvdGUgZm9yXG4gICAgICA8L3A+XG4gICAgICA8Q2FuZGlkYXRlTGlzdCAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiSGVhZCIsIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwid2ViMyIsImJhbGxvdEFkZHJlc3MiLCJCYWxsb3QiLCJ1c2VEYXRhIiwiQ2FuZGlkYXRlTGlzdCIsIkhvbWUiLCJ2b3RlIiwiY29udHJhY3QiLCJzaWduZWRDb250cmFjdCIsImxvYWRpbmciLCJjYW5kaWRhdGVzIiwibGVuZ3RoIiwiaDEiLCJkaXYiLCJpZCIsInAiLCJzdHlsZSIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});