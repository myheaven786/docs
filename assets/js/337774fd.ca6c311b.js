"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(a),u=o,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:3},r="GoDaddy",l={unversionedId:"how-to/custom-domains/godaddy",id:"how-to/custom-domains/godaddy",title:"GoDaddy",description:"Assuming you own example.com, registered with GoDaddy:",source:"@site/docs/how-to/custom-domains/godaddy.md",sourceDirName:"how-to/custom-domains",slug:"/how-to/custom-domains/godaddy",permalink:"/how-to/custom-domains/godaddy",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/how-to/custom-domains/godaddy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cloudflare",permalink:"/how-to/custom-domains/cloudflare"},next:{title:"Common Error Codes",permalink:"/troubleshooting/error-codes"}},d={},m=[{value:"Subdomains",id:"subdomains",level:2},{value:"Cyclic",id:"cyclic",level:3},{value:"GoDaddy",id:"godaddy-1",level:3},{value:"Apex domains",id:"apex-domains",level:2},{value:"Cyclic",id:"cyclic-1",level:3},{value:"GoDaddy",id:"godaddy-2",level:3}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"godaddy"},"GoDaddy"),(0,o.kt)("p",null,"Assuming you own ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),", registered with GoDaddy:"),(0,o.kt)("h2",{id:"subdomains"},"Subdomains"),(0,o.kt)("p",null,"Link a subdomain, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"api.example.com")," to a Cyclic app:"),(0,o.kt)("h3",{id:"cyclic"},"Cyclic"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the app dashboard, navigate to Advanced > Branding > Custom Domain"),(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"api.example.com")," in the ",(0,o.kt)("em",{parentName:"li"},"Domain Name")," field"),(0,o.kt)("li",{parentName:"ol"},"Press Start"),(0,o.kt)("li",{parentName:"ol"},"You should see a message saying that records will be available in a few seconds. Hit ",(0,o.kt)("em",{parentName:"li"},"Refresh")," if you do not see them."),(0,o.kt)("li",{parentName:"ol"},"Cyclic will produce:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/cyclic_advanced.png",width:"650px"}))))),(0,o.kt)("h3",{id:"godaddy-1"},"GoDaddy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("em",{parentName:"li"},"DNS Management")," for the domain"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Add")," to add a record",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/godaddy_1.png",width:"650px"})))),(0,o.kt)("li",{parentName:"ol"},"Enter the validation record",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"CNAME")," in the ",(0,o.kt)("em",{parentName:"li"},"Type")," field"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"Name")," field should not include the domain portion",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"For the Cyclic dashboard record name of ",(0,o.kt)("inlineCode",{parentName:"li"},"_xxxxxxxxxxx.api.example.com"),", in GoDaddy, only enter ",(0,o.kt)("inlineCode",{parentName:"li"},"_xxxxxxxxxxx.api")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/godaddy_2.png",width:"650px"})))),(0,o.kt)("li",{parentName:"ol"},"Enter the routing record",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"CNAME")," in the ",(0,o.kt)("em",{parentName:"li"},"Type")," field"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"Name")," field should not include the domain portion",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"For the Cyclic dashboard record name of ",(0,o.kt)("inlineCode",{parentName:"li"},"api.example.com"),", in GoDaddy, only enter ",(0,o.kt)("inlineCode",{parentName:"li"},"api")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/godaddy_3.png",width:"650px"}))))),(0,o.kt)("p",null,"At this point, the SSL certificate is still pending, navigating to your subdomain ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.example.com"),", will produce a browser error ",(0,o.kt)("inlineCode",{parentName:"p"},"NET::ERR_CERT_COMMON_NAME_INVALID"),". "),(0,o.kt)("p",null,"Return to Cyclic dashboard. It will take a few minutes (up to 15 but usually less) for a certificate to be issued once the validation record has been entered."),(0,o.kt)("p",null,"After refreshing, you should see a message that says: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," https://api.example.com has been validated and is active \n")),(0,o.kt)("h2",{id:"apex-domains"},"Apex domains"),(0,o.kt)("p",null,"Link the apex domain ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com")," to a Cyclic app. "),(0,o.kt)("admonition",{title:"Apex Domains cannot be linked via CNAME",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"   The most common approach is to link the ",(0,o.kt)("inlineCode",{parentName:"p"},"www")," subdomain and use forwarding in GoDaddy to set up redirect from ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"www.example.com"))),(0,o.kt)("h3",{id:"cyclic-1"},"Cyclic"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow the above ",(0,o.kt)("em",{parentName:"strong"},"subdomain")," procedure to link ",(0,o.kt)("inlineCode",{parentName:"strong"},"www.example.com")," to your Cyclic app. ")),(0,o.kt)("p",null,"After you have set up the records and SSL certificate was issued:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify that you can access your app via ",(0,o.kt)("inlineCode",{parentName:"li"},"https://wwww.example.com"),".")),(0,o.kt)("h3",{id:"godaddy-2"},"GoDaddy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("em",{parentName:"li"},"DNS Management")," for the domain, scroll down to the ",(0,o.kt)("em",{parentName:"li"},"Forwarding")," section"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Add Forwarding")," in the ",(0,o.kt)("em",{parentName:"li"},"Domain")," slot",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/godaddy_4.png",width:"650px"})))),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"https://")," from the dropdown and enter your subdomain, ",(0,o.kt)("inlineCode",{parentName:"li"},"www.example.com")," ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{src:"/img/domains/godaddy_5.png",width:"650px"}))))),(0,o.kt)("p",null,"After a few minutes, try navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com")," and you should be redirected to your Cyclic app at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.example.com")))}c.isMDXComponent=!0}}]);