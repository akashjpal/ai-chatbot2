"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/Signup/page",{

/***/ "(app-pages-browser)/./src/components/Signup.tsx":
/*!***********************************!*\
  !*** ./src/components/Signup.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/useAuth */ \"(app-pages-browser)/./src/context/useAuth.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignupComponent() {\n    _s();\n    const { authStatus, setAuthStatus } = (0,_context_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:3000\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    async function onSignup() {\n        try {\n            setLoading(true);\n            setDisable(true);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/users/signup\", user);\n            console.log(response);\n            setAuthStatus(true);\n            router.replace(\"/login\");\n        } catch (err) {\n            console.log(\"Error re bhava !!\");\n            console.log(err);\n        } finally{\n            setLoading(false);\n            setUser({\n                username: \"\",\n                email: \"\",\n                password: \"\"\n            });\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {\n            setDisable(false);\n        }\n    }, [\n        user\n    ]);\n    // useEffect(()=>{\n    //     async function checkUser(){\n    //         try{\n    //             console.log(\"Sun main idhar hu\");\n    //             const response = await axios.post('/api/users/Checking',user, { timeout: 10000 });\n    //             console.log(response);\n    //             console.log(\"Sun respinse aaya\");\n    //             if(response.data.status === 400){\n    //                 setIsValidate(false);\n    //             }else{\n    //                 setIsValidate(true);\n    //             }\n    //         }catch(err:any){\n    //             console.log(err);\n    //         }\n    //     }\n    //     checkUser();\n    // },[user])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-grid gap-4 d-md-block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"position-absolute top-50 start-50 translate-middle col-md-6 col-sm-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-floating mb-3 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"username\",\n                            className: \"form-control\",\n                            value: user.username,\n                            onChange: (e)=>{\n                                setUser({\n                                    ...user,\n                                    username: e.target.value\n                                });\n                            },\n                            id: \"floatingUsername\",\n                            placeholder: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingUsername\",\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-floating mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            name: \"email\",\n                            className: \"form-control\",\n                            value: user.email,\n                            onChange: (e)=>{\n                                setUser({\n                                    ...user,\n                                    email: e.target.value\n                                });\n                            },\n                            id: \"floatingInput\",\n                            placeholder: \"name@example.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingInput\",\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-floating mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            name: \"password\",\n                            className: \"form-control\",\n                            value: user.password,\n                            onChange: (e)=>{\n                                setUser({\n                                    ...user,\n                                    password: e.target.value\n                                });\n                            },\n                            id: \"floatingPassword\",\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingPassword\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary col-sm-3\",\n                        disabled: disable,\n                        onClick: onSignup,\n                        children: loading ? \"Signing up...\" : \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-center m-3\",\n                    children: [\n                        \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/Login\",\n                            className: \"mx-2\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\JILEDAR PAL\\\\Desktop\\\\AI_chatbot\\\\AI-chatbot_1\\\\src\\\\components\\\\Signup.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s(SignupComponent, \"s6HS+UB0IAt6DTJzlW2uBQZto9Y=\", false, function() {\n    return [\n        _context_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZ251cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUNwQjtBQUNrQjtBQUNmO0FBQ1c7QUFFeEMsU0FBU007O0lBQ0wsTUFBTSxFQUFDQyxVQUFVLEVBQUNDLGFBQWEsRUFBQyxHQUFHSCw0REFBT0E7SUFDMUMsTUFBTUksVUFBVUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSTtJQUNuRCxNQUFNQyxTQUFTViwwREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxNQUFLQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO1FBQzVCZ0IsVUFBUztRQUNUQyxPQUFNO1FBQ05DLFVBQVM7SUFDYjtJQUVBLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDcUIsU0FBUUMsV0FBVyxHQUFHdEIsK0NBQVFBLENBQUM7SUFFdEMsZUFBZXVCO1FBQ1gsSUFBRztZQUNDSCxXQUFXO1lBQ1hFLFdBQVc7WUFDWCxNQUFNRSxXQUFXLE1BQU10Qiw2Q0FBS0EsQ0FBQ3VCLElBQUksQ0FBQyxxQkFBb0JYO1lBQ3REWSxRQUFRQyxHQUFHLENBQUNIO1lBQ1poQixjQUFjO1lBQ2RLLE9BQU9lLE9BQU8sQ0FBQztRQUNuQixFQUFDLE9BQU1DLEtBQVE7WUFDWEgsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0U7UUFDaEIsU0FBUTtZQUNKVCxXQUFXO1lBQ1hMLFFBQVE7Z0JBQ0pDLFVBQVM7Z0JBQ1RDLE9BQU07Z0JBQ05DLFVBQVM7WUFDYjtRQUNKO0lBQ0o7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBR2EsS0FBS0csS0FBSyxDQUFDYSxNQUFNLEdBQUcsS0FBS2hCLEtBQUtJLFFBQVEsQ0FBQ1ksTUFBTSxHQUFHLEtBQUtoQixLQUFLRSxRQUFRLENBQUNjLE1BQU0sR0FBRSxHQUFFO1lBQzVFUixXQUFXO1FBQ2Y7SUFDSixHQUFFO1FBQUNSO0tBQUs7SUFFUixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQsaUdBQWlHO0lBQ2pHLHFDQUFxQztJQUNyQyxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFlBQVk7SUFFWixxQkFDSSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBYzs7Ozs7OzhCQUc1Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBTUMsTUFBSzs0QkFBT0MsTUFBSzs0QkFBV0osV0FBVTs0QkFBZUssT0FBT3ZCLEtBQUtFLFFBQVE7NEJBQUVzQixVQUFVLENBQUNDO2dDQUFLeEIsUUFBUTtvQ0FBQyxHQUFHRCxJQUFJO29DQUFDRSxVQUFTdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFBOzRCQUFFOzRCQUFHSSxJQUFHOzRCQUFtQkMsYUFBWTs7Ozs7O3NDQUNqTCw4REFBQ0M7NEJBQU1DLFNBQVE7c0NBQW1COzs7Ozs7Ozs7Ozs7OEJBRWxDLDhEQUFDYjtvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNFOzRCQUFNQyxNQUFLOzRCQUFRQyxNQUFLOzRCQUFRSixXQUFVOzRCQUFlSyxPQUFPdkIsS0FBS0csS0FBSzs0QkFBRXFCLFVBQVUsQ0FBQ0M7Z0NBQUt4QixRQUFRO29DQUFDLEdBQUdELElBQUk7b0NBQUNHLE9BQU1zQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUM7NEJBQUU7NEJBQUtJLElBQUc7NEJBQWdCQyxhQUFZOzs7Ozs7c0NBQ3pLLDhEQUFDQzs0QkFBTUMsU0FBUTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs4QkFFL0IsOERBQUNiO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQU1DLE1BQUs7NEJBQVdDLE1BQUs7NEJBQVdKLFdBQVU7NEJBQWVLLE9BQU92QixLQUFLSSxRQUFROzRCQUFFb0IsVUFBVSxDQUFDQztnQ0FBS3hCLFFBQVE7b0NBQUMsR0FBR0QsSUFBSTtvQ0FBQ0ksVUFBU3FCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBQzs0QkFBRTs0QkFBS0ksSUFBRzs0QkFBbUJDLGFBQVk7Ozs7OztzQ0FDeEwsOERBQUNDOzRCQUFNQyxTQUFRO3NDQUFtQjs7Ozs7Ozs7Ozs7OzhCQUVsQyw4REFBQ2I7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNhO3dCQUFPYixXQUFVO3dCQUEyQmMsVUFBVXpCO3dCQUFTMEIsU0FBU3hCO2tDQUN4RUosVUFBVSxrQkFBa0I7Ozs7Ozs7Ozs7OzhCQUdqQyw4REFBQ1k7b0JBQUlDLFdBQVU7O3dCQUFvQztzQ0FFL0MsOERBQUM1QixrREFBSUE7NEJBQUU0QyxNQUFLOzRCQUFTaEIsV0FBVTtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEQ7R0EzRlMxQjs7UUFDOEJELHdEQUFPQTtRQUUzQkYsc0RBQVNBOzs7S0FIbkJHO0FBNkZULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZ251cC50c3g/Yzk0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJ0AvY29udGV4dC91c2VBdXRoJztcclxuXHJcbmZ1bmN0aW9uIFNpZ251cENvbXBvbmVudCgpe1xyXG4gICAgY29uc3Qge2F1dGhTdGF0dXMsc2V0QXV0aFN0YXR1c30gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Rpc2FibGUsc2V0RGlzYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblNpZ251cCgpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0RGlzYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzL3NpZ251cCcsdXNlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2V0QXV0aFN0YXR1cyh0cnVlKTtcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgIH1jYXRjaChlcnI6YW55KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciByZSBiaGF2YSAhIVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1maW5hbGx5e1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuZW1haWwubGVuZ3RoID4gMCAmJiB1c2VyLnBhc3N3b3JkLmxlbmd0aCA+IDAgJiYgdXNlci51c2VybmFtZS5sZW5ndGggPjApe1xyXG4gICAgICAgICAgICBzZXREaXNhYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt1c2VyXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VyKCl7XHJcbiAgICAvLyAgICAgICAgIHRyeXtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VuIG1haW4gaWRoYXIgaHVcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvQ2hlY2tpbmcnLHVzZXIsIHsgdGltZW91dDogMTAwMDAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1biByZXNwaW5zZSBhYXlhXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IDQwMCl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2V0SXNWYWxpZGF0ZShmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRJc1ZhbGlkYXRlKHRydWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9Y2F0Y2goZXJyOmFueSl7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNoZWNrVXNlcigpO1xyXG4gICAgLy8gfSxbdXNlcl0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWdyaWQgZ2FwLTQgZC1tZC1ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc2l0aW9uLWFic29sdXRlIHRvcC01MCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlIGNvbC1tZC02IGNvbC1zbS02Jz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItMyBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3VzZXIudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSk9PntzZXRVc2VyKHsuLi51c2VyLHVzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9fSBpZD1cImZsb2F0aW5nVXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsb2F0aW5nVXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3VzZXIuZW1haWx9IG9uQ2hhbmdlPXsoZSk9PntzZXRVc2VyKHsuLi51c2VyLGVtYWlsOmUudGFyZ2V0LnZhbHVlIH0pfX0gICBpZD1cImZsb2F0aW5nSW5wdXRcIiBwbGFjZWhvbGRlcj1cIm5hbWVAZXhhbXBsZS5jb21cIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmxvYXRpbmdJbnB1dFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT57c2V0VXNlcih7Li4udXNlcixwYXNzd29yZDplLnRhcmdldC52YWx1ZSB9KX19ICAgaWQ9XCJmbG9hdGluZ1Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbG9hdGluZ1Bhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGNvbC1zbS0zXCIgZGlzYWJsZWQ9e2Rpc2FibGV9IG9uQ2xpY2s9e29uU2lnbnVwfT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJTaWduaW5nIHVwLi4uXCIgOiBcIlNpZ251cFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0zJz5cclxuICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xyXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9Jy9Mb2dpbicgY2xhc3NOYW1lPSdteC0yJz5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiTGluayIsInVzZUF1dGgiLCJTaWdudXBDb21wb25lbnQiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkaXNhYmxlIiwic2V0RGlzYWJsZSIsIm9uU2lnbnVwIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJlcnIiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Signup.tsx\n"));

/***/ })

});