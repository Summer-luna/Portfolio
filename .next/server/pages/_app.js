(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 846:
/***/ ((module) => {

// Exports
module.exports = {
	"Li": "header_Li__5fZkD",
	"FluidWidth": "header_FluidWidth__e2QpC",
	"WiderScreenLi": "header_WiderScreenLi__mMyDP"
};


/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./public/styles/globals.css
var globals = __webpack_require__(940);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./public/styles/header.module.css
var header_module = __webpack_require__(846);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/icons/logo.tsx


function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "35",
        height: "35",
        fill: "currentColor",
        color: "#64ffda",
        className: "bi bi-moon-stars",
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(819);
// EXTERNAL MODULE: ./public/data/data.tsx
var data = __webpack_require__(371);
;// CONCATENATED MODULE: ./components/layout/header.tsx






const Header = ()=>{
    const [menuOpen, setMenuOpen] = (0,external_react_.useState)(false);
    const toggleMenu = ()=>setMenuOpen((prevState)=>!prevState);
    // dynamic styles
    const menuToggleStyle = menuOpen ? "before:w-[100%] before:top-0 before:opacity-0 after:w-full after: bottom-0 after:-rotate-90 rotate-[225deg] delay-100 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]" : "before:w-[120%] before:-top-2.5 before:opacity-100 after:w-10/12 after:-bottom-2.5 after:rotate-0 rotate-0 delay-0 ease-[cubic-bezier(0.55, 0.055, 0.675, 0.19)]";
    const asideBarStyle = menuOpen ? "translate-x-0" : "translate-x-full";
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "w-full h-28 fixed top-0 pointer-events-auto transition-all px-6 md:px-10 lg:px-12.5 font-normal antialiased z-30 bg-nav",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "relative w-full font-mono text-lightest-slate flex justify-between mt-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "w-11 h-11",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden md:flex w-full justify-end gap-3 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                            className: "p-0 m-0 flex gap-3",
                            children: data/* data */.a && data/* data.navLinks.map */.a.navLinks.map(({ name , url  }, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: `${(header_module_default()).WiderScreenLi} py-3 px-3 opacity-0 before:mr-1 text-sm animate-fadeDown`,
                                    style: {
                                        animationDelay: `${index + 1}00ms`
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-center hover:text-green",
                                        href: url,
                                        children: name
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* OutlinedBtn */.Z, {
                            size: "Small",
                            link: "/Resume2.pdf",
                            children: "Resume"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block md:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "relative z-10 bg-transparent text-inherit",
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "inline-block relative w-8 h-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `absolute top-1/2 right-0 w-8 h-0.5 rounded bg-green transition-all 
                before:content-[''] before:block before:bg-green before:h-0.5 before:absolute before:right-0 before:left-auto before:ease-linear before: duration-150 before:transition-all
                after:content-[''] after:block after:bg-green after:h-0.5 after:absolute after:right-0 after:left-auto after:ease-linear after: duration-150 after:transition-all
                ${menuToggleStyle}
                `
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                                className: `flex justify-center items-center fixed top-0 right-0 bottom-0 h-screen py-12 px-2.5 bg-light-nav ${(header_module_default()).FluidWidth} shadow-aside z-0 transition-transform ${asideBarStyle}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "w-full flex flex-col text-center text-fluid",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                            className: "w-full",
                                            children: data/* data */.a && data/* data.navLinks.map */.a.navLinks.map(({ name , url  }, index)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `relative mt-0 mx-auto mb-5 ${(header_module_default()).Li} animate-fadeDown`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "pt-1 px-5 pb-5 w-full hover:text-green cursor-pointer",
                                                        href: url,
                                                        children: name
                                                    })
                                                }, index);
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* OutlinedBtn */.Z, {
                                            size: "Big",
                                            link: "/Resume2.pdf",
                                            children: "Resume"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/icons/github.tsx
var github = __webpack_require__(486);
;// CONCATENATED MODULE: ./components/icons/linkedin.tsx


function IconLinkedIn() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-linkedin w-5 h-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "LinkedIn"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "2",
                y: "9",
                width: "4",
                height: "12"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "4",
                cy: "4",
                r: "2"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/icons/external.tsx
var external = __webpack_require__(74);
;// CONCATENATED MODULE: ./components/aside/icon.tsx




const Icon = (props)=>{
    switch(props.name){
        case "Github":
            return /*#__PURE__*/ jsx_runtime_.jsx(github/* IconGithub */.U, {});
        case "LinkedIn":
            return /*#__PURE__*/ jsx_runtime_.jsx(IconLinkedIn, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(external/* IconExternal */.A, {});
    }
};

;// CONCATENATED MODULE: ./components/aside/socail.tsx



const Social = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex flex-col items-center after:content[''] after:w-[1px] after:h-24 after:bg-light-slate after:block after:mx-auto",
        children: data/* data */.a && data/* data */.a?.social.map(({ name , url  }, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "last-of-type:mb-5 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "p-2 block hover:-translate-y-1 focus:text-green w-full hover:text-green focus:text-green transition-transform",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        name: name
                    })
                })
            }, index);
        })
    });
};

;// CONCATENATED MODULE: ./components/aside/email.tsx


const Email = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col items-center relative font-mono text-base tracking-wide after:mt-5 after:content[''] after:w-[1px] after:h-24 after:bg-light-slate after:block after:mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: `mailto:${data/* data.email */.a.email}`,
            className: "mt-5 p-2 vertical-text text-xs tracking-widest hover:-translate-y-1 transition-transform hover:text-green",
            children: data/* data.email */.a.email
        })
    });
};

;// CONCATENATED MODULE: ./components/aside/side.tsx



const Side = (props)=>{
    const sideStyle = props.orientation == "left" ? "left-10 right-auto" : "right-10 left-auto";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `fixed hidden w-10 bottom-0 left-10 z-10 md:block opacity-0 ${sideStyle} animate-fadeDown`,
        style: {
            animationDelay: `2000ms`
        },
        children: props.orientation === "left" ? /*#__PURE__*/ jsx_runtime_.jsx(Social, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Email, {})
    });
};

;// CONCATENATED MODULE: ./components/layout/footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center gap-4 pb-10 md:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-4 mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/Summer-luna",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(github/* IconGithub */.U, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/xinyue-chen-089700179/",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconLinkedIn, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external/* IconExternal */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "font-mono text-sm",
                children: "Built by Xinyue Chen & Designed by Brittany Chiang "
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout/layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "root",
        className: "grid-cols-1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 min-h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Side, {
                    orientation: "left"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Side, {
                    orientation: "right"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 940:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [124], () => (__webpack_exec__(332)));
module.exports = __webpack_exports__;

})();