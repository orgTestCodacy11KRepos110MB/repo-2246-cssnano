"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5628],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},69232:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var n=r(19624),o=r(20042),i=(r(59496),r(49613)),a=["components"],c={title:"discardOverridden",layout:"Optimisation",identifier:"discardoverridden"},s=void 0,d={unversionedId:"optimisations/discardoverridden",id:"optimisations/discardoverridden",title:"discardOverridden",description:"Removes at-rules which have the same identifier as another; for example two",source:"@site/docs/optimisations/discardoverridden.md",sourceDirName:"optimisations",slug:"/optimisations/discardoverridden",permalink:"/docs/optimisations/discardoverridden",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/optimisations/discardoverridden.md",tags:[],version:"current",lastUpdatedBy:"Anix",lastUpdatedAt:1594121590,formattedLastUpdatedAt:"7/7/2020",frontMatter:{title:"discardOverridden",layout:"Optimisation",identifier:"discardoverridden"}},p=[],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes at-rules which have the same identifier as another; for example two\ninstances of ",(0,i.kt)("inlineCode",{parentName:"p"},"@keyframes one"),". As the browser will only count the ",(0,i.kt)("em",{parentName:"p"},"last")," of\nthese declarations, all others can safely be removed."))}l.isMDXComponent=!0}}]);