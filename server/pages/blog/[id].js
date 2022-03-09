"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(818);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(961);
/* harmony import */ var _lib_getPostsData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const components = {
    h1: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            style: {
                fontSize: 'calc(1rem + 1.5vw)',
                color: 'black',
                margin: '1vh 0 1vh 0'
            },
            ...props
        })
    ,
    p: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                fontSize: 'calc(1rem + 0.1vw)',
                color: '#000000e6',
                margin: '0vh 0 1vh 0'
            },
            ...props
        })
};
function Blog({ postMetadata , postContent  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "blog-content",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {
            ...postContent,
            components: components
        }, postMetadata.title)
    }));
};
async function getStaticPaths() {
    const paths = (0,_lib_getPostsData_js__WEBPACK_IMPORTED_MODULE_3__/* .getAllPostsPath */ .hC)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_lib_getPostsData_js__WEBPACK_IMPORTED_MODULE_3__/* .getPostData */ .AU)(params.id);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(postData.content);
    return {
        props: {
            postMetadata: postData.metadata,
            postContent: mdxSource,
            id: params.id
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [661], () => (__webpack_exec__(502)));
module.exports = __webpack_exports__;

})();