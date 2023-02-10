(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/UI/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "my-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center text-sm text-slate-500",
                children: [
                    "Copyright \xa9 ",
                    new Date().getFullYear(),
                    " Jelmi. Todos los derechos reservados."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center text-xs text-slate-500 mt-1",
                children: "Hecho desde \uD83C\uDDE8\uD83C\uDDF4 para potenciar \uD83D\uDE80"
            })
        ]
    });
};
/* harmony default export */ const UI_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a8043f48.png","height":413,"width":781,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQklEQVR42gXAIQ5AUAAA0OcmqhsYXdTEv/lRsgmSxDTBDXTZ5h/vj1eH1QkKZoPKZVErRVrJ53D7bXYeo0nQa0QhA3CeDAsB4c9XAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./components/Container.jsx
var Container = __webpack_require__(6821);
;// CONCATENATED MODULE: external "@heroicons/react/20/solid"
const solid_namespaceObject = require("@heroicons/react/20/solid");
// EXTERNAL MODULE: ./components/UI/ButtonLink.jsx
var ButtonLink = __webpack_require__(3203);
;// CONCATENATED MODULE: ./components/UI/NavBar.jsx








const menuitems = [
    {
        //   title: "Vacantes",
        //   path: "#",
        //   // children: [
        //   //   { title: "Action", path: "#" },
        //   //   { title: "Another action", path: "#" },
        //   //   { title: "Dropdown Submenu", path: "#" },
        //   // ],
        // },
        // {
        //   title: "Construir",
        //   path: "/pricing",
        // },
        // {
        title: "Cont\xe1ctanos",
        path: "/contact"
    }
];
const NavBar = ()=>{
    const [toggleMobile, setToggleMobile] = (0,external_react_.useState)(false);
    const handleToggleMobile = ()=>{
        setToggleMobile(!toggleMobile);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "flex flex-col lg:flex-row justify-between items-center my-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex w-full lg:w-auto items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "text-lg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                alt: "Jelmi Recruitment | Logo | Top talent",
                                width: 100,
                                height: 42,
                                sizes: "(max-width: 200px) 100vw, 80px"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "block lg:hidden",
                            onClick: handleToggleMobile,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.Bars3Icon, {
                                className: "w-8 h-8 text-gray-800"
                            })
                        })
                    ]
                }),
                toggleMobile && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:flex flex-grow items-center" + (toggleMobile ? " flex" : " hidden"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col lg:flex-row lg:gap-3",
                        children: menuitems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    item.children && /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                                        title: item.title,
                                        children: item.children,
                                        lastItem: index === menuitems.length - 1
                                    }),
                                    !item.children && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                                            href: item.path,
                                            children: item.title
                                        })
                                    }, item.title)
                                ]
                            }))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden lg:flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xbfNecesitas contratar?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                                href: "/contact",
                                children: "Cont\xe1ctanos"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const UI_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/Layout/index.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UI_NavBar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(UI_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.jsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,750], () => (__webpack_exec__(6406)));
module.exports = __webpack_exports__;

})();