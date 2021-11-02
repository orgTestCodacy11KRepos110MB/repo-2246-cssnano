"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3120],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6429:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=["components"],o={slug:"cssnano-5-release-notes",title:"cssnano 5 is available",author:"Ludovico Fischer"},c=void 0,l={permalink:"/blog/cssnano-5-release-notes",source:"@site/blog/2021-04-10-cssnano-5.md",title:"cssnano 5 is available",description:"We have released a new major version of cssnano.",date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[],readingTime:1.01,truncated:!1,authors:[{name:"Ludovico Fischer"}]},p={authorsImageUrls:[void 0]},u=[{value:"Major changes in cssnano 5",id:"major-changes-in-cssnano-5",children:[],level:2},{value:"How to Upgrade",id:"how-to-upgrade",children:[{value:"Update the PostCSS dependency",id:"update-the-postcss-dependency",children:[],level:3},{value:"JavaScript API changes",id:"javascript-api-changes",children:[],level:3}],level:2},{value:"Bug fixes",id:"bug-fixes",children:[],level:2}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We have released a new major version of cssnano."),(0,s.kt)("h2",{id:"major-changes-in-cssnano-5"},"Major changes in cssnano 5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"cssnano 5 requires Node.js >= 10.13"),(0,s.kt)("li",{parentName:"ul"},"PostCSS 8 API, so cssnano 5 does not emit warnings when running under PostCSS 8 "),(0,s.kt)("li",{parentName:"ul"},"updates to SVGO 2, fixing many SVG minification bugs"),(0,s.kt)("li",{parentName:"ul"},"updates css-value-parser and css-selector-parser, fixing many bugs")),(0,s.kt)("h2",{id:"how-to-upgrade"},"How to Upgrade"),(0,s.kt)("h3",{id:"update-the-postcss-dependency"},"Update the PostCSS dependency"),(0,s.kt)("p",null,"Add ",(0,s.kt)("inlineCode",{parentName:"p"},"postcss")," to your ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,s.kt)("inlineCode",{parentName:"p"},"dependencies")," field, if your package manager does not install peer dependencies automatically."),(0,s.kt)("h3",{id:"javascript-api-changes"},"JavaScript API changes"),(0,s.kt)("p",null,"If you use the cssnano JavaScript API, change your code:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"replace ",(0,s.kt)("inlineCode",{parentName:"p"},"cssnano.process()")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"cssnano().process()")," (notice the ",(0,s.kt)("inlineCode",{parentName:"p"},"()")," after ",(0,s.kt)("inlineCode",{parentName:"p"},"cssnano"),")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"pass cssnano options to ",(0,s.kt)("inlineCode",{parentName:"p"},"cssnano()")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"process()")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cssnano(cssnanoOptions).process(postcssOptions)\n")),(0,s.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fix improperly discarding ",(0,s.kt)("inlineCode",{parentName:"li"},"@font-face")," declarations ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/726"},"#726")),(0,s.kt)("li",{parentName:"ul"},"partially fix some isues where cssnano did not combine rules when used together with ",(0,s.kt)("inlineCode",{parentName:"li"},"postcss-nested")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/1004"},"#1004")),(0,s.kt)("li",{parentName:"ul"},"fix ",(0,s.kt)("inlineCode",{parentName:"li"},"translate3d()")," minification ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/920"},"#920")),(0,s.kt)("li",{parentName:"ul"},"fix minification of values starting with ",(0,s.kt)("inlineCode",{parentName:"li"},"e")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/958"},"#589"),", ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/984"},"#984")),(0,s.kt)("li",{parentName:"ul"},"fix minification of percentage vaalues ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/962"},"#962"),", ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/957"},"#957")),(0,s.kt)("li",{parentName:"ul"},"fix minification of ",(0,s.kt)("inlineCode",{parentName:"li"},"aspect-ratio")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/963"},"#963")),(0,s.kt)("li",{parentName:"ul"},"fix merging of ",(0,s.kt)("inlineCode",{parentName:"li"},"@supports")," rules ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/974"},"#974")),(0,s.kt)("li",{parentName:"ul"},"fix sorting of longhand and shorthand properties ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/535"},"#535")),(0,s.kt)("li",{parentName:"ul"},"remove vulnerable dependency and always warn with bad SVG input ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/pull/1034"},"#1034"))))}d.isMDXComponent=!0}}]);