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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_performance_performance_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_performance_performance_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_performance_performance_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchResults */ \"./src/components/SearchResults.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), search = ref[0], setSearch = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), results = ref1[0], setResults = ref1[1];\n    function handleSearch(event) {\n        return _handleSearch.apply(this, arguments);\n    }\n    function _handleSearch() {\n        _handleSearch = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_performance_performance_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return C_Users_ADMIN_Desktop_rocketseat_performance_performance_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (search.trim()) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return fetch(\"http://localhost:3333/products?q=\".concat(search));\n                    case 5:\n                        response = _ctx.sent;\n                        _ctx.next = 8;\n                        return response.json();\n                    case 8:\n                        data = _ctx.sent;\n                        setResults(data);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSearch.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: search,\n                        onChange: function(e) {\n                            return setSearch(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_3__.SearchResults, {\n                results: results\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\performance\\\\performance-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 8\n    }, this);\n}; /**\r\n *Algoritmo React de Renderização\r\n\r\n 1.Criar uma nova versão do componente\r\n 2.Comparar com versão anterior\r\n */ \n_s(Home, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZ0I7O0FBRTdDLFNBQVNFLElBQUksR0FBRTs7SUFFMUIsSUFBMEJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMMUMsTUFLaUIsR0FBYUEsR0FBWSxHQUF6QixFQUxqQixTQUsyQixHQUFHQSxHQUFZLEdBQWY7SUFDdkIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOOUMsT0FNa0IsR0FBZ0JBLElBQVksR0FBNUIsRUFObEIsVUFNOEIsR0FBSUEsSUFBWSxHQUFoQjthQUVYTyxZQUFZLENBQUNDLEtBQWdCO2VBQTdCRCxhQUFZOzthQUFaQSxhQUFZO1FBQVpBLGFBQVksR0FBM0IsMk1BQTRCQyxLQUFnQixFQUFDO2dCQU1uQ0MsUUFBUSxFQUNSQyxJQUFJOzs7O3dCQU5WRixLQUFLLENBQUNHLGNBQWMsRUFBRSxDQUFDOzRCQUVuQlIsTUFBTSxDQUFDUyxJQUFJLEVBQUU7Ozs7Ozs7K0JBR01DLEtBQUssQ0FBQyxtQ0FBa0MsQ0FBUyxPQUFQVixNQUFNLENBQUUsQ0FBQzs7d0JBQXBFTSxRQUFRLFlBQTREOzsrQkFDdkRBLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFOzt3QkFBNUJKLElBQUksWUFBd0I7d0JBQ2xDSixVQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDcEI7ZUFUY0gsYUFBWTs7SUFXM0IscUJBQ0csOERBQUNRLEtBQUc7OzBCQUNDLDhEQUFDQyxJQUFFOzBCQUFDLFFBQU07Ozs7O29CQUFLOzBCQUNmLDhEQUFDQyxNQUFJO2dCQUFDQyxRQUFRLEVBQUVYLFlBQVk7O2tDQUN4Qiw4REFBQ1ksT0FBSzt3QkFDRkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLEtBQUssRUFBRWxCLE1BQU07d0JBQ2JtQixRQUFRLEVBQUVDLFNBQUFBLENBQUM7bUNBQUduQixTQUFTLENBQUNtQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFBOzs7Ozs0QkFBRztrQ0FDOUMsOERBQUNJLFFBQU07d0JBQUNMLElBQUksRUFBQyxRQUFRO2tDQUFDLFFBRXRCOzs7Ozs0QkFBUzs7Ozs7O29CQUNOOzBCQUNQLDhEQUFDbkIsb0VBQWE7Z0JBQUNJLE9BQU8sRUFBRUEsT0FBTzs7Ozs7b0JBQUc7Ozs7OztZQUNqQyxDQUNSO0NBQ0osRUFFRDtHQWpDd0JILElBQUk7QUFBSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGV2ZW50OiBGb3JtRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKCFzZWFyY2gudHJpbSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMzMzMvcHJvZHVjdHM/cT0ke3NlYXJjaH1gKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzdWx0cyhkYXRhKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybihcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5TZWFyY2g8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnVzY2FyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8U2VhcmNoUmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfS8+XHJcbiAgICAgICA8L2Rpdj4gXHJcbiAgICApXHJcbn0gXHJcblxyXG4vKipcclxuICpBbGdvcml0bW8gUmVhY3QgZGUgUmVuZGVyaXphw6fDo29cclxuXHJcbiAxLkNyaWFyIHVtYSBub3ZhIHZlcnPDo28gZG8gY29tcG9uZW50ZVxyXG4gMi5Db21wYXJhciBjb20gdmVyc8OjbyBhbnRlcmlvclxyXG4gKi8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZWFyY2hSZXN1bHRzIiwiSG9tZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJmZXRjaCIsImpzb24iLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});