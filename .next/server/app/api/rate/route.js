"use strict";
(() => {
var exports = {};
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 80657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/rate/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST),
  main: () => (main)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./prisma/index.ts
var prisma = __webpack_require__(13370);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/rate/route.ts


async function main() {
    try {
        await prisma/* default */.Z.$connect();
    } catch (err) {
        return Error("Database connect unsuccessful");
    }
}
const GET = async (req, res)=>{
    try {
        console.time("start");
        await main();
        const posts = await prisma/* default */.Z.review.findMany();
        console.timeEnd("start");
        return next_response/* default */.Z.json({
            message: "Success",
            posts
        }, {
            status: 200
        });
    } catch (err) {
        return next_response/* default */.Z.json({
            message: "Error",
            err
        }, {
            status: 500
        });
    } finally{
        await prisma/* default */.Z.$disconnect();
    }
};
const POST = async (req, res)=>{
    try {
        const { name, description, stars } = await req.json();
        await main();
        const post = await prisma/* default */.Z.review.createMany({
            data: {
                name,
                description,
                stars
            }
        });
        return next_response/* default */.Z.json({
            message: "Success",
            post
        }, {
            status: 201
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            message: "Error",
            error
        }, {
            status: 500
        });
    } finally{
        await prisma/* default */.Z.$disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Frate%2Froute&name=app%2Fapi%2Frate%2Froute&pagePath=private-next-app-dir%2Fapi%2Frate%2Froute.ts&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5CForeverLiving%5Cweb%5Capp&appPaths=%2Fapi%2Frate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/rate/route","pathname":"/api/rate","filename":"route","bundlePath":"app/api/rate/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\ForeverLiving\\web\\app\\api\\rate\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/rate/route"

    

/***/ }),

/***/ 32413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(72917); //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 13370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
//prisma/index.ts

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981,917], () => (__webpack_exec__(80657)));
module.exports = __webpack_exports__;

})();