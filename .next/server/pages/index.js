"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/sections/hero.tsx


const items = [
    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-green hero-fluid-text font-mono ml-[2px] mb-5 md:ml-1 md:mb-8",
        children: "Hi, my name is"
    }, "1"),
    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "big-heading font-semibold text-lightest-slate mb-2",
        children: "Xinyuen Chen"
    }, "2"),
    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
        className: "big-heading font-semibold",
        children: "I love building things for the web."
    }, "3"),
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: "mt-5 max-w-xl leading-normal font-sans text-fx-xl md:text-fz-xxl",
        children: [
            "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently I'm a graduate student at ",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.bu.edu/",
                className: "text-green",
                children: "Boston University"
            }),
            ", major in Computer Science."
        ]
    }, "4")
];
const Hero = ()=>{
    const [isMounted, setIsMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setIsMounted(true);
        }, 1000);
        return ()=>clearTimeout(timeout);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "hero",
        className: "flex flex-col justify-center items-start h-full min-h-[85vh] pb-32 leading-none md:min-h-[91vh] md:h-auto",
        children: items.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `opacity-0 relative top-2 ${isMounted && "opacity-100 -top-2"} transition-all ease-linear duration-300`,
                style: {
                    transitionDelay: `${index + 1}00ms`
                },
                children: item
            });
        })
    });
};

;// CONCATENATED MODULE: ./public/images/XinyueChen.png
/* harmony default export */ const XinyueChen = ({"src":"/_next/static/media/XinyueChen.3a246cb5.png","height":2049,"width":2049,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AM7a6NXg7cDK1o2LjouTnNPe6tPf7NDc6QDY4+/S3uqdkIvivq1hPCKUn6ng6/fU4O0A4er109/ptJ+X372utJGEamlt3+r03OfyAOfv+dTf6r6lm9ismryVh0lBQdfh6+Lr9gDp8frj7faEgH/Enoyaem02OkTV3uft9v8A7fT9u8LKa2lr17Wf0b+4QEpYiY+Uz9jhALO6wQAAAI6PlvHn5cPEywAAAAAAAAAAAACTmJ4AAAB2eoD3/P+RlZwAAAAvMTUZGx3CaHoPqYh0SgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ui/myPhoto.tsx



const MyPhoto = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: XinyueChen,
        alt: "picture of me",
        placeholder: "blur",
        className: "max-w-full z-10"
    });
};

;// CONCATENATED MODULE: ./components/sections/about.tsx


