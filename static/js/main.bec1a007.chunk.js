(this["webpackJsonphelper-sandbox"]=this["webpackJsonphelper-sandbox"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(6),c=n.n(s),a=(n(12),n(4)),l=n(7),r=n(18),d=n(1),u=function(e){var t=e.isVisible,n=e.closeIntroBox,i=e.featureIconFileNameArray;return Object(d.jsxs)(r.a.div,{animate:t?"open":"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"100%"}},transition:{type:"spring",damping:20,stiffness:100},id:"introBox",className:"absolute right-8 bottom-24 min-w-max section-box rounded-2xl border border-gray-700 bg-white",children:[Object(d.jsx)("img",{onClick:function(){return n()},src:"icons/close-box.svg",alt:"Close the Helpbox ",className:"absolute top-4 right-4 w-6 h-6 cursor-pointer"}),Object(d.jsxs)("div",{id:"helpBoxTitleBar",className:"title-bar flex-col justify-end items-center gap-2 px-6 bg-white text-gray-700",children:[Object(d.jsx)("h4",{children:"What's going on here?"}),Object(d.jsx)("hr",{className:"w-full h-0.5 bg-gray-700"})]}),Object(d.jsxs)("div",{id:"introBody",className:"section-box-body items-center gap-8 py-8 px-6",children:[Object(d.jsx)("p",{className:"text-center text-lg font-light",children:"This is a prototype of a help system."}),Object(d.jsxs)("div",{id:"callToActionBox",className:"w-full flex flex-col min-w-min gap-3 text-center py-6 px-4 bg-yellow-200 rounded-2xl",children:[Object(d.jsxs)("p",{className:"text-base whitespace-pre-wrap font-medium",children:["Try it by hovering over these buttons ","\n"," in the Workbench above."]}),Object(d.jsx)("div",{id:"iconContainer",className:"w-full flex justify-center gap-4",children:i.map((function(e){return Object(d.jsx)("img",{alt:"Hover over the button in the Workbench area",src:"icons/".concat(e,".svg"),className:"w-8 h-8"},e)}))})]}),Object(d.jsxs)("a",{href:"https://github.com/Return180bpm/helper-sandbox",target:"_blank",rel:"noopener noreferrer",className:"max-w-max flex justify-center gap-1 items-center p-2 rounded-md border border-gray-500",children:[Object(d.jsx)("span",{className:"text-sm font-light",children:"Learn more"}),Object(d.jsx)("img",{alt:"Opens a help page in a new tab",src:"icons/external-link.svg",className:"w-4 h-4"})]})]})]})},b=function(e){var t=e.onClickFunction;return Object(d.jsx)("img",{alt:"Open the Introbox",src:"icons/question-mark-circle-noborders.svg",onClick:function(){t()},className:"z-50 w-12 h-12 absolute bottom-8 right-8 cursor-pointer"})},p=function(e){var t=e.isVisible,n=e.featureName,i=e.iconFileName;return Object(d.jsxs)(r.a.div,{variants:{open:{opacity:1,x:0,display:"block",transition:{delay:.7,type:"spring",damping:12,stiffness:120}},closed:{opacity:0,x:"100%",transition:{duration:.3,type:"spring",damping:50,stiffness:120},transitionEnd:{display:"none"}},hidden:{opacity:0,x:"100%",display:"none"}},initial:"hidden",animate:t?"open":"closed",className:"min-w-max absolute right-8 bottom-24 section-box flex-nowrap p-8 pt-4 text-center rounded-xl border border-gray-300",children:[Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2",children:[n&&Object(d.jsx)("div",{className:"inline p-3 bg-yellow-200 rounded-full",children:Object(d.jsx)("img",{alt:"".concat(n),src:"icons/".concat(i,".svg"),className:"w-8 h-8"})}),Object(d.jsx)("p",{className:"text-sm",children:"Not sure what this does?"})]}),Object(d.jsx)("div",{className:"foo",children:Object(d.jsx)("p",{className:"mt-4 text-base font-light",children:"Press the [h] key to see how it works."})})]})},h=function(e){var t=e.isVisible,n=e.featureName,i=e.iconFileName,o=e.helpDescription,s=(e.helpURL,e.helpDemoWebmFilename),c=e.closeHelpBox;return Object(d.jsxs)(r.a.div,{variants:{open:{opacity:1,x:0,display:"block"},closed:{opacity:0,x:"100%",transitionEnd:{display:"none"}},changed:{opacity:.2},hidden:{opacity:0,x:"100%",display:"none"}},initial:"hidden",animate:t?"open":"closed",transition:{type:"spring",damping:20,stiffness:100},id:"helpBox",className:"absolute right-8 bottom-24 w-80 section-box rounded-2xl border border-gray-700 bg-white",children:[Object(d.jsx)("img",{onClick:function(){return c()},src:"icons/close-box.svg",alt:"Close the Helpbox ",className:"absolute top-4 right-4 w-6 h-6 cursor-pointer"}),Object(d.jsxs)("div",{id:"helpBoxTitleBar",className:"title-bar flex-col justify-end items-center gap-2 px-6 bg-white text-gray-700",children:[Object(d.jsx)("h4",{children:"Helpbox"}),Object(d.jsx)("hr",{className:"w-full h-0.5 bg-gray-700"})]}),Object(d.jsxs)("div",{id:"helpBody",className:"section-box-body items-center gap-4 pt-2 px-6 pb-4",children:[Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2",children:[Object(d.jsx)("div",{className:"p-3 bg-yellow-200 rounded-full",children:n&&Object(d.jsx)("img",{alt:"".concat(n),src:"icons/".concat(i,".svg"),className:"w-8 h-8"})}),Object(d.jsx)("p",{className:"text-center text-base font-light",children:o})]}),Object(d.jsx)("video",{controls:!0,autoPlay:!0,loop:!0,src:s})]})]})},m=(n(14),function(e){var t=e.onClickFunction,n=e.onMouseEnterFunction,i=e.onMouseLeaveFunction,o=e.featureName,s=e.iconFileName;return Object(d.jsx)("button",{onClick:function(){return function(){var e,n=document.getElementById("inputField").value;e=t(n),document.getElementById("outputField").value=e}()},onMouseEnter:function(){return n()},onMouseLeave:function(){return i()},id:o,className:"icon-".concat(s," w-8 h-8"),children:Object(d.jsx)("img",{src:"icons/".concat(s,".svg"),alt:"$\n            {featureName}",className:"w-full h-full"})})}),x="I'm all out of strings",j=[],f=function e(t,n,i,o,s,c){Object(l.a)(this,e),this.featureName=t,this.featureFunction=n,this.iconFileName=i,this.helpDescription=o,this.helpDemoWebmFilename=s,this.helpURL=c,j.push(this)};new f("AddDecoration",(function(e){var t="\u2570(\u2594\u2200\u2594)\u256f";return"".concat(t).concat(e||x).concat(t)}),"fingerprint","Add a decororation to the input text.","helpAddDecoration.webm","https://foo.bar"),new f("MakeAesthetic",(function(e){return(e||x).toUpperCase().split("").join(" ")}),"columns","Make the input text aesthetic.","helpMakeAesthetic.webm","https://foo.bar"),new f("Sacrifice",(function(e){var t;return t=e?"Your ".concat(e.length," characters have been sacrificed. Thank You for your contribution"):"Please fill in the input box above",document.getElementById("inputField").value="",t}),"truck","Sacrifice your input to an Elder God. The Elder God is randomly chosen. We use DHL for shipping.","https://i.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.mp4","https://foo.bar");var g=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(i.useState)(!1),c=Object(a.a)(s,2),l=c[0],r=c[1],x=Object(i.useState)(!1),f=Object(a.a)(x,2),g=f[0],v=f[1],O=Object(i.useState)(!0),y=Object(a.a)(O,2),N=y[0],w=y[1],F=Object(i.useRef)(null);Object(i.useEffect)((function(){F.current=n}),[n]);var k=Object(i.useCallback)((function(e){72===e.keyCode&&n&&r(!l)}),[r,l,n]);return Object(i.useEffect)((function(){return window.addEventListener("keydown",k),function(){window.removeEventListener("keydown",k)}}),[k]),Object(d.jsxs)("div",{id:"container",className:"overflow-hidden w-6/12 h-full mx-auto p-6 flex flex-col ",children:[Object(d.jsxs)("header",{className:"flex flex-col gap-2",children:[Object(d.jsxs)("h1",{className:"whitespace-pre-wrap ",children:["Helper ","\n","Sandbox"]}),Object(d.jsx)("hr",{className:"w-full h-1 bg-black"}),Object(d.jsx)("a",{href:"https://github.com/Return180bpm/helper-sandbox",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{alt:"Open this project on github",src:"icons/github.svg",className:"w-5 h-5"})})]}),Object(d.jsxs)("main",{className:"relative flex-grow flex justify-center items-start pt-12 ",children:[Object(d.jsxs)("div",{id:"workbench",className:"section-box w-96 rounded-lg shadow-sm",children:[Object(d.jsx)("div",{id:"workbenchTitleBar",className:"title-bar bg-pink-600 text-white",children:Object(d.jsx)("h4",{children:"Workbench"})}),Object(d.jsxs)("div",{id:"workbenchBody",className:"section-box-body py-8",children:[Object(d.jsx)("input",{type:"text",id:"inputField",className:"input-simple",placeholder:"Input",name:"inputField",defaultValue:""}),Object(d.jsx)("div",{id:"buttonContainer",className:"w-full flex justify-center gap-4",children:j.map((function(e,t){return Object(d.jsx)(m,{onClickFunction:e.featureFunction,onMouseEnterFunction:function(){w(!1),o(e),v(!0)},onMouseLeaveFunction:function(){v(!1)},featureName:e.featureName,iconFileName:e.iconFileName},e.featureName)}))}),Object(d.jsx)("input",{type:"text",id:"outputField",className:"input-simple",placeholder:"Output",name:"outputField",defaultValue:""})]})]}),Object(d.jsx)(u,{isVisible:N,featureIconFileNameArray:j.map((function(e){return e.iconFileName})),closeIntroBox:function(){return w(!1)}}),Object(d.jsx)(b,{onClickFunction:function(){r(!1),w(!N)}}),Object(d.jsx)(p,{isVisible:g&&!l,featureName:null===n||void 0===n?void 0:n.featureName,iconFileName:null===n||void 0===n?void 0:n.iconFileName}),Object(d.jsx)(h,{isVisible:n&&l,featureName:null===n||void 0===n?void 0:n.featureName,iconFileName:null===n||void 0===n?void 0:n.iconFileName,helpDescription:null===n||void 0===n?void 0:n.helpDescription,helpDemoWebmFilename:null===n||void 0===n?void 0:n.helpDemoWebmFilename,helpURL:null===n||void 0===n?void 0:n.helpURL,closeHelpBox:function(){return r(!1)}})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.bec1a007.chunk.js.map