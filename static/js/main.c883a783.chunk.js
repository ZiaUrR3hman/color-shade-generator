(this["webpackJsonpcolor-shade-generator"]=this["webpackJsonpcolor-shade-generator"]||[]).push([[0],{20:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(12),o=n.n(a),l=(n(20),n(10)),s=n(3),i=n(2),d=function(t){var e=t.hex,n=t.changeSelectColor;return Object(i.jsx)("li",{className:"flex-1  inline-block h-28",style:{minWidth:"4%"},children:Object(i.jsx)("div",{onClick:function(){n(e,!0)},className:"hover:scale-110 md:hover:scale-125 hover:transform w-full h-full cursor-pointer transition duration-200 ease-in",style:{backgroundColor:e}})})},u=n(6),b=n(4),x=n(7),j=n(22),m=u.a.input((function(t){var e=t.thumbColor;return"\n\t\t&::-webkit-slider-thumb {\n\t\t\t-webkit-appearance: none;\n\t\t\tappearance: none;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 50%;\n\t\t\tbackground: ".concat(e,";\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&::-moz-range-thumb {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 50%;\n\t\t\tbackground: gray;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&::-moz-range-thumb:hover,\n\t\t&::-webkit-slider-thumb:hover {\n\t\t\tbackground: ").concat(e,";\n\t\t}\n\t")})),g=u.a.button((function(t){var e=t.gradient,n=t.dark,r=t.light;return"\n\t\tbackground: ".concat(n,";\n\t\t&:hover {\n\t\t\tbackground: ").concat(r,";\n\t\t}\n\t\t&:active {\n\t\t\tbackground: ").concat(e,";\n\t\t}\n\n\t\t\n\t")})),h=u.a.h2((function(t){var e=t.hexColor,n=t.brightColor;return"\n\ttext-shadow:1px 1px 2px ".concat(n,";\n\t@media screen and (min-width: 786px) {\n\t\ttext-shadow:0 1px ").concat(n,",\n\t\t-1px 0 ").concat(e,",\n\t\t-1px 2px ").concat(n,",\n\t\t-2px 1px ").concat(e,",\n\t\t-2px 3px ").concat(n,",\n\t\t-3px 2px ").concat(e,",\n\t\t-3px 4px ").concat(n,",\n\t\t-4px 3px ").concat(e,",\n\t\t-4px 5px ").concat(n,",\n\t\t-5px 4px ").concat(e,",\n\t\t-5px 6px ").concat(n,",\n\t\t-6px 5px ").concat(e,",\n\t\t-6px 7px ").concat(n,",\n\t\t-7px 6px ").concat(e,",\n\t\t-7px 8px ").concat(n,",\n\t\t-8px 7px ").concat(e,";\n\t}\n\t")}));var f=function(){var t=Object(r.useState)(10),e=Object(s.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(j.random().toHexString()),o=Object(s.a)(a,2),u=o[0],f=o[1],p=Object(r.useState)(u),O=Object(s.a)(p,2),v=O[0],y=O[1],N=Object(r.useState)([]),w=Object(s.a)(N,2),C=w[0],k=w[1],S=Object(r.useState)(v),E=Object(s.a)(S,2),H=E[0],G=E[1],T=Object(r.useState)(""),L=Object(s.a)(T,2),B=L[0],M=L[1],R=Object(r.useState)(""),z=Object(s.a)(R,2),I=z[0],D=z[1],X=Object(r.useState)(""),F=Object(s.a)(X,2),J=F[0],V=F[1],_=Object(r.useState)(!1),A=Object(s.a)(_,2),W=A[0],Y=A[1],Z=Object(r.useState)(!1),q=Object(s.a)(Z,2),K=q[0],P=q[1],Q=Object(r.useState)(!1),U=Object(s.a)(Q,2),$=U[0],tt=U[1],et=Object(r.useState)(!1),nt=Object(s.a)(et,2),rt=nt[0],ct=nt[1],at=function(){for(var t,e,n=Math.floor(100/C.length),r=null!==(t="linear-gradient(to right,"+(null===(e=C[0])||void 0===e?void 0:e.hex))&&void 0!==t?t:u,c='<linearGradient id="MyGradient">',a=1;a<C.length;a++)r+=" "+n*a+"%, "+C[a].hex+" ",c+='<stop offset="'.concat(n*a,'%" stop-color="').concat(C[a].hex,'"></stop>');return{bgGradient:r+=")",svgGradient:c+="</linearGradient>"}},ot=function(t,e){if(G(t),M(j(t).toHexString()),D(j(t).toRgbString()),V(j(t).toHslString()),e){var n=document.getElementById("colorValues").getBoundingClientRect().top+window.scrollY;window.scroll({top:n,behavior:"smooth"})}},lt=function(t){var e,n,r;(Y(!0),"RGB"===t)&&(null===(e=navigator.clipboard)||void 0===e||e.writeText(I),tt(!0));"HEX"===t&&(null===(n=navigator.clipboard)||void 0===n||n.writeText(B),P(!0));"HSL"===t&&(null===(r=navigator.clipboard)||void 0===r||r.writeText(J),ct(!0));Y(!0)};Object(r.useEffect)((function(){var t=setTimeout((function(){Y(!1)}),2e3);return function(){clearTimeout(t)}}),[W]),Object(r.useEffect)((function(){var t=setTimeout((function(){tt(!1)}),2e3);return function(){clearTimeout(t)}}),[$]),Object(r.useEffect)((function(){var t=setTimeout((function(){P(!1)}),2e3);return function(){clearTimeout(t)}}),[K]),Object(r.useEffect)((function(){var t=setTimeout((function(){ct(!1)}),2e3);return function(){clearTimeout(t)}}),[rt]);var st=Object(r.useState)(at()),it=Object(s.a)(st,2),dt=it[0],ut=it[1];return document.getElementsByTagName("body")[0].style.background=dt.bgGradient,Object(r.useEffect)((function(){y(j(u).toHexString()),function(){var t=[];if(0!==u.length){for(var e=j(u).toHsl(),r=n-1;r>=0;r-=1)e.l=(r+.5)/n,t.push({hex:j(e).toHexString()});k((function(){return t}))}}()}),[n,u]),Object(r.useEffect)((function(){ut((function(){return at()}))}),[C]),Object(r.useEffect)((function(){ot(u,!1)}),[u]),Object(i.jsxs)("div",{className:"relative overflow-hidden",style:{minHeight:"220px"},children:[Object(i.jsx)("div",{className:"absolute w-full h-80",style:{zIndex:-1},children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none",className:"h-96 w-full",children:[Object(i.jsx)("defs",{dangerouslySetInnerHTML:{__html:dt.svgGradient}}),Object(i.jsx)("path",{fill:"url(#MyGradient)",fillOpacity:"10",d:"M0,256L21.8,250.7C43.6,245,87,235,131,192C174.5,149,218,75,262,80C305.5,85,349,171,393,186.7C436.4,203,480,149,524,149.3C567.3,149,611,203,655,197.3C698.2,192,742,128,785,90.7C829.1,53,873,43,916,69.3C960,96,1004,160,1047,176C1090.9,192,1135,160,1178,138.7C1221.8,117,1265,107,1309,112C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"})]})}),Object(i.jsxs)("div",{className:"container mx-auto",children:[Object(i.jsx)("div",{className:"flex justify-center ",children:Object(i.jsx)(h,{className:"font-bold text-2xl md:text-6xl lg:text-7xl text-gray-800  my-10 tracking-wider",style:{color:j(v).darken(70).toString()},hexColor:j(v).desaturate().toString(),brightColor:j(v).brighten().toString(),children:"Color Shades Generator"})}),Object(i.jsxs)("div",{className:"bg-white border border-gray-200 m-2 px-6 relative",children:[Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("form",{className:"flex flex-col",onSubmit:function(t){return t.preventDefault()},children:Object(i.jsxs)("div",{className:"grid grid-cols-12",children:[Object(i.jsxs)("div",{className:"col-span-10 flex flex-col mr-5",children:[Object(i.jsx)("label",{htmlFor:"color",className:"font-bold text-lg py-2 text-gray-700 ",children:"Enter Color"}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("input",{type:"color",value:v,className:"w-10 h-10 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800",onChange:function(t){return f(t.target.value)}}),Object(i.jsx)("input",{type:"text",className:"px-2 ml-1 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800",name:"color",id:"color",value:u,onChange:function(t){return f(t.target.value)}})]}),Object(i.jsx)("p",{className:"mt-2 leading-10",children:"Example:\xa0#808080 or gray or rgb(128, 128, 128)"}),Object(i.jsx)(g,{onClick:function(){f(j.random().toHexString())},type:"button",className:"py-2 text-white uppercase font-semibold tracking-wider mt-5 max-w-min px-5 border-gray-200 border rounded-sm focus:outline-none",style:{color:j(v).isDark()?"white":"black"},gradient:j(u).darken().toString(),dark:v,light:j(u).lighten().toString(),children:"generate\xa0random"})]}),Object(i.jsx)("div",{className:"col-span-2  w-full   h-28 justify-self-end mt-4 border-gray-200 border",style:{backgroundColor:v}})]})}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("label",{htmlFor:"colorShades",className:"font-bold text-lg py-2 text-gray-700 ",children:"Color Shades"}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)(m,{type:"range",id:"colorShades",name:"colorShades",min:"2",max:"25",className:"hover:opacity-100  block self-center w-full h-4 rounded-md outline-none opacity-70 transition-opacity duration-300",style:{appearance:"none",background:dt.bgGradient},thumbColor:j(u).darken().toString(),onChange:function(t){return c(t.target.value)},value:n}),Object(i.jsx)("span",{className:"self-center text-xl font-bold px-3 py-2 bg-gray-100 border text-center rounded ml-3 w-14",children:n})]})]})]}),Object(i.jsx)("div",{className:"my-5 ",children:Object(i.jsx)("ul",{className:"flex flex-col md:flex-row  items-stretch",children:C.map((function(t,e){return Object(r.createElement)(d,Object(l.a)(Object(l.a)({},t),{},{key:e,changeSelectColor:ot}))}))})}),Object(i.jsxs)("div",{className:"md:grid grid-cols-12 ",children:[Object(i.jsxs)("div",{className:"col-span-8 mt-5 md:mt-12 mr-5",children:[Object(i.jsxs)("div",{className:"flex rgb(63, 137, 133) relative",id:"colorValues",children:[Object(i.jsx)("h3",{className:"text-gray-700 font-bold text-lg",children:"HEX"}),Object(i.jsx)("input",{value:B,disabled:!0,type:"text",className:"text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"}),Object(i.jsx)("div",{title:"Copy",onClick:function(){lt("HEX")},className:"absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600",children:K?Object(i.jsx)(x.a,{className:"h-8 w-8",style:{color:v}}):Object(i.jsx)(b.b,{className:"h-8 w-8"})})]}),Object(i.jsxs)("div",{className:"flex mt-5 relative",children:[Object(i.jsx)("h3",{className:"text-gray-700 font-bold text-lg",children:"RGB"}),Object(i.jsx)("input",{value:I,disabled:!0,type:"text",className:"text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"}),Object(i.jsx)("div",{title:"Copy",onClick:function(){lt("RGB")},className:"absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600",children:$?Object(i.jsx)(x.a,{className:"h-8 w-8",style:{color:v}}):Object(i.jsx)(b.b,{className:"h-8 w-8"})})]}),Object(i.jsxs)("div",{className:"flex mt-5 relative",children:[Object(i.jsx)("h3",{className:"text-gray-700 font-bold text-lg",children:"HSL"}),Object(i.jsx)("input",{value:J,disabled:!0,type:"text",className:"text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"}),Object(i.jsx)("div",{title:"Copy",onClick:function(){lt("HSL")},className:"absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600",children:rt?Object(i.jsx)(x.a,{className:"h-8 w-8",style:{color:v}}):Object(i.jsx)(b.b,{className:"h-8 w-8"})})]})]}),Object(i.jsx)("div",{className:"col-span-4 w-full h-64 md:mt-0    mt-4 border-gray-200 border mb-16 overflow-hidden",style:{backgroundColor:H}})]}),Object(i.jsx)("div",{className:"flex inv justify-center   absolute z-20  h-20 inset-x-0 -bottom-2",children:Object(i.jsxs)("div",{className:"".concat(W?"visible opacity-1":"opacity-0 invisible"," transition ease-in-out duration-500  px-6 py-2 border-gray-200 border rounded my-4   relative"),style:{backgroundColor:v,color:j(v).isDark()?"white":"black"},children:[Object(i.jsx)("span",{className:"text-xl inline-block mr-5 align-middle",children:Object(i.jsx)(b.a,{})}),Object(i.jsxs)("span",{className:"inline-block align-middle mr-8",children:[Object(i.jsx)("b",{className:"capitalize ",children:"color"})," copied!"]}),Object(i.jsx)("button",{onClick:function(){Y(!1)},className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none",children:Object(i.jsx)("span",{children:"\xd7"})})]})})]})]})]})};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c883a783.chunk.js.map