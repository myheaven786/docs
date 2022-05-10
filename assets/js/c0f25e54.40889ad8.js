"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[864],{3905:function(M,e,N){N.d(e,{Zo:function(){return D},kt:function(){return g}});var t=N(7294);function j(M,e,N){return e in M?Object.defineProperty(M,e,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[e]=N,M}function u(M,e){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),N.push.apply(N,t)}return N}function i(M){for(var e=1;e<arguments.length;e++){var N=null!=arguments[e]?arguments[e]:{};e%2?u(Object(N),!0).forEach((function(e){j(M,e,N[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):u(Object(N)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(N,e))}))}return M}function I(M,e){if(null==M)return{};var N,t,j=function(M,e){if(null==M)return{};var N,t,j={},u=Object.keys(M);for(t=0;t<u.length;t++)N=u[t],e.indexOf(N)>=0||(j[N]=M[N]);return j}(M,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(t=0;t<u.length;t++)N=u[t],e.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(j[N]=M[N])}return j}var r=t.createContext({}),a=function(M){var e=t.useContext(r),N=e;return M&&(N="function"==typeof M?M(e):i(i({},e),M)),N},D=function(M){var e=a(M.components);return t.createElement(r.Provider,{value:e},M.children)},c={inlineCode:"code",wrapper:function(M){var e=M.children;return t.createElement(t.Fragment,{},e)}},T=t.forwardRef((function(M,e){var N=M.components,j=M.mdxType,u=M.originalType,r=M.parentName,D=I(M,["components","mdxType","originalType","parentName"]),T=a(N),g=j,y=T["".concat(r,".").concat(g)]||T[g]||c[g]||u;return N?t.createElement(y,i(i({ref:e},D),{},{components:N})):t.createElement(y,i({ref:e},D))}));function g(M,e){var N=arguments,j=e&&e.mdxType;if("string"==typeof M||j){var u=N.length,i=new Array(u);i[0]=T;var I={};for(var r in e)hasOwnProperty.call(e,r)&&(I[r]=e[r]);I.originalType=M,I.mdxType="string"==typeof M?M:j,i[1]=I;for(var a=2;a<u;a++)i[a]=N[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,N)}T.displayName="MDXCreateElement"},7976:function(M,e,N){N.r(e),N.d(e,{assets:function(){return D},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return I},metadata:function(){return a},toc:function(){return c}});var t=N(7462),j=N(3366),u=(N(7294),N(3905)),i=["components"],I={sidebar_position:6},r="Starters",a={unversionedId:"overview/starters",id:"overview/starters",title:"Starters",description:"Cyclic provides a range of projects as starters. These can be used to get started quickly or can be used at reference implementations to see how a particular framework can be deployed effectively on Cyclic.",source:"@site/docs/overview/starters.md",sourceDirName:"overview",slug:"/overview/starters",permalink:"/docs/overview/starters",draft:!1,editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/overview/starters.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Limits",permalink:"/docs/overview/limits"},next:{title:"Apps",permalink:"/docs/concepts/apps"}},D={},c=[{value:"Vanilla Nodejs",id:"vanilla-nodejs",level:2},{value:"Express API",id:"express-api",level:2},{value:"HTML Full Stack",id:"html-full-stack",level:2},{value:"React Frontend",id:"react-frontend",level:2},{value:"Vue Frontend",id:"vue-frontend",level:2},{value:"NextJS Full Stack",id:"nextjs-full-stack",level:2},{value:"Svelte Frontend",id:"svelte-frontend",level:2},{value:"Slack Bot",id:"slack-bot",level:2}],T={toc:c};function g(M){var e=M.components,I=(0,j.Z)(M,i);return(0,u.kt)("wrapper",(0,t.Z)({},T,I,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"starters"},"Starters"),(0,u.kt)("p",null,"Cyclic provides a range of projects as starters. These can be used to get started quickly or can be used at reference implementations to see how a particular framework can be deployed effectively on Cyclic."),(0,u.kt)("p",null,"If you run into issues or have questions on the starters please ask in the support channel on our discord community: ",(0,u.kt)("a",{parentName:"p",href:"https://discord.gg/huhcqxXCbE"},"https://discord.gg/huhcqxXCbE")),(0,u.kt)("h2",{id:"vanilla-nodejs"},"Vanilla Nodejs"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"The smallest possible node backend with no dependencies."),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-micro-api"},"https://github.com/cyclic-software/starter-micro-api"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-micro-api"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"express-api"},"Express API"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Minimal Express backend with just a few lines of code"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-express-api"},"https://github.com/cyclic-software/starter-express-api"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-express-api"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"html-full-stack"},"HTML Full Stack"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"An express app serving a static html page with some cool css"),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/express-hello-world"},"https://github.com/cyclic-software/express-hello-world"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/express-hello-world"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"react-frontend"},"React Frontend"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Vanilla React App. Created with ",(0,u.kt)("inlineCode",{parentName:"li"},"npx create-react-app")," template."),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-react-app"},"https://github.com/cyclic-software/starter-react-app"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-react-app"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"vue-frontend"},"Vue Frontend"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Vanilla Vue App. Created with ",(0,u.kt)("inlineCode",{parentName:"li"},"npx @vue/cli create starter-vue")),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-vue"},"https://github.com/cyclic-software/starter-vue"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-vue"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"nextjs-full-stack"},"NextJS Full Stack"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"A NextJS static site with a small Express API backend"),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-nextjs"},"https://github.com/cyclic-software/starter-nextjs"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-nextjs"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"svelte-frontend"},"Svelte Frontend"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Vanilla Svelte App. Created with ",(0,u.kt)("inlineCode",{parentName:"li"},"npx degit sveltejs/template")),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-svelte"},"https://github.com/cyclic-software/starter-svelte"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-svelte"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))),(0,u.kt)("h2",{id:"slack-bot"},"Slack Bot"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Slack Bot starter built on Boltjs"),(0,u.kt)("li",{parentName:"ul"},"Source: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/cyclic-software/starter-slack-boltjs"},"https://github.com/cyclic-software/starter-slack-boltjs"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/starter-slack-boltjs"},(0,u.kt)("img",{alt:"Deploy",src:N(8618).Z,width:"161",height:"35"}))))}g.isMDXComponent=!0},8618:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTYxIDM1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYxIiBoZWlnaHQ9IjM1IiByeD0iNC44IiBmaWxsPSIjMkU1OUM3Ii8+CjxwYXRoIGQ9Ik0xNiAxNS44ODE1SDIwLjQ0MzNMMjIuNjA5NCAxNy4yODg5SDE4LjIyMTZMMTYgMTUuODgxNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuODUiIGQ9Ik0xNi40MjE5IDEzLjc3MDRIMjAuNTgxNUwyMi42MDk0IDE3LjI4ODlIMTguNTAxN0wxNi40MjE5IDEzLjc3MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjc1IiBkPSJNMTYuOTg0NCAxMS42NTkzSDIwLjc2NTlMMjIuNjA5NCAxNy4yODg5SDE4Ljg3NTFMMTYuOTg0NCAxMS42NTkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTcuNjg3NSA5LjY4ODg5SDIwLjk5NjNMMjIuNjA5NCAxNy4yODg5SDE5LjM0MTlMMTcuNjg3NSA5LjY4ODg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yNSIgZD0iTTE4LjM5MDYgOEgyMS4yMjY4TDIyLjYwOTQgMTcuMjg4OUgxOS44MDg3TDE4LjM5MDYgOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNSAxOS4xMTg1SDIwLjU1NjdMMTguMzkwNiAxNy43MTExSDIyLjc3ODRMMjUgMTkuMTE4NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuODUiIGQ9Ik0yNC41NzgxIDIxLjIyOTZIMjAuNDE4NUwxOC4zOTA2IDE3LjcxMTFIMjIuNDk4M0wyNC41NzgxIDIxLjIyOTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjc1IiBkPSJNMjQuMDE1NiAyMy4zNDA3SDIwLjIzNDFMMTguMzkwNiAxNy43MTExSDIyLjEyNDlMMjQuMDE1NiAyMy4zNDA3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjMuMzEyNSAyNS4zMTExSDIwLjAwMzdMMTguMzkwNiAxNy43MTExSDIxLjY1ODFMMjMuMzEyNSAyNS4zMTExWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yNSIgZD0iTTIyLjYwOTQgMjdIMTkuNzczMkwxOC4zOTA2IDE3LjcxMTFIMjEuMTkxM0wyMi42MDk0IDI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM3LjkwMjUgMjIuNUgzNC41ODQ1VjEyLjkxSDM3LjkwMjVDMzkuMzc3MiAxMi45MSA0MC4zODUyIDEzLjI4MzMgNDAuOTI2NSAxNC4wM0M0MS40Njc4IDE0Ljc3NjcgNDEuNzM4NSAxNS45NDggNDEuNzM4NSAxNy41NDRDNDEuNzM4NSAxOC4zNTYgNDEuNjgyNSAxOS4wNDY3IDQxLjU3MDUgMTkuNjE2QzQxLjQ2NzggMjAuMTc2IDQxLjI4MTIgMjAuNjg0NyA0MS4wMTA1IDIxLjE0MkM0MC40Nzg1IDIyLjA0NzMgMzkuNDQyNSAyMi41IDM3LjkwMjUgMjIuNVpNNDAuMTI4NSAxNy41NDRDNDAuMTI4NSAxNi4zODY3IDM5Ljk4MzggMTUuNTUxMyAzOS42OTQ1IDE1LjAzOEMzOS40MDUyIDE0LjUyNDcgMzguODA3OCAxNC4yNjggMzcuOTAyNSAxNC4yNjhIMzYuMTM4NVYyMS4xMjhIMzcuOTAyNUMzOC44MjY1IDIxLjEyOCAzOS40NDI1IDIwLjc4NzMgMzkuNzUwNSAyMC4xMDZDMzkuODk5OCAxOS43NjA3IDM5Ljk5NzggMTkuMzkyIDQwLjA0NDUgMTlDNDAuMTAwNSAxOC42MDggNDAuMTI4NSAxOC4xMjI3IDQwLjEyODUgMTcuNTQ0Wk00My41NTMzIDIyLjVWMTIuOTFINDkuNjAxM1YxNC4yNjhINDUuMTA3M1YxNi45ODRINDguNzYxM1YxOC4zMjhINDUuMTA3M1YyMS4xMjhINDkuNjAxM1YyMi41SDQzLjU1MzNaTTU0LjgwNTUgMTkuNTE4SDUyLjg0NTVWMjIuNUg1MS4yOTE1VjEyLjkxSDU0LjgwNTVDNTYuOTgwMiAxMi45MSA1OC4wNjc1IDEzLjk4MzMgNTguMDY3NSAxNi4xM0M1OC4wNjc1IDE3LjIzMTMgNTcuNzkyMiAxOC4wNzEzIDU3LjI0MTUgMTguNjVDNTYuNzAwMiAxOS4yMjg3IDU1Ljg4ODIgMTkuNTE4IDU0LjgwNTUgMTkuNTE4Wk01Mi44NDU1IDE4LjE3NEg1NC43OTE1QzU1LjkxMTUgMTguMTc0IDU2LjQ3MTUgMTcuNDkyNyA1Ni40NzE1IDE2LjEzQzU2LjQ3MTUgMTUuNDc2NyA1Ni4zMzYyIDE1LjAwMDcgNTYuMDY1NSAxNC43MDJDNTUuNzk0OSAxNC40MDMzIDU1LjM3MDIgMTQuMjU0IDU0Ljc5MTUgMTQuMjU0SDUyLjg0NTVWMTguMTc0Wk02NC45MzkgMjIuNUg1OS41NjNWMTIuOTFINjEuMTE3VjIxLjExNEg2NC45MzlWMjIuNVpNNjcuNzA5NSAyMC40N0M2OC4wMjY4IDIxLjAyMDcgNjguNjMzNSAyMS4yOTYgNjkuNTI5NSAyMS4yOTZDNzAuNDI1NSAyMS4yOTYgNzEuMDI3NSAyMS4wMjUzIDcxLjMzNTUgMjAuNDg0QzcxLjY1MjggMTkuOTQyNyA3MS44MTE1IDE5LjAzNzMgNzEuODExNSAxNy43NjhDNzEuODExNSAxNi40ODkzIDcxLjY0ODIgMTUuNTYwNyA3MS4zMjE1IDE0Ljk4MkM3MS4wMDQyIDE0LjQwMzMgNzAuNDA2OCAxNC4xMTQgNjkuNTI5NSAxNC4xMTRDNjguNjUyMiAxNC4xMTQgNjguMDUwMiAxNC40MDMzIDY3LjcyMzUgMTQuOTgyQzY3LjM5NjggMTUuNTYwNyA2Ny4yMzM1IDE2LjQ4NDcgNjcuMjMzNSAxNy43NTRDNjcuMjMzNSAxOS4wMTQgNjcuMzkyMiAxOS45MTkzIDY3LjcwOTUgMjAuNDdaTTcyLjU1MzUgMjEuNDc4QzcxLjk4NDIgMjIuMjYyIDcwLjk3NjIgMjIuNjU0IDY5LjUyOTUgMjIuNjU0QzY4LjA4MjggMjIuNjU0IDY3LjA3MDIgMjIuMjYyIDY2LjQ5MTUgMjEuNDc4QzY1LjkxMjggMjAuNjg0NyA2NS42MjM1IDE5LjQ0MzMgNjUuNjIzNSAxNy43NTRDNjUuNjIzNSAxNi4wNjQ3IDY1LjkxMjggMTQuODA5MyA2Ni40OTE1IDEzLjk4OEM2Ny4wNzk1IDEzLjE2NjcgNjguMDkyMiAxMi43NTYgNjkuNTI5NSAxMi43NTZDNzAuOTY2OCAxMi43NTYgNzEuOTc0OCAxMy4xNjY3IDcyLjU1MzUgMTMuOTg4QzczLjEzMjIgMTQuOCA3My40MjE1IDE2LjA1NTMgNzMuNDIxNSAxNy43NTRDNzMuNDIxNSAxOS40NTI3IDczLjEzMjIgMjAuNjk0IDcyLjU1MzUgMjEuNDc4Wk03OC4zNjI1IDIyLjVINzYuNzk0NVYxOC41NTJMNzMuNzg0NSAxMi45MUg3NS41MzQ1TDc3LjU2NDUgMTcuMDI2TDc5LjYwODUgMTIuOTFIODEuMzQ0NUw3OC4zNjI1IDE4LjU1MlYyMi41Wk04NC42NzAzIDE0LjI5NlYxMi45MUg5MS42NzAzVjE0LjI5Nkg4OC45NjgzVjIyLjVIODcuNDAwM1YxNC4yOTZIODQuNjcwM1pNOTQuNDY1NCAyMC40N0M5NC43ODI3IDIxLjAyMDcgOTUuMzg5NCAyMS4yOTYgOTYuMjg1NCAyMS4yOTZDOTcuMTgxNCAyMS4yOTYgOTcuNzgzNCAyMS4wMjUzIDk4LjA5MTQgMjAuNDg0Qzk4LjQwODcgMTkuOTQyNyA5OC41Njc0IDE5LjAzNzMgOTguNTY3NCAxNy43NjhDOTguNTY3NCAxNi40ODkzIDk4LjQwNCAxNS41NjA3IDk4LjA3NzQgMTQuOTgyQzk3Ljc2IDE0LjQwMzMgOTcuMTYyNyAxNC4xMTQgOTYuMjg1NCAxNC4xMTRDOTUuNDA4IDE0LjExNCA5NC44MDYgMTQuNDAzMyA5NC40Nzk0IDE0Ljk4MkM5NC4xNTI3IDE1LjU2MDcgOTMuOTg5NCAxNi40ODQ3IDkzLjk4OTQgMTcuNzU0QzkzLjk4OTQgMTkuMDE0IDk0LjE0OCAxOS45MTkzIDk0LjQ2NTQgMjAuNDdaTTk5LjMwOTQgMjEuNDc4Qzk4Ljc0IDIyLjI2MiA5Ny43MzIgMjIuNjU0IDk2LjI4NTQgMjIuNjU0Qzk0LjgzODcgMjIuNjU0IDkzLjgyNiAyMi4yNjIgOTMuMjQ3NCAyMS40NzhDOTIuNjY4NyAyMC42ODQ3IDkyLjM3OTQgMTkuNDQzMyA5Mi4zNzk0IDE3Ljc1NEM5Mi4zNzk0IDE2LjA2NDcgOTIuNjY4NyAxNC44MDkzIDkzLjI0NzQgMTMuOTg4QzkzLjgzNTQgMTMuMTY2NyA5NC44NDggMTIuNzU2IDk2LjI4NTQgMTIuNzU2Qzk3LjcyMjcgMTIuNzU2IDk4LjczMDcgMTMuMTY2NyA5OS4zMDk0IDEzLjk4OEM5OS44ODggMTQuOCAxMDAuMTc3IDE2LjA1NTMgMTAwLjE3NyAxNy43NTRDMTAwLjE3NyAxOS40NTI3IDk5Ljg4OCAyMC42OTQgOTkuMzA5NCAyMS40NzhaTTEwOC4yODMgMjIuNjU0QzEwNi44ODMgMjIuNjU0IDEwNS45MzEgMjIuMjY2NyAxMDUuNDI3IDIxLjQ5MkMxMDQuOTMyIDIwLjcxNzMgMTA0LjY4NSAxOS40NDMzIDEwNC42ODUgMTcuNjdDMTA0LjY4NSAxNS44OTY3IDEwNC45MzcgMTQuNjM2NyAxMDUuNDQxIDEzLjg5QzEwNS45NDUgMTMuMTM0IDEwNi44OTIgMTIuNzU2IDEwOC4yODMgMTIuNzU2QzEwOS4xMTQgMTIuNzU2IDExMC4wMjggMTIuODcyNyAxMTEuMDI3IDEzLjEwNkwxMTAuOTcxIDE0LjM2NkMxMTAuMTMxIDE0LjIxNjcgMTA5LjI5MSAxNC4xNDIgMTA4LjQ1MSAxNC4xNDJDMTA3LjYxMSAxNC4xNDIgMTA3LjA0MiAxNC4zOTQgMTA2Ljc0MyAxNC44OThDMTA2LjQ0NCAxNS4zOTI3IDEwNi4yOTUgMTYuMzMwNyAxMDYuMjk1IDE3LjcxMkMxMDYuMjk1IDE5LjA4NCAxMDYuNDQgMjAuMDIyIDEwNi43MjkgMjAuNTI2QzEwNy4wMTggMjEuMDIwNyAxMDcuNTgzIDIxLjI2OCAxMDguNDIzIDIxLjI2OEMxMDkuMjYzIDIxLjI2OCAxMTAuMTEyIDIxLjE5OCAxMTAuOTcxIDIxLjA1OEwxMTEuMDEzIDIyLjM0NkMxMTAuMDUyIDIyLjU1MTMgMTA5LjE0MiAyMi42NTQgMTA4LjI4MyAyMi42NTRaTTExNi4yMDYgMjIuNUgxMTQuNjM4VjE4LjU1MkwxMTEuNjI4IDEyLjkxSDExMy4zNzhMMTE1LjQwOCAxNy4wMjZMMTE3LjQ1MiAxMi45MUgxMTkuMTg4TDExNi4yMDYgMTguNTUyVjIyLjVaTTEyMy4yMTMgMjIuNjU0QzEyMS44MTMgMjIuNjU0IDEyMC44NjEgMjIuMjY2NyAxMjAuMzU3IDIxLjQ5MkMxMTkuODYyIDIwLjcxNzMgMTE5LjYxNSAxOS40NDMzIDExOS42MTUgMTcuNjdDMTE5LjYxNSAxNS44OTY3IDExOS44NjcgMTQuNjM2NyAxMjAuMzcxIDEzLjg5QzEyMC44NzUgMTMuMTM0IDEyMS44MjIgMTIuNzU2IDEyMy4yMTMgMTIuNzU2QzEyNC4wNDMgMTIuNzU2IDEyNC45NTggMTIuODcyNyAxMjUuOTU3IDEzLjEwNkwxMjUuOTAxIDE0LjM2NkMxMjUuMDYxIDE0LjIxNjcgMTI0LjIyMSAxNC4xNDIgMTIzLjM4MSAxNC4xNDJDMTIyLjU0MSAxNC4xNDIgMTIxLjk3MSAxNC4zOTQgMTIxLjY3MyAxNC44OThDMTIxLjM3NCAxNS4zOTI3IDEyMS4yMjUgMTYuMzMwNyAxMjEuMjI1IDE3LjcxMkMxMjEuMjI1IDE5LjA4NCAxMjEuMzY5IDIwLjAyMiAxMjEuNjU5IDIwLjUyNkMxMjEuOTQ4IDIxLjAyMDcgMTIyLjUxMyAyMS4yNjggMTIzLjM1MyAyMS4yNjhDMTI0LjE5MyAyMS4yNjggMTI1LjA0MiAyMS4xOTggMTI1LjkwMSAyMS4wNThMMTI1Ljk0MyAyMi4zNDZDMTI0Ljk4MSAyMi41NTEzIDEyNC4wNzEgMjIuNjU0IDEyMy4yMTMgMjIuNjU0Wk0xMzIuOTg0IDIyLjVIMTI3LjYwOFYxMi45MUgxMjkuMTYyVjIxLjExNEgxMzIuOTg0VjIyLjVaTTEzNC4yNTIgMjIuNVYxMi45MUgxMzUuODA2VjIyLjVIMTM0LjI1MlpNMTQxLjIzMiAyMi42NTRDMTM5LjgzMiAyMi42NTQgMTM4Ljg4IDIyLjI2NjcgMTM4LjM3NiAyMS40OTJDMTM3Ljg4MiAyMC43MTczIDEzNy42MzQgMTkuNDQzMyAxMzcuNjM0IDE3LjY3QzEzNy42MzQgMTUuODk2NyAxMzcuODg2IDE0LjYzNjcgMTM4LjM5IDEzLjg5QzEzOC44OTQgMTMuMTM0IDEzOS44NDIgMTIuNzU2IDE0MS4yMzIgMTIuNzU2QzE0Mi4wNjMgMTIuNzU2IDE0Mi45NzggMTIuODcyNyAxNDMuOTc2IDEzLjEwNkwxNDMuOTIgMTQuMzY2QzE0My4wOCAxNC4yMTY3IDE0Mi4yNCAxNC4xNDIgMTQxLjQgMTQuMTQyQzE0MC41NiAxNC4xNDIgMTM5Ljk5MSAxNC4zOTQgMTM5LjY5MiAxNC44OThDMTM5LjM5NCAxNS4zOTI3IDEzOS4yNDQgMTYuMzMwNyAxMzkuMjQ0IDE3LjcxMkMxMzkuMjQ0IDE5LjA4NCAxMzkuMzg5IDIwLjAyMiAxMzkuNjc4IDIwLjUyNkMxMzkuOTY4IDIxLjAyMDcgMTQwLjUzMiAyMS4yNjggMTQxLjM3MiAyMS4yNjhDMTQyLjIxMiAyMS4yNjggMTQzLjA2MiAyMS4xOTggMTQzLjkyIDIxLjA1OEwxNDMuOTYyIDIyLjM0NkMxNDMuMDAxIDIyLjU1MTMgMTQyLjA5MSAyMi42NTQgMTQxLjIzMiAyMi42NTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"}}]);