const About = ()=>{
    const skills = {
        proficient: [
            "HTML/CSS",
            "JavaScript",
            "Java",
            "Node.js",
            "Express",
            "React",
            "SQL",
            "Git"
        ],
        familiarized: [
            "PHP",
            "Python",
            "TypeScript",
            "Angular.js",
            "MongoDB",
            "Firebase",
            "Next.js",
            "Wordpress",
            "Bootstrap",
            "Tailwindcss"
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "py-10 numbered-heading",
        id: "About",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-lightest-slate font-semibold headingText flex items-center",
                children: "About Me"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid md:grid-cols-5 gap-20 pt-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-span-3 text-fx-xl md:text-fz-xxl font-sans leading-normal",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-3",
                                children: "Hello! My name is Xinyue. I'm a graduate student of Boston University, majored in computer science with a specialization in software development. I've done a lot of full-stack and front-end projects. I've been building things since my university in 2018. I really enjoin creating things that on the internet."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-3",
                                children: [
                                    "Here are a few technologies that I've ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "proficient"
                                    }),
                                    " with:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "mb-3 grid grid-cols-2 text-sm md:text-base font-mono",
                                children: skills.proficient.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "before:content-['▹'] before:text-green before:text-xs before:block before:relative before:top-0.5 flex gap-2 mb-2 tracking-wide",
                                        children: skill
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-3",
                                children: [
                                    "Here are a few technologies that I've ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "familiarized"
                                    }),
                                    " with:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "mb-3 grid grid-cols-2 text-sm md:text-base font-mono ",
                                children: skills.familiarized.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "before:content-['▹'] before:text-green before:text-xs before:block before:relative before:top-0.5 flex gap-2 mb-2 tracking-wide",
                                        children: skill
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-span-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative left-16 md:left-0 max-w-[300px] after:content-[''] after:max-w-[300px] after:w-full after:h-full after:border-green after:border-4 after:absolute after:left-5 after:top-5 after:rounded after:-z-10 hover:after:translate-x-2 hover:after:translate-y-2 after:transition after:duration-200 after:ease-in-out after:delay-100",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-lg overflow-hidden max-w-[300px] ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MyPhoto, {})
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/icons/github.tsx
var icons_github = __webpack_require__(486);
// EXTERNAL MODULE: ./components/icons/external.tsx
var icons_external = __webpack_require__(74);
;// CONCATENATED MODULE: ./components/sections/projectCard.tsx




const ProjectCard = (props)=>{
    const { date , title , cover , github , external , tech , folderName , content  } = props.data;
    const imagePath = `/content/projects/${folderName}/${cover}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid relative lg:grid-cols-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:col-start-1 lg:col-end-9",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: external,
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: imagePath,
                            alt: title,
                            width: 640,
                            height: 450
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-12 md:p-24 bg-light-nav md:w-full lg:bg-transparent bg-opacity-95 absolute grid grid-rows-12 justify-center items-center lg:col-start-7 lg:col-end-13 lg:py-10 lg:px-0 gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lg:text-end font-mono text-green text-sm row-start-1 row-end-2",
                        children: "Side Project"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "lg:text-end font-sans text-2xl font-semibold text-lightest-slate row-start-2 row-end-3",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "lg:text-end lg:bg-light-nav rounded md:p-6 row-start-3 row-end-8 text-[18px] md:text-xl text-light-slate shadow-sm shadow-[rgba(2, 12, 27, 0.7)]",
                        children: content
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "font-mono flex flex-wrap text-xs lg:text-sm gap-4 lg:justify-end row-start-8 row-end-10 text-light-slate",
                        children: tech && tech.map((t, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: t
                            }, i))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex lg:justify-end gap-4 text-lightest-slate row-start-10 row-end-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: github,
                                target: "_blank",
                                className: "hover:text-green",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_github/* IconGithub */.U, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: external,
                                target: "_blank",
                                className: "hover:text-green",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_external/* IconExternal */.A, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/sections/project.tsx


function Project(props) {
    const { projects  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "pt-36 md:py-36 numbered-heading",
        id: "Project",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-lightest-slate font-semibold headingText after:inline-block",
                children: "Things I've Built"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "pt-10",
                children: projects && projects.map((project, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "md:mb-40 mb-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectCard, {
                            data: project
                        })
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const project = (Project);

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./utils/project-util.tsx



const projectsDirectory = external_path_default().join(process.cwd(), "/public/content/projects");
const getProjectFolderNames = ()=>{
    return external_fs_default().readdirSync(projectsDirectory);
};
const getProjectFiles = (filepath)=>{
    return external_fs_default().readdirSync(filepath);
};
const getProjectData = (folderName, fileName)=>{
    // remove file extension
    const projectSlug = fileName.replace(/\.md$/, "");
    // full file path
    const filePath = external_path_default().join(projectsDirectory, `${folderName}/${projectSlug}.md`);
    const fileContents = external_fs_default().readFileSync(filePath, "utf-8");
    // get metadata and content separately
    const { data , content  } = external_gray_matter_default()(fileContents);
    return {
        ...data,
        folderName,
        content: content
    };
};
const getAllProjects = ()=>{
    console.log(getProjectFolderNames());
    return getProjectFolderNames().map((folderName)=>{
        const filename = getProjectFiles(external_path_default().join(projectsDirectory, folderName)).filter((filename)=>{
            return filename.includes(".md");
        });
        return getProjectData(folderName, filename[0]);
    });
};

// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(819);
// EXTERNAL MODULE: ./public/data/data.tsx
var data = __webpack_require__(371);
;// CONCATENATED MODULE: ./components/sections/contact.tsx



const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "Contact",
        className: "py-36 numbered-heading flex justify-center items-center flex-col HeadingBeforeText gap-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-green text-base font-mono ",
                children: "What's Next"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-5xl text-lightest-slate font-bold",
                children: "Get In Touch"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center",
                children: "I'm looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* OutlinedBtn */.Z, {
                size: "Big",
                link: `mailto:${data/* data.email */.a.email}`,
                children: "Say Hello"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx







function Home(props) {
    const { projects  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Xinyue Chen"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "pt-28 px-6 md:px-20 lg:px-52 grid grid-cols-1 lg:max-w-screen-2xl lg:mx-auto ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(project, {
                        projects: projects
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Contact, {})
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const projects = getAllProjects();
    return {
        props: {
            projects: projects
        }
    };
}


/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 795:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,124], () => (__webpack_exec__(409)));
module.exports = __webpack_exports__;

})();