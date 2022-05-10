"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="No space left on device",c={unversionedId:"troubleshooting/no-space-left-on-device",id:"troubleshooting/no-space-left-on-device",title:"No space left on device",description:"If you get an error in the deploy log that says No space left on device, here is how to fix.",source:"@site/docs/troubleshooting/no-space-left-on-device.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/no-space-left-on-device",permalink:"/docs/troubleshooting/no-space-left-on-device",draft:!1,editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/troubleshooting/no-space-left-on-device.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Main entry point does not exist",permalink:"/docs/troubleshooting/main-entry-point-does-not-exist"},next:{title:"Nodemon",permalink:"/docs/troubleshooting/nodemon"}},u={},p=[{value:"Error message",id:"error-message",level:2},{value:"Solution",id:"solution",level:2},{value:"Why does this happen?",id:"why-does-this-happen",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"no-space-left-on-device"},"No space left on device"),(0,i.kt)("p",null,"If you get an error in the deploy log that says ",(0,i.kt)("inlineCode",{parentName:"p"},"No space left on device"),", here is how to fix."),(0,i.kt)("h2",{id:"error-message"},"Error message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-code"},"fatal: cannot create directory at 'some_large_file.txt': No space left on device\n2021-12-06 10:49:49: [CYCLIC] Build Failed\nPush a new commit to start another.\n")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"The only resolution at this time is to trim your dependencies or devDependencies."),(0,i.kt)("h2",{id:"why-does-this-happen"},"Why does this happen?"),(0,i.kt)("p",null,"Cyclic builds and deploys apps using serverless technologies. We have 10 GB of space to use to install your ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),", then build your code bundle. The bundle may not exceed 250 MB as we need some space to bundle some Cyclic code as well."),(0,i.kt)("p",null,"If your space requirements exceed these amounts, while running the install step you will see a ",(0,i.kt)("inlineCode",{parentName:"p"},"No space left on device")," error."),(0,i.kt)("p",null,"Several SPA frameworks (including React) by default include build time tools in standard generated ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),". If you move these to ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," you will most likely resolve any space issues."))}f.isMDXComponent=!0}}]